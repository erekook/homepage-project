import { post } from '../../utils/http'
import api from '../../config/api'

const state = {
    token: '',
    user: null
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
            if (res.data) {
                commit('setUserToken', res.data)
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
        // localStorage 不能存对象，只能存储字符串
        window.localStorage.setItem("token", data.token)
        window.localStorage.setItem("user", JSON.stringify(data.user))
        state.token = data.token
        state.user = data.user
    },
    loadUserToken(state) {
        let token = window.localStorage.getItem('token')
        let user = window.localStorage.getItem('user')
        if (token && user) {
            state.token = token
            state.user = JSON.parse(user)
        }
    },
    logout(state) {
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('user')
        state.token = ""
        state.user = null

    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}