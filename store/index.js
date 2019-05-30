import Vue from 'vue';
import Vuex from 'vuex';
import moduleArticles from './articles'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {  
        moduleArticles
    }
})

export default store;