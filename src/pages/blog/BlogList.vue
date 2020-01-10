<template>
   <el-row :gutter="20">
        <el-col :span="isMobile ? 24 : 16">
            <div style="width:100%;height:3em;">
                <el-button style="float:right;" type="primary" @click="handlePost">发布</el-button>
            </div>
            <div class="blog-list">
                <blog-item v-for="blog in blogs" :key="blog.id" :blog="blog" @handleGoToBlogDetail="handleGotoDetail" @handleDelBlog="handleDelBlog"></blog-item>
            </div>
            <!-- 分页 -->
            <el-pagination
                :current-page="page"
                layout="prev, pager, next"
                :page-size="5"
                :total="total" hide-on-single-page
                @current-change="currentChange">
            </el-pagination>
        </el-col>
        <el-col v-if="!isMobile" :span="8">
            阅读排行cxxxx
        </el-col>
    </el-row>
</template>

<script>
import { get } from '../../utils/http'
import api from '../../config/api'
import BlogItem from './BlogItem'
import { MessageBox,Toast } from 'mint-ui';

export default {
    name: 'blog-list',
    data () {
        return {
            blogs: [],
            page: parseInt(this.$route.params['page']),
            total: 0,
            isMobile: this.$store.getters['common/isMobile']
        }
    },
    mounted () {
        this.getBlogs()
    },
    components:{
        BlogItem
    },
    methods: {
        currentChange (page) {
          this.page = page
          this.$router.push('/blog/'+ page)
          this.getBlogs()
        },
        getBlogs () {
            get(api.fetchAllBlogs(this.page)).then((res) => {
                this.blogs = res.data.blogs
                this.total = res.data.total
            })
        },
        handleGotoDetail (e) {
            this.$router.push('/blog/blog-detail/'+e)
        },
        handleDelBlog (id) {
            let _this = this
            if (this.isMobile) {
              MessageBox.confirm('此操作将删除该文章, 是否继续?').then(action => {
                if (action == 'confirm') {
                  get(api.delBlog(id)).then(() => {
                    _this.getBlogs()
                    Toast({
                      message: '删除成功',
                      iconClass: 'icon icon-success'
                    });
                  })
                }

              })
            } else {
              this.$confirm('此操作将删除该文章, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                get(api.delBlog(id)).then(() => {
                  _this.getBlogs()
                  _this.$message({
                    showClose: true,
                    message: '删除成功',
                    type: 'success'
                  })
                })
              }).catch(() => {
                this.$message({
                  type: 'info',
                  message: '已取消删除'
                });          
              });
            }
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