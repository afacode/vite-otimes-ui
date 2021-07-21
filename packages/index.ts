import './styles/index.scss'
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

// if (typeof window !== 'undefined' && window.app) {
//   install(window.app);
// }
export {
  OButton
}

export default {
  version: '0.0.2',
  install
}
