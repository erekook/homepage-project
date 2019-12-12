import { post } from '../../utils/http'
import api from '../../config/api'

const state = {
    token: '',
    user: {
        email: ''
    }
}

const getters = {
    isLogin: (state) => {
        if (state.token) {
            return true
        } else {
            return false
        }
    },
    userInfo: (state) => {
        if (state.user) {
            return state.user
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
    setUserToken(state, data) {
        window.localStorage.setItem("token", data.token)
        window.localStorage.setItem("user", data.user)
        state.token = data.token
        state.user = data.user
    },
    loadUserToken(state) {
        let token = window.localStorage.getItem('token')
        let user = window.localStorage.getItem('user')
        if (token && user) {
            state.token = token
            state.user = user
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