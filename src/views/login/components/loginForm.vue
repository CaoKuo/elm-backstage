<script setup lang="ts">
import { reactive, ref } from "vue"

const loginFormRefs = ref(null)

const errorMessage = ref('')

const userInfo = reactive({
    username: '',
    password: '',
})

const rules = {
    username: [{ required: true, message: '用户名不能为空' }],
    password: [{ required: true, message: '密码不能为空' }],
}

const loginConfig = reactive({
    rememberPassword: false,
})

const handleSubmit = () => {
    console.log(loginFormRefs)
}

const setRememberPassword = (value: boolean) => {
    loginConfig.rememberPassword = value
}

const loading = ref(false)

</script>

<template>
    <div class="login_form_wrapper">
        <div class="login_form_title">ELM Backstage</div>
        <div class="login_form_sub_title">登录 ELM Backstage</div>
        <div class="login_form_error_msg">{{ errorMessage }}</div>
        <a-form
            ref="loginFormRefs"
            :model="userInfo"
            :rules="rules"
            class="login_form"
            layout="vertical"
        >
            <a-form-item
                field="username"
                :validate-trigger="['change', 'blur']"
                hide-label
            >
                <a-input
                    v-model="userInfo.username"
                    placeholder="请输入用户名"
                >
                    <template #prefix>
                        <icon-user />
                    </template>
                </a-input>
            </a-form-item>
            <a-form-item
                field="password"
                :validate-trigger="['change', 'blur']"
                hide-label
            >
                <a-input-password
                    v-model="userInfo.password"
                    placeholder="请输入密码"
                    allow-clear
                >
                    <template #prefix>
                        <icon-lock />
                    </template>
                </a-input-password>
            </a-form-item>
            <a-space :size="16" direction="vertical">
                <div class="login_form_password_actions">
                    <a-checkbox
                        checked="rememberPassword"
                        :model-value="loginConfig.rememberPassword"
                        @change="setRememberPassword as any"
                    >
                        记住密码
                    </a-checkbox>
                    <a-link>忘记密码</a-link>
                </div>
                <a-button type="primary" html-type="submit" long :loading="loading" @click="handleSubmit">
                    登录
                </a-button>
                <a-button type="text" long class="login_form_register_btn">
                    注册账号
                </a-button>
            </a-space>
        </a-form>
    </div>
</template>

<style lang="less" scoped>
.login_form_wrapper {
    width: 320px;
    .login_form_title {
        color: #1d2129;
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
    }
    .login_form_sub_title {
        color: #86909c;
        font-size: 16px;
        line-height: 24px;
    }
    .login_form_error_msg {
        height: 32px;
        color: #f53f3f;
        line-height: 32px;
    }
    .login_form_password_actions {
        display: flex;
        justify-content: space-between;
    }
    .login_form_register_btn {
        color: #86909c;
    }
}
</style>