import { assertBooleanLiteral } from '@babel/types';
import OButton from './button/index'

const components = [
  OButton
]

const plugins = []

const install = (app, opts = {}) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
  plugins.forEach(plugin => {
    app.use(plugin)
  })
}

export {
  OButton
}

export default {
  version: '0.0.1',
  install
}