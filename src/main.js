import './assets/main.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import VueTelInput from 'vue-tel-input'
import 'vue-tel-input/vue-tel-input.css';

import { createApp } from 'vue'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'

const vuetify = createVuetify({
  components,
})

const app = createApp(App);
app.use(VueTelInput);
app.use(vuetify)

app.mount('#app')
