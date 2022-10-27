<template>
  <div class="column items-center col-auto" style="margin: 100px 0">
    <div class="col 6" style="min-width: 400px;">
      <q-form style="padding: 5px;" @submit.prevent="login">
        <p class="text-h5 text-center text-weight-bold" style="margin: 20px 0">Sign In</p>
        <q-separator />
        <q-input filled v-model="email" label="Email" lazy-rules
          :rules="[val => val && val.length > 0 || 'email is required']" />
        <q-input filled v-model="password" type="Password" label="Password" lazy-rules
          :rules="[val => val && val.length > 0 || 'password is required']" />
        <div style="padding: 3px;" class="align-self:center">
          <q-btn label="Sign In" type="submit" color="primary" />
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
        <div style="margin: 15px; cursor: pointer;" class="text-p text-center text-weight-light p-by-xl"
          @click="goToRegister">Don't have an account?, Sign up</div>
      </q-form>
    </div>
  </div>
</template>

<script>
import { api } from 'boot/axios'
import { useQuasar } from 'quasar'

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  setup() {
    const quasar = useQuasar()
    return {
      quasar
    }
  },
  methods: {
    login() {
      const data = {
        email: this.email,
        password: this.password,
      }
      api.post('auth/login', JSON.stringify(data), {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
      })
        .then(({ data }) => {
          console.log(data)
          if (data.statusCode !== 200) {
            this.quasar.notify({
              message: data.message,
              color: 'negative'
            })
          } else {
            this.quasar.notify({
              message: data.message,
              color: 'secondary'
            })
            // set token in local storage
            this.quasar.localStorage.set('token', `Bearer ${data.data}`)
            this.$router.push({ path: '/order-new' })
          }
        })
        .catch(error => {
          console.log(error)
          if(error.response.data.statusCode == 404 || error.response.data.statusCode == 400 || error.response.data.message.includes('user not found')) {
            this.quasar.notify({
              message: error.response.data.message,
              color: 'negative'
            })
            return
          }
          this.quasar.notify({
            message: 'network error, please contact support',
            color: 'negative'
          })
        })
    },
    goToRegister() {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
