<template>
    <div class="post">
        <div class="post-title"><a @click="handleBlogDetail(blog.id)">{{blog.title}}</a></div>
        <div class="post-info">
            <i class="el-icon-s-flag"></i>分类: <a style="color:orange;margin-right:.8em;">{{blog.cate_name}}</a>
            <i class="el-icon-collection-tag" style="margin-right:.5em;" v-for="tag in blog.tags" :key="tag.id"><a style="color:blue;">{{tag.tag_name}}</a></i>
        </div>
        <div class="post-time">
            <p>{{blog.create_time}}</p>
            <a v-if="this.$store.getters['auth/userInfo'].email == 'longjietan@163.com'" style="color:red" @click="handleDelBlog(blog.id)">删除</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'blog-item',
    props: {
        blog: null
    },
    methods: {
        handleBlogDetail (id) {
            this.$emit('handleGoToBlogDetail', id)
        },
        handleDelBlog (id) {
            this.$emit('handleDelBlog', id)
        }
    }
}
</script>

<style scoped>
    p {
        padding: 0;
        margin: 0;
        display: inline
    }
    .post {
        margin-top: 1em;
        padding-bottom: 3em;
        border-bottom: 1px solid #999999;
    }
    .post-title {
        font-size: 2rem;
        margin-bottom: .5em;
    }

    .post-title a{
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
    /* .post-title a :hover{
    } */

    .post-info {
        font-size: 1rem;
        margin-bottom: .8em;
    }

    .post-time {
        font-size: .8rem;
        display: flex;
        justify-content: space-between;
    }
</style>