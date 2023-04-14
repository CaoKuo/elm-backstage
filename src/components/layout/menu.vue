<script setup lang="ts">
import { ref, computed } from 'vue';
import { Message} from '@arco-design/web-vue'
import { useRoute, useRouter, RouteRecordRaw } from 'vue-router'
import { useAppStore } from '@/store';

const appStore = useAppStore()

const router = useRouter()
const route = useRoute()

const routes = router.options.routes

const layoutList = routes.find(item => {
    return item.name && item.name == 'Layout'
})

let menuList = ref<RouteRecordRaw[]>([])

if(layoutList && layoutList.children) {
    menuList.value = layoutList.children && layoutList.children.filter(item=> {
        return item.meta && !item.meta.hidden
    })
}

const collapsed = computed({
    get(){
        return appStore.menuCollapse
    },
    set(val: boolean) {
        appStore.updateMenuCollaspe(val)
    }
})

const selectedKeys = ref([route.name])

const onClickMenuItem = (key: string) => {
    Message.info({ content: `You select ${key}`, showIcon: true });
    router.push({
        name: key,
    })
}

const onCollapse = () => {
    collapsed.value = !collapsed.value;
}

</script>

<template>
    <a-menu
        :style="{ height: '100%' }"
        v-model:selected-keys="selectedKeys"
        :collapsed="collapsed"
        show-collapse-button
        :collapsed-width="48"
        breakpoint="xl"
        @collapse="onCollapse"
        @menu-item-click="onClickMenuItem"
    >
        <component
            v-for="item in menuList"
            :key="item.name"
            :is="item.children && item.meta?.isSecond ? 'a-sub-menu' : 'a-menu-item'"
        >
            <template #icon>
                <i class="iconfont" :class="`icon-${item?.meta?.icon}`"></i>
            </template>
            <template v-if="!item.children || !item.meta?.isSecond">
                {{ item.meta?.title }}
            </template>
            <template v-if="item.children && item.meta?.isSecond" #title>{{ item.meta?.title }}</template>
            <template v-if="item.children && item.meta?.isSecond">
                <a-menu-item v-for="child in item.children" :key="child.name as string">
                    {{ child.meta?.title }}
                </a-menu-item>
            </template>
        </component>
    </a-menu>
</template>

<style lang="less" scoped>

</style>
