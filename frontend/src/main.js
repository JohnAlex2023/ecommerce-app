import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/splide.min.css'

import '@fortawesome/fontawesome-free/css/all.css'





const app = createApp(App)
app.use(router)
app.use(createPinia())
app.component('Splide', Splide)
app.component('SplideSlide', SplideSlide)
app.mount('#app')
