<template>
  <div id="login" class="zh-flex-center">
    <a-form class="login-form"
            ref="loginFormRef"
            :model="loginForm"
            :rules="loginFormRules"
            :label-col="{ style: { width: '60px' } }">
      <a-form-item label="用户名：" name="username">
        <a-input v-model:value="loginForm.username"/>
      </a-form-item>
      <a-form-item label="密码：" name="password">
        <a-input-password v-model:value="loginForm.password"/>
      </a-form-item>
      <a-button type="primary" value="" @click="submit()">登录</a-button>
    </a-form>
  </div>
</template>

<script setup name="ZysLogin">
import {useRoute, useRouter} from 'vue-router'
import {getUsers} from "@/api/globalRequest";
import {message} from "ant-design-vue";
import {useUserStore} from "@/pinia/modules/userStore";
import {addRoleRoutes} from "@/router";

class LoginForm {
  username = '';
  password = '';
}

class User {
  id = '';
  username = '';
  password = '';
  role = '';
}

/**
 * Demo登录页面
 *
 * author zys
 * date 2023/12/5 16:21
 */
const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const loginForm = reactive(new LoginForm())
const loginFormRef = ref();
const loginFormRules = {
  username: [
    {required: true, message: "请输入你的账号", trigger: "change"},
    {min: 3, max: 10, message: "账号的长度在3到10之间", trigger: "blur"},
  ],
  password: [
    {required: true, message: "请输入你的密码", trigger: "change"},
  ],
};

onMounted(() => {
  loginForm.username = 'zys';
  loginForm.password = '1';
})

const submit = () => {
  loginFormRef.value.validate().then(() => {
    getUsers({}).then(userList => {
      if (userList.some(val => val.username === loginForm.username)) {
        const index = userList.filter(val => val.username === loginForm.username)
            .findIndex(val => val.password === loginForm.password);
        if (index !== -1) {
          // {id, username, password, role}
          userStore.userInfo = userList[index];
          localStorage.setItem('role', userList[index].role)
          addRoleRoutes()
          router.replace('/');
        } else {
          message.error('密码不正确！');
        }
      } else {
        message.error('用户名不正确！');
      }
    })
  }).catch(error => {
  });
}

</script>

<style scoped lang="less">
#login {
  height: 100%;
  width: 100%;
  background: url("@/assets/images/login-bg.jpg");

  .login-form {
    width: 400px;
    text-align: center;
    background-color: #fff;
    padding: 40px;
    border-radius: 20px;
  }
}
</style>
