import { post } from '../../utils/http'
import api from '../../config/api'

const state = {
    token: ''
}

const getters = {
    isLogin: (state) => {
        if (state.token) {
            return true
        } else {
            return false
        }
    }
}

const actions = {
    async userLogin({ commit }, param) {
        await post(api.login, param).then((res) => {
            let token = res.data.token
            if (token) {
                commit('setUserToken', token)
            }
        })
    },
    getToken({ state, commit }) {
        if (!state.token) {
            commit('loadUserToken')
        }
    }

}

const mutations = {
    setUserToken(state, token) {
        window.localStorage.setItem("token", token)
        state.token = token
    },
    loadUserToken(state) {
        let token = window.localStorage.getItem('token')
        if (token) {
            state.token = token
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}