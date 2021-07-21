import { createApp } from 'vue'
import App from './App.vue'
import Store from './store'
// import '../styles/index.scss'
// import OTimesUI from 'pkg/index'
// import { OButton } from 'pkg/index'
import { OButton } from './../dist/otimes-ui.es.js'
// import OTimesUI from './../dist/otimes-ui.es.js'
// import './../dist/style.css'
//
const app = createApp(App)
// app.use(OTimesUI)
app.use(OButton)
// app.component(OButton.name, OButton)
app.use(Store)
app.mount('#app')
