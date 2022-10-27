<template>
  <div class="column items-center col-auto" style="margin: 80px 0">
    <div class="col 6" style="min-width: 400px;">
      <q-form style="padding: 5px;" @submit.prevent="register">
        <div class="text-h5 text-center text-weight-bold" style="margin: 20px 0">Sign Up</div>
        <q-separator />
        <q-input filled v-model="email" label="Email" lazy-rules
        :rules="[val => val && val.length > 0 || 'email is required']" />
        <q-input filled v-model="username" label="Username" lazy-rules
        :rules="[val => val && val.length > 0 || 'username is required']" />
        <q-input filled v-model="password" type="Password" label="Password" lazy-rules
        :rules="[val => val && val.length > 0 || 'password is required']" />
        <div style="margin: 3px;" class="align-self:center">
          <q-btn label="Register" type="submit" color="primary" />
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
        <div style="margin: 15px; cursor: pointer;" class="text-p text-center text-weight-light p-by-xl" @click="goToLogin">Already have an account?, Sign in</div>
      </q-form>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { api } from 'boot/axios'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'IndexPage',
  components: {},
  data() {
    return {
      email: '',
      username: '',
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
    register() {
      const data = {
        email: this.email,
        password: this.password,
        username: this.username
      }
      api.post('auth/register', JSON.stringify(data), {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
      })
        .then(({data}) => {
          if (data.statusCode !== 201) {
            this.quasar.notify({
              message: data.message,
              color: 'negative'
            })
          } else {
            this.quasar.notify({
              message: data.message,
              color: 'secondary'
            })
            this.$router.push({path: '/login'})
          }
        })
        .catch(error => {
          console.log(error)
          this.quasar.notify({
            message: 'network error, please contact support',
            color: 'negative'
          })
        })
    },
    goToLogin() {
      this.$router.push({path: '/login'})
    }
  }
});
</script>
