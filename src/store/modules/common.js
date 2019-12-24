import { isMobile } from '../../utils/util'


const state = {
    isMobile: false
}

const getters = {
    isMobile: (state) => {
        if (state.isMobile) {
            return true
        } else {
            return false
        }
    }
}


const mutations = {
    checkIsMobile(state) {
        if (isMobile()) {
            state.isMobile = true
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}