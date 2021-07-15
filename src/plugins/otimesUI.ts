import OButton from '../packages/button/src/button.vue'
import { createApp } from 'vue'



// import App from './../App.vue'
// const app = createApp(App)

export default function(app) {
  app.use(OButton)
}
// const components: [] = []
// const plugins: [] = []
// components.forEach(componet => {
//   app.component(component.name, component)
// })

// plugins.forEach(plugin => {
//   app.use(plugin)
// })
