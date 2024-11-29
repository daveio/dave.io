import { createApp } from 'vue'
import App from './App.vue'
import './css/main.css'
import VueGtag from "vue-gtag"

createApp(App).use(VueGtag, {
  config: { id: "G-5WNQT8CW9J" }
}).mount("#app")
