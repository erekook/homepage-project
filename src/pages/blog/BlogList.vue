<template>
   <el-row :gutter="20">
        <el-col :span="16">
            <div style="width:100%;height:3em;">
                <el-button style="float:right;" type="primary" @click="handlePost">发布</el-button>
            </div>
            <div class="blog-list">
                <blog-item v-for="blog in blogs" :key="blog.id" :blog="blog" @handleGoToBlogDetail="handleGotoDetail"></blog-item>
            </div>
            <!-- 分页 -->
            <el-pagination
                :current-page="page"
                layout="prev, pager, next"
                :page-size="10"
                :total="1" hide-on-single-page>
            </el-pagination>
        </el-col>
        <el-col :span="8">
            阅读排行cxxxx
        </el-col>
    </el-row>
</template>

<script>
import { get } from '../../utils/http'
import api from '../../config/api'
import BlogItem from './BlogItem'

export default {
    name: 'blog-list',
    data () {
        return {
            blogs: [],
            page: 1
        }
    },
    mounted () {
        this.getBlogs()
    },
    components:{
        BlogItem
    },
    methods: {
        getBlogs () {
            get(api.fetchAllBlogs).then((res) => {
                this.blogs = res.data
            })
        },
        handleGotoDetail (e) {
            this.$router.push('/blog/blog-detail/'+e)
        },
        handlePost () {
          this.$router.push('/blog/blog-new')
        }
    }
}
</script>

<style scoped>
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