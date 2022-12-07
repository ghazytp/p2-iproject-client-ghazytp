import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import Toast from 'vue-toastification'

import "vue-toastification/dist/index.css"

import App from './App.vue'
import router from './router'

import './assets/style.css'

const app = createApp(App)
const pinia = createPinia()

const options = {
    // You can set your default options here
};

pinia.use(({store}) => {
    store.router = markRaw(router)
})


app.use(Toast, options)
app.use(pinia)
app.use(router)




app.mount('#app')
