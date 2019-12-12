<template>
  <div>
      <img class="login-icon" src="../../assets/images/ic_login_emjo.jpg" alt="看啥子哟！">
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
        <div class="input-item input-code">
            <el-input
                style="width:60%;"
              v-model="code"
              clearable>
            </el-input>
            <el-button :disabled="sendBtnDisable" type="primary" @click="handleSendCode">{{sendBtnTxt}}</el-button>
        </div>
        <div class="input-item">
            <label>密码</label>
            <el-input
              v-model="pwd"
              show-password>
            </el-input>
        </div>
        <div class="input-item">
            <label>确认密码</label>
            <el-input
              v-model="cPwd"
              show-password>
            </el-input>
        </div>
        <el-button type="primary" @click="handleSubmit">提交</el-button>
      </div>

  </div>
</template>

<script>
import { isEmail } from '../../utils/validation'
import { get, post } from '../../utils/http'
import api from '../../config/api'
export default {
    name: 'register',
    data () {
        return {
            errShow: false,
            errorMsg: '',
            email: '',
            code: '',
            pwd: '',
            cPwd: '',
            sendBtnTxt: '发送验证码',
            time: 60,
            sendBtnDisable: false
        }
    },
    methods: {
      closeErr () {
        this.errShow = false
      },
      handleSendCode () {
        let _this = this
        if (!this.email) {
            this.errorMsg = '请输入邮箱地址'
            this.errShow = true
            return
        }
        if (!isEmail(this.email)) {
            this.errorMsg = '请输入正确的邮箱地址'
            this.errShow = true
            return
        }
        get(api.sendEmailCode(this.email)).then(() => {
          _this.$message({
            showClose: true,
            message: '发送成功',
            type: 'success'
          });
           _this.sendBtnDisable = true
          let interval = setInterval(function () {
            _this.time = _this.time -1
            _this.sendBtnTxt = _this.time + 's'
            if (_this.time === 0) {
              clearInterval(interval)
              _this.time = 60
              _this.sendBtnTxt = '发送验证码'
              _this.sendBtnDisable = false
            } 
          }, 1000)
        })
       
      },

      handleSubmit () {
        let _this = this
        let param = {
          email: this.email,
          code: this.code,
          pwd: this.pwd,
          confirm_pwd: this.cPwd
        }
        post(api.register, param).then((res) => {
          this.$store.commit('auth/setUserToken', res.data)
          _this.$message({
            showClose: true,
            message: '注册成功',
            type: 'success'
          })
          this.$router.replace('/')
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

  .input-code {
    display: flex;
    justify-content: space-between;
  }
  .input-item {
    margin-bottom: 2em;
  }

  .input-item label{
    display: block;
    margin-bottom: .5em;
  }
</style>