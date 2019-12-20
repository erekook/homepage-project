<template>
  <div>
    <editor v-model="content" :init="init" id='tinymce'></editor>
  </div>
</template>

<script>
import tinymce from 'tinymce/tinymce'
import editor from '@tinymce/tinymce-vue'
import 'tinymce/themes/silver'
import 'tinymce/plugins/image'// 插入上传图片插件
import 'tinymce/plugins/media'// 插入视频插件
import 'tinymce/plugins/table'// 插入表格插件
import 'tinymce/plugins/lists'// 列表插件
import 'tinymce/plugins/wordcount'// 字数统计插件
export default {
    name: 'tinymce-editor',
    props: {
        value: {
            type: String,
            default: ''
        },
         plugins: {
            type: [String, Array],
            default: 'lists image media table wordcount'
        },
        toolbar: {
            type: [String, Array],
            default: 'undo redo |  formatselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image media table | removeformat'
        }
    },
    data () {
        return {
            content: this.value,
            init: {
                // language_url: `${this.baseUrl}/tinymce/langs/zh_CN.js`,
                // language: 'zh_CN',
                skin_url: `/tinymce/skins/ui/oxide`,
                content_css: `/tinymce/skins/content/default/content.css`,
                // skin_url: `/tinymce/skins/ui/oxide-dark`, // 暗色系
                // content_css: `/tinymce/skins/content/dark/content.css`, // 暗色系
                height: 400,
                plugins: this.plugins,
                toolbar: this.toolbar,
                browser_spellcheck: true, // 拼写检查
                branding: false, // 去水印
                elementpath: false,  //禁用编辑器底部的状态栏
                statusbar: false, // 隐藏编辑器底部的状态栏
                paste_data_images: true, // 允许粘贴图像
                menubar: false, // 隐藏最上方menu
                // 此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
                // 如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
                // images_upload_handler: (blobInfo, success, failure) => {
                // const img = 'data:image/jpeg;base64,' + blobInfo.base64()
                // success(img)
                // }
            },
        }
    },
    components: {
        editor
    },
    mounted () {
        tinymce.init({})
    },
    watch: {
        value (newValue) {
            this.content = newValue
        },
        content (newValue) {
            this.$emit('input', newValue)
        }
  }
}
</script>

<style>

</style>