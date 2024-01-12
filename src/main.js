import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/assets/css/style.css'
import '../src/assets/css/vendor.min.css'
import '../src/assets/css/theme.min.css'
import "@fortawesome/fontawesome-free/css/fontawesome.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"

createApp(App).use(store).use(router).mount('#app')
