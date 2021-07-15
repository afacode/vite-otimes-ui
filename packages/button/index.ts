import { App } from 'vue'
import Button from './src/button.vue'

export type SFCWithInstall<T> = T & { install(app: App): void; }

Button.install = (app: App): void => {
  app.component(Button.name, Button)
}

const OButton: SFCWithInstall<typeof Button> = Button 

export default OButton