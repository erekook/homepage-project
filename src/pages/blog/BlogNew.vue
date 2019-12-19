<template>
  <div>
    <div class="post-box">
      <b>TITLE</b>
      <el-input class="title-input" v-model="title" placeholder="请输入标题"></el-input>
      <b>CATEGORY</b>
      <el-select v-model="category" placeholder="请选择">
        <el-option
          v-for="item in categoryList"
          :key="item.cate_name"
          :label="item.cate_name"
          :value="item.cate_name">
        </el-option>
      </el-select>
      <b>TAG</b>
      <div>
        <el-tag
          :key="tag"
          v-for="tag in tags"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)">
          {{tag}}
        </el-tag>
        <el-input
          class="input-new-tag"
          v-if="tagInputVisible"
          v-model="tagValue"
          ref="saveTagInput"
          size="small"
          @keyup.enter.native="handleTagInputConfirm"
          @blur="handleTagInputConfirm"
        >
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showTagInput">+ New Tag</el-button>
      </div>
      <b>CONTENT</b>
      <tinymce-editor ref="editor" v-model="content" id='tinymce'></tinymce-editor>
      <el-button class="submit-btn" type="primary">SUBMIT</el-button>
    </div>

  </div>
</template>

<script>
import TinymceEditor from '../../components/TinymceEditor'
import { get } from '../../utils/http'
import api from '../../config/api'
export default {
    name: 'blog-new',
    data () {
        return {
          content: '',
          title: '',
          category: '',
          categoryList: [],
          tags: [],
          tagValue: '',
          tagInputVisible: false
        }
    },
    components: {
        TinymceEditor
    },
    mounted () {
      this.getCategorys()
    },
    methods: {
      getCategorys () {
        get(api.fetchAllCategorys).then((res) => {
          this.categoryList = res.data
        })
      },
      handleClose (tag) {
        this.tags.splice(this.tags.indexOf(tag), 1)
      },
      showTagInput () {
        this.tagInputVisible = true
        this.$nextTick(() => {
          this.$refs.saveTagInput.$refs.input.focus()
        })
      },
      handleTagInputConfirm () {
        let inputValue = this.tagValue
        if (inputValue) {
          this.tags.push(inputValue)
        }
        this.tagInputVisible = false
        this.tagValue = ''
      }
    }
}
</script>

<style scoped>

  .el-tag + .el-tag {
    margin-left: .5em;
  }
  .button-new-tag {
    margin-left: .5em;
    height: 2.8em;
    line-height: 1.2em;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 10em;
    margin-left: .5em;
    vertical-align: bottom;
  }

  .title-input {
    width: 30%;
  }

  .submit-btn {
    margin-top: 2em;
  }

  b {
    margin-top: 2em;
    margin-bottom: .5em;
  }
  .post-box {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start
  }
</style>