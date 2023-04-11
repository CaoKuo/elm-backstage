<script setup lang="ts">
import banner1 from '@/assets/images/login-banner.png'

const carouselItem = [
    {
        slogan: '开箱即用的高质量模板',
        subSlogan: '丰富的的页面模板，覆盖大多数典型业务场景',
        image: banner1,
    },
    {
        slogan: '内置了常见问题的解决方案',
        subSlogan: '国际化，路由配置，状态管理应有尽有',
        image: banner1,
    },
    {
        slogan: '接入可视化增强工具AUX',
        subSlogan: '实现灵活的区块式开发',
        image: banner1,
    },
]
</script>

<template>
    <div class="login_banner">
        <div class="banner_inner">
            <a-carousel class="carousel" animation-name="fade" auto-play show-arrow="hover">
                <a-carousel-item v-for="item in carouselItem" :key="item.slogan">
                    <div :key="item.slogan" class="carousel_item">
                        <div class="carousel_title">{{ item.slogan }}</div>
                        <div class="carousel_sub_title">{{ item.subSlogan }}</div>
                        <img class="carousel_image" :src="item.image" />
                    </div>
                </a-carousel-item>
            </a-carousel>
        </div>
    </div>
</template>

<style lang="less" scoped>
.login_banner {
    display: flex;
    align-items: center;
    justify-content: center;
    .banner_inner {
        flex: 1;
        height: 100%;
    }
}

.carousel {
    height: 100%;

    .carousel_item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        .carousel_title {
            color: #f7f8fa;
            font-weight: 500;
            font-size: 20px;
            line-height: 28px;
        }
        .carousel_sub_title {
            margin-top: 8px;
            color: #86909c;
            font-size: 14px;
            line-height: 22px;
        }
        .carousel_image {
            width: 320px;
            margin-top: 30px;
        }
    }
}
</style>