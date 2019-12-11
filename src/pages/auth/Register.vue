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
            <el-button type="primary" @click="handleLogin">发送验证码</el-button>
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
        <el-button type="primary" @click="handleLogin">提交</el-button>
      </div>

  </div>
</template>

<script>
export default {
    name: 'register',
    data () {
        return {
            errShow: false,
            errorMsg: '',
            email: '',
            code: '',
            pwd: '',
            cPwd: ''
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