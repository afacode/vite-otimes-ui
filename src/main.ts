import { createApp } from 'vue'
import App from './App.vue'

import '../styles/index.scss'
// import OTimesUI from './plugins/otimesUI'
import OButton from 'pkg/button/src/button.vue'

const app = createApp(App) 

app.component(OButton.name, OButton)

app.mount('#app')
