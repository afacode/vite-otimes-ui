import { createApp } from 'vue'
import App from './App.vue'

import '../styles/index.scss'
import OTimesUI from 'pkg/index'
import { OButton } from 'pkg/index'

const app = createApp(App) 
// app.use(OTimesUI)
app.use(OButton)
// app.component(OButton.name, OButton)

app.mount('#app')
