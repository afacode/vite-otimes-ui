import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
// import OTimesUI from './plugins/otimesUI'
import OButton from './packages/button/src/button.vue'
import OTimesUI from './plugins/otimesUI'

const app = createApp(App) 

// app.use(OTimesUI)
app.component(OButton.name, OButton)

app.mount('#app')
