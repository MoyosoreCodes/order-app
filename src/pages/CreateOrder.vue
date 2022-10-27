<template>
  <div class="column items-end" style="margin: 10px 5px">
    <q-btn label="Logout" type="submit" color="primary" @click="logout" />
  </div>

  <div class="column items-center col-auto" style="margin: 10px 0">
    <div class="col 6" style="min-width: 400px;">
      <q-form style="padding: 5px;" @submit.prevent="createOrder" @reset="resetForm">
        <div class="text-h5 text-center text-weight-bold" style="margin: 20px 0">Create a new order</div>
        <q-separator />
        <div v-for="productItem of products" :key="productItem.id">
          <div>
            <q-input filled v-model="productItem.name" label="Product name" lazy-rules
              :rules="[val => val && val.length > 0 || 'name of product is required']">
            </q-input>
            <q-input filled v-model="productItem.quantity" type="number" label="Quantity" lazy-rules :rules="[
              val => val !== null && val !== '' || 'Quantity is required',
              val => val > 0 || 'Quantity cannot be less than 1'
            ]">
              <template v-slot:after>
                <q-btn round dense flat icon="add" color="white" class="bg-blue" @click="addEntry" />
                <q-btn round dense flat icon="delete" color="white" class="bg-blue"
                  @click="removeEntry(productItem.id)" />
              </template>
            </q-input>
          </div>
        </div>
        <div style="margin: 3px;" class="align-self:center">
          <q-btn label="Create product" type="submit" color="primary" />
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
        <!-- <div style="margin: 15px; cursor: pointer;" class="text-p text-center text-weight-light p-by-xl" @click="goToLogin">Already have an account?, Sign in</div> -->
      </q-form>
    </div>
  </div>
</template>

<script>
import { api } from 'boot/axios'
import { useQuasar } from 'quasar'

export default {
  name: 'CreateOrder',
  setup() {
    const quasar = useQuasar()
    return {
      quasar
    }
  },
  data() {
    return {
      products: [
        { id: Math.floor(Math.random() * 9999), name: '', quantity: 1 }
      ],
    }
  },
  methods: {
    createOrder() {
      if (!this.quasar.localStorage.has('token')) {
        this.quasar.notify({
          color: 'negative',
          message: 'Unauthorized, login to continue'
        })
        this.$router.push({ path: '/login' })
        return
      }
      this.quasar.loadingBar.setDefaults({
        color: "secondary",
        size: '15px',
        position: "bottom"
      })
      this.quasar.loadingBar.start()
      const token = this.quasar.localStorage.getItem('token')
      const data = {
        products: [
          ...this.products.map(product => {
            return { name: product.name, quantity: product.quantity }
          })
        ]
      }
      api.post('orders', JSON.stringify(data), {
        headers: {
          Authorization: token,
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
      })
        .then(({ data }) => {
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
          }
          this.quasar.loadingBar.stop()
        })
        .catch(error => {
          this.quasar.notify({
            message: 'network error, please contact support',
            color: 'negative'
          })
        })
    },
    resetForm() {
      this.products = [
        { id: Math.floor(Math.random() * 9999), name: '', quantity: 1 }
      ]
    },
    addEntry() {
      this.products.push({ id: Math.floor(Math.random() * 9999), name: '', quantity: 1 })
    },
    removeEntry(id) {
      if (this.products.length <= 1) return this.products
      this.products = this.products.filter(product => id != product.id)
    },
    logout() {
      this.quasar.localStorage.set('token', null);
      this.$router.push({ path: '/login' })
    }
  }
}
</script>
