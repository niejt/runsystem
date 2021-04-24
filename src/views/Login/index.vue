<template>
  <div  class="container_login">
    <el-card>
        <h3 class="title">运营管理系统</h3>
        <el-form label-position="right" ref="formDataRef" :model="formData" :rules="formDataRules" label-width="80px">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="formData.username"></el-input>
            </el-form-item>
             <el-form-item label="密 码" prop="password">
                <el-input v-model="formData.password" type="password" ></el-input>
            </el-form-item>
            <!-- <el-form-item>

            </el-form-item> -->
        </el-form>
        <el-row type="flex" justify="center" style="height:10px" align="middle">
            <el-col :span="2">
                <el-button type="primary" @click="login('formDataRef')">确 定</el-button>
                <el-button @click="resetForm">重置</el-button>
            </el-col>
        </el-row>

    </el-card>
  </div>
</template>

<script>
import { validatePass, validateUsername } from '../../utils/validate.js'

export default {
  name: 'page-login',
  data () {
    // 验证用户名是否合法
    const validateusername = (rule, value, callback) => {
      validateUsername(value) ? callback() : callback(new Error('用户名只能包括数字字母的组合，长度为4-15位'))
    }
    // 验证密码是否合法
    const validatepassword = (rule, value, callback) => {
      validatePass(value) ? callback() : callback(new Error('密码至少包含 数字和英文，长度6-20'))
    }
    return {
      formData: {
        username: 'admin',
        password: 'a123456'
      },
      formDataRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { validator: validateusername, min: 4, max: 15, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { validator: validatepassword, min: 6, max: 20, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    //   登录
    login (formDataRef) {
      this.$refs[formDataRef].validate((valid) => {
        //   验证成功
        if (!valid) {
          this.$message.error('请输入用户名和密码')
          return false
        } else {
          //   console.log(valid)
          this.$message.success('登录成功')
          this.$router.push('/home')
        }
      })
    },
    resetForm () {
      this.$refs.formDataRef.resetFields()
      this.formData = {
        username: '',
        password: ''
      }
    }
  }
}
</script>

<style lang="scss">
.title {
  text-align: center;
  font-size: 32px;
  letter-spacing: 3px;
  background-image: linear-gradient(135deg,red,blue);
  -webkit-background-clip:text;
  color: transparent;
}
.container_login {
    height: 100vh;
    background: url("../../assets/bg.png") no-repeat center/cover;
    display: flex;
    align-items: center;
    justify-content: center;
    .el-card {
        width: 500px;
        height: auto;
        // background-color: purple;
        // position: absolute;
        // left: 50%;
        // top: 50%;
        // transform: translate(-50%,-50%);

        background:rgba(255,255,255,.7);
        border: none;
        border-radius: 15px;
        .el-form-item__label {
            font-size: 18px;
        }
        .el-form-item {
            margin-top: 35px;
        }
       .el-card__body {
           margin-right: 30px;
       }
    }
    .el-row {
      margin-top: 50px;
      margin-bottom: 20px;
    }
    .el-col {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 35px;
    }
}
</style>
