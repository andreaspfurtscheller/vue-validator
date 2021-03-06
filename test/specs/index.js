import Vue from 'vue'
import VueValidator from '../../src/index'
import 'babel-polyfill'

require('./validators')
require('./override')

Vue.use(VueValidator)

require('./asset')
require('./directives/validator')
require('./directives/validate')
require('./syntax')
require('./field')
require('./custom')
require('./dirty')
require('./pristine')
require('./modified')
require('./touched')
require('./untouched')
require('./valid')
require('./invalid')
require('./event')
require('./group')
require('./multiple')
require('./components/errors')
require('./errors')
require('./lazy')
require('./checkbox')
require('./radio')
require('./select')
require('./reset')
require('./validate')
require('./async')
