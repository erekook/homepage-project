<template>
    <div class="post">
        <div class="post-title"><a @click="handleBlogDetail(blog.id)">{{blog.title}}</a></div>
        <div class="post-info">{{blog.create_time}}</div>
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
        }
    }
}
</script>

<style scoped>
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
        font-size: .8rem;
    }
</style>