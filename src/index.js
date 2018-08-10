export const ElSelectRemoteMultiple = require('./ElSelectRemoteMultiple.vue').default

let Vue

function install (_Vue, options = (typeof window !== 'undefined' && window.ElSelectRemoteMultipleOptions)) {

  if (Vue) {
    console.warn('[ElSelectRemoteMultiple] already installed. Vue.use(ElSelectRemoteMultiple) should be called only once.')
    return
  }

  Vue = _Vue

  if (Object.prototype.toString.call(options) === '[object Object]') {
    if (options.ajax instanceof Object && options.ajax.hasOwnProperty('get') && options.ajax.hasOwnProperty('post')) {
      Object.assign(ElSelectRemoteMultiple.props.ajax, {
        required: false,
        default () {
          return options.ajax
        }
      })
    }
  }

  Vue.component(ElSelectRemoteMultiple.name, ElSelectRemoteMultiple)
}

/* istanbul ignore next */
ElSelectRemoteMultiple.install = install

// auto install in dist mode
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}


