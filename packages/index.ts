import { assertBooleanLiteral } from '@babel/types';
import Button from './button/src/button.vue'

const components = [
  Button
]

const install = (app, opts = {}) => {
  components.forEach(item => {
    app.component(item.name, item)
  })
}

export default {
  version: '0.0.1',
  install,
  Button
}