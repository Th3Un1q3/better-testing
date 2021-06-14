<template>
  <article v-html="content"></article>
</template>

<script>
import marked from "marked";

export default {
  data: () => ({
    content: 'Loading'
  }),
  props: {
    path: {
      required: true,
      type: String,
    }
  },
  watch: {
    path: {
      async handler() {
        const mdContent = require(`../../lessons/${this.path}.md?raw`);
        console.log(mdContent);
        this.content = marked(mdContent)
      },
      immediate: true
    }
  }
}
</script>

<style scoped>

</style>
