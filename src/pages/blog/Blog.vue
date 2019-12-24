<template>
    <div>
        <el-container>
            <!-- 顶部 -->
            <el-header>
                <div class="container top-box">
                    <a v-if="!isMobile" class="navbar-brand" href="/">Longjie's blog</a>
                    <el-menu :default-active="activeIndex" class="menu-larger" mode="horizontal" @select="handleSelect">
                        <el-menu-item index="1">首页</el-menu-item>
                        <el-menu-item index="2">标签</el-menu-item>
                        <el-menu-item v-if="!isMobile" index="3">关于</el-menu-item>
                        <el-submenu index="4">
                            <template slot="title">{{this.$store.getters['auth/userInfo'].email}}</template>
                            <el-menu-item index="4-1">退出</el-menu-item>
                        </el-submenu>
                    </el-menu>
                </div>
            </el-header>

            <!-- 主容器 -->
            <el-main class="container">
                <router-view></router-view>
            </el-main>

        </el-container>
    </div>
</template>

<script>
export default {
    name: 'blog',
    data () {
        return {
            activeIndex: '1',
            page: 1,
            isMobile: this.$store.getters['common/isMobile']
        }
    },
    mounted () {
    },
    methods: {
        handleSelect (e) {
            switch (e) {
                case '1':
                    if (this.$route.name != 'blog') {
                        this.$router.replace('/blog').catch(() =>{})
                    }
                    break
                case '4-1':
                    this.$store.commit('auth/logout')
                    this.$router.replace('/login')
                    break
                default:
                    break
            }
            
        },

    }
}
</script>

<style scoped>

@media (min-width: 576px) {
    .container {
        width: 100%;
        padding: 0;
    }
    .menu-larger {
        font-size: .2rem;
    }
}

@media (min-width: 768px) {
    .container {
        max-width: 720px;
    }
}

@media (min-width: 992px) {
    .container {
        max-width: 960px;
        padding-right: 1em;
        padding-left: 1em;
    }
}

@media (min-width: 1200px) {
    .container {
        max-width: 1140px;
        padding-right: 1em;
        padding-left: 1em;
    }
}


.container {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
}

.navbar-brand {
    display: inline-block;
    padding-top: .3125rem;
    padding-bottom: .3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
    text-decoration: none;
}

.top-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.blog-list {
    width: 100%;
    /* height: 2em; */
}
</style>