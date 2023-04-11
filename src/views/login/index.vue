<script setup lang="ts">
import LoginBanner from '@/components/login/loginBanner.vue'
import LoginForm from '@/components/login/loginBanner.vue'

</script>

<template>
    <div class="login_container">
        <div class="logo">
            <img
                alt="logo"
                src="@/assets/images/vue.svg"
            />
            <div class="logo_text">ELM Backstage</div>
        </div>
        <LoginBanner />
        <div class="content">
            <div class="content-inner">
                <LoginForm />
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.login_container {
    display: flex;
    height: 100vh;

    .logo {
        position: fixed;
        top: 24px;
        left: 22px;
        z-index: 1;
        display: inline-flex;
        align-items: center;

        .logo_text {
            margin-right: 4px;
            margin-left: 4px;
            color: #f7f8fa;
            font-size: 20px;
        }
    }

    .login_banner {
        width: 550px;
        background: linear-gradient(163.85deg, #1d2129 0%, #00308f 100%);
    }

    .content {
        position: relative;
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        padding-bottom: 40px;
    }

    .footer {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 100%;
    }
}
</style>

<style lang="less" scoped>
// responsive
@media (max-width: 992px) {
    .login_container {
        .login_banner {
            width: 25%;
        }
    }
}
</style>