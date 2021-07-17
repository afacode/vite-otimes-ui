import { App } from 'vue'
import OSwitch from './src/switch.vue'

OSwitch.install = (app: App): void => {
  app.component(OSwitch.name, OSwitch)
}

export default OSwitch
