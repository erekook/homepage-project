<template>
  <div>
      <img class="login-icon" src="../../assets/images/gif_login_emjo.gif" alt="看啥子哟！">
      <div class="login-container">
        <el-alert
          v-show="errShow"
          @close="closeErr"
          type="error"
          effect="dark">
          <slot>{{errorMsg}}</slot>
        </el-alert>
        <div class="input-item">
            <label>电子邮件地址</label>
            <el-input
              v-model.trim="email"
              clearable>
            </el-input>
        </div>
        <div class="input-item">
            <label>密码</label>
            <el-input
              v-model="pwd"
              show-password>
            </el-input>
        </div>
        <el-button type="primary" @click="handleLogin">登录</el-button>
        <el-button @click="handleGotoRegister">注册</el-button>
      </div>

  </div>
</template>

<script>
import { post } from '../../utils/http'
import { isEmail } from '../../utils/validation'
import api from '../../config/api'

export default {
    name: 'login',
    data () {
      return {
        errShow: false,
        errorMsg: '',
        email: '',
        pwd: ''
      }
    },
    methods: {
      closeErr () {
        this.errShow = false
      },
      handleGotoRegister () {
        this.$router.replace({
          name: 'register'
        })
      },
      handleLogin () {
        // let _this = this
        if (!this.email) {
            this.errorMsg = '请输入邮箱地址'
            this.errShow = true
            return
        }
        if (!this.pwd) {
            this.errorMsg = '请输入密码'
            this.errShow = true
            return
        }
        if (!isEmail(this.email)) {
            this.errorMsg = '请输入正确的邮箱地址'
            this.errShow = true
            return
        }
        let param = {
          email: this.email,
          pwd: this.pwd
        }
        post(api.login, param).then((res) => {
            let data = res.data
            if (data) {
              this.$store.commit('auth/setUserToken', data)
              if (this.$route.query.redirect) {
                this.$router.replace({
                  path: this.$route.query.redirect
                })
              } else {
                this.$router.replace('/')
              }
            }
        })
       
      }
    }
}
</script>

<style scoped>
  .login-icon {
    width: 10em;
    height: 10em;
    margin: 5em auto 3em auto;
    display: block;
  }
  .login-container {
    width: 30%;
    border: 1px solid #999999;
    border-radius: 20px;
    background: #ffffff;
    margin: 0 auto;
    padding: 2em;
  }

  .input-item {
    margin-bottom: 2em;
  }

  .input-item label{
    display: block;
    margin-bottom: .5em;
  }
</style>