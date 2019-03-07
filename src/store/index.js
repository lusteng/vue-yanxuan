import Vue from "vue"
import Vuex from "vuex"
import Index from './modules/index'
import Items from './modules/items'
import * as mutations from './mutation-types'


Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        Index,
        Items
    },
    strict: debug
});
