<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const breadcrumbs = computed(() => {
    return route.matched.filter(e => e.meta.title)
})

const showTitle = (item: any) => {
    return item.meta.title
}
 
const onBreadcrumbClick = (item: any) => {

}
</script>

<template>
    <div class="base_beadcrumb">
        <a-breadcrumb>
            <a-breadcrumb-item v-for="item in breadcrumbs" :key="item.name" @click="onBreadcrumbClick(item)">
				{{ showTitle(item) }}
			</a-breadcrumb-item>
        </a-breadcrumb>
    </div>
</template>

<style lang="less">
.base_beadcrumb {
    padding: 16px 0;
	display: flex;
	align-items: center;
	justify-content: space-between
}
</style>