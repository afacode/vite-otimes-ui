import { App } from 'vue'
import OInput from './src/input.vue'

OInput.install = (app: App): void => {
  app.component(OInput.name, OInput)
}

export default OInput
