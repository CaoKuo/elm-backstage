<script setup lang="ts">
import { computed } from "vue"
import { useAppStore, useUserStore } from "@/store"
import { useRoute, useRouter, RouteRecordRaw } from "vue-router"

const appStore = useAppStore()
const userStore = useUserStore()

const router = useRouter()
const route = useRoute()

const avatar = computed(() => {
    return userStore.avatar
})

const handleLogout = () => {

}

</script>

<template>
    <div class="nav_bar">
        <div class="left_side">
            <a-space>
                <img
                    alt="logo"
                    src="http://p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image"
                />
                <a-typography-title
                    :style="{ margin: 0, fontSize: '18px' }"
                    :heading="5"
                >
                    Arco Pro
                </a-typography-title>
            </a-space>
        </div>
        <div class="right_side">
            <div class="user_avator">
                <a-dropdown trigger="click">
                    <a-avatar
                        :size="32"
                        :style="{ marginRight: '8px', cursor: 'pointer' }"
                    >
                        <img alt="avatar" :src="avatar" />
                    </a-avatar>
                    <template #content>
                        <a-doption>
                            <a-space @click="$router.push({ name: 'Info' })">
                                <icon-user />
                                <span>用户中心</span>
                            </a-space>
                        </a-doption>
                        <a-doption>
                            <a-space @click="$router.push({ name: 'Setting' })">
                                <icon-settings />
                                <span>用户设置</span>
                            </a-space>
                        </a-doption>
                        <a-doption>
                            <a-space @click="handleLogout">
                                <icon-export />
                                <span>退出登录</span>
                            </a-space>
                        </a-doption>
                    </template>
                </a-dropdown>
            </div>
        </div>
    </div>    
</template>

<style lang="less" scoped>
.nav_bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    background-color: #fff;
    border-bottom: 1px solid rgb(229, 230, 235);
    .left_side {
        display: flex;
        align-items: center;
        padding-left: 20px;
    }
    .right_side {
        display: flex;
        padding-right: 20px;

    }
}
</style>
