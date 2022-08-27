<template>
  <client-only>
    <div class="bwa-markdown" v-html="html"></div>
  </client-only>
</template>
<script setup>
const variables = useVars()
const vars = computed(() => variables.vars)
</script>
<script>
import { marked } from 'marked'
import Handlebars from 'handlebars'
import { useVars } from '@/stores/vars'
export default {
  name: 'BwaMarkdown',
  props: {
    options: Object,
  },
  computed: {
    html() {
      const template = Handlebars.compile(this.options.text);
      const data = marked.parse(template(this.vars), { sanitize: true })
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
  hr {
    border: 1px solid var(--tg-theme-link)
  }
}
</style>
