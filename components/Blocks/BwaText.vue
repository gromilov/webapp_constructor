<template>
  <div class="bwa-text" v-html="options.text"></div>
</template>

<script>
export default {
  name: 'BwaText',
  props: {
    options: Object,
  },
}
</script>

<style lang="scss">
.bwa-text {
  margin-bottom: 16px;
}
</style>
