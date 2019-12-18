<template>
  <div>
    <tinymce-editor ref="editor" v-model="content" id='tinymce'></tinymce-editor>
  </div>
</template>

<script>
import TinymceEditor from '../../components/TinymceEditor'
export default {
    name: 'blog-new',
    data () {
        return {

        }
    },
    components: {
        TinymceEditor
    }
}
</script>

<style>

</style>