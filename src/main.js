import './assets/main.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import VueTelInput from 'vue-tel-input'
import 'vue-tel-input/vue-tel-input.css';

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.use(VueTelInput);

app.mount('#app')
