<script setup lang="ts">
import { computed, ref } from 'vue'
import { useAppStore } from '@/store'
import {
  IconCaretRight,
  IconCaretLeft,
  IconHome,
  IconCalendar,
} from '@arco-design/web-vue/es/icon'
import navBar from '@/components/layout/navBar.vue'
import Menu from '@/components/layout/menu.vue'
import baseBreadcrumb from '@/components/layout/baseBreadcrumb.vue'

const appStore = useAppStore()

const menuWidth = computed(() => {
    return appStore.menuCollapse ? 48 : appStore.menuWidth
})

const paddingStyle = computed(() => {
    return {
        paddingLeft: `${menuWidth.value}px`,
        paddingTop: '60px',
    }
})

const collapsed = computed(() => {
    return appStore.menuCollapse
})

const setCollapsed = () => {
    
}
</script>

<template>
    <a-layout class="layout_container">
        <div class="layout_navbar">
            <navBar />
        </div>
        <a-layout-sider
            class="layout_sider"
            hide-trigger
            collapsible
            :collapsed="collapsed"
            :width="menuWidth"
            @collapse="setCollapsed"
        >
            <div class="menu_wrapper">
                <Menu />
            </div>
        </a-layout-sider>
        <a-layout class="layout_content" :style="paddingStyle">
            <a-layout style="padding: 0 24px">
                <baseBreadcrumb />
                <a-layout-content>
                    <router-view />
                </a-layout-content>
            </a-layout>
        </a-layout>
    </a-layout>
</template>

<style lang="less" scoped>
.layout_container {
    width: 100%;
    height: 100%;
    .layout_navbar {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        height: 60px;
    }
    .layout_sider {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        height: 100%;
        padding-top: 60px;
        transition: all 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
        &::after {
            position: absolute;
            top: 0;
            right: -1px;
            display: block;
            width: 1px;
            height: 100%;
            background-color: var(--color-border);
            content: '';
        }

        > :deep(.arco-layout-sider-children) {
            overflow-y: hidden;
        }
        .menu_wrapper {
            height: calc(100% - 60px);
        }
    }
    .layout_content {
        min-height: 100vh;
        overflow-y: hidden;
        background-color: rgb(242, 243, 245);
        transition: padding 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
    }
}
</style>