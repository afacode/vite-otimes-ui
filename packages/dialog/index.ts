import { App } from 'vue'
import ODialog from './src/dialog.vue'

ODialog.install = (app: App): void => {
  app.component(ODialog.name, ODialog)
}

export default ODialog
