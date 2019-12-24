<template>
  <div>
      <!-- {{blogDetail}} -->
      <h1>{{blogDetail.title}}</h1>
      <div class="post-info">
          <i class="el-icon-s-flag"></i>分类: <a style="color:orange;margin-right:.8em;">{{blogDetail.cate_name}}</a>
          <i class="el-icon-collection-tag" style="margin-right:.5em;" v-for="tag in blogDetail.tags" :key="tag.id"><a style="color:blue;">{{tag.tag_name}}</a></i>
      </div>
      <div class="post-time">{{blogDetail.create_time}}</div>
      <div v-html="blogDetail.content"></div>
  </div>
</template>

<script>
import { get } from '../../utils/http'
import api from '../../config/api'
export default {
    name: 'blog-detail',
    data () {
      return {
        blogDetail: ''
      }
    },
    mounted () {
      this.getBlogDetail()
    },
    methods: {
      getBlogDetail () {
        let _this = this
        get(api.fetchBlogById(_this.$route.params.id)).then((res) => {
          _this.blogDetail = res.data
        })
      }
    }
}
</script>

<style scoped>
    .post-title {
        font-size: 2rem;
        margin-bottom: .5em;
    }

    .post-title a{
        color: black;
        text-decoration: none;
        cursor: pointer;
    }

    .post-time {
        margin-top: .8em;
        color: #999999;
        font-size: .8rem;
    }
</style>