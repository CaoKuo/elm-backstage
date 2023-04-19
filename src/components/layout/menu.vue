<script setup lang="ts">
import { ref, computed, watch } from 'vue';
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

const selectedKeys = ref<string[]>([])

const openKeys = ref<string[]>([])

watch(
    () => menuList.value,
    (menu) => {
        selectedKeys.value = [];
        if(menu.length) {
            menu.forEach(e => {
                let target = route.matched.find((item) => item.name == e.name);
                if (target) {
					selectedKeys.value.push(target.name as string);
					if (target.children) {
						if (!openKeys.value.includes(target.name as string)) {
							openKeys.value.push(target.name as string);
						}
						target.children.forEach((e) => {
							let secTarget = route.matched.find((item) => item.name == e.name);
							if (secTarget) {
								selectedKeys.value.push(secTarget.name as string);
							}
						});
					}
				}
            })
        }
    },
    {
        immediate: true,
        deep: true,
    }
)

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
        v-model:open-keys="openKeys"
        :collapsed="collapsed"
        show-collapse-button
        auto-open-selected
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
