<template>
    <div>
        <el-container>
            <el-header>
                <div class="container top-box">
                    <a class="navbar-brand" href="/">Longjie's blog</a>
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                        <el-menu-item index="1">首页</el-menu-item>
                        <el-menu-item index="2">标签</el-menu-item>
                        <el-menu-item index="3">关于</el-menu-item>
                          <el-submenu index="4">
                            <template slot="title">{{this.$store.getters['auth/userInfo'].email}}</template>
                            <el-menu-item index="4-1">退出</el-menu-item>
                        </el-submenu>
                    </el-menu>
                </div>
            </el-header>
            <el-main class="container">
                <el-row :gutter="20">
                    <el-col :span="16">
                        <div class="blog-list">
                            <blog-item v-for="blog in blogs" :key="blog.id" :blog="blog" @handleGoToBlogDetail="handleGotoDetail"></blog-item>
                        </div>
                    </el-col>
                    <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import BlogItem from './BlogItem'
import { get } from '../../utils/http'
import api from '../../config/api'
export default {
    name: 'blog',
    data () {
        return {
            activeIndex: '1',
            blogs: []
        }
    },
    components:{
        BlogItem
    },
    mounted () {
        this.getBlogs()
    },
    methods: {
        handleGotoDetail (e) {
            this.$router.push('/blog-detail/'+e)
        },
        handleSelect () {
            console.log('1')
        },
        getBlogs () {
            get(api.fetchAllBlogs).then((res) => {
                this.blogs = res.data
            })
        }
    }
}
</script>

<style scoped>

@media (min-width: 576px) {
    .container {
        max-width: 540px;
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
    }
}

@media (min-width: 1200px) {
    .container {
        max-width: 1140px;
    }
}


.container {
    width: 100%;
    padding-right: 1.5em;
    padding-left: 1.5em;
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

.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>