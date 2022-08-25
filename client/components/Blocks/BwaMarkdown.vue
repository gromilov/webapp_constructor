<template>
  <div class="bwa-markdown" v-html="html"></div>
</template>

<script>
import { marked } from 'marked'
export default {
  name: 'BwaMarkdown',
  props: {
    options: Object,
  },
  computed: {
    html() {
      const data = marked.parse(this.options.text, { sanitize: true })
      return data
    }
  }
}
</script>

<style lang="scss">
.bwa-markdown {
  margin-bottom: 16px;
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
  }
  h2 {
    font-size: 2.25rem;
    font-weight: bold;
  }
  h3 {
    font-size: 2rem;
    font-weight: bold;
  }
  h4 {
    font-size: 1.5rem;
    font-weight: bold;
  }
  h5 {
    font-size: 1.2rem;
    font-weight: bold;
  }
  h6 {
    font-size: 1rem;
    font-weight: bold;
  }
  a {
    color: var(--tg-theme-link-color)
  }
  img {
    max-width: 100%;
  }
}
</style>
