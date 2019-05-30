import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
    articles: [],
}

// This is a module
export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}