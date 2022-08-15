<template>
  <component
    :is="options.url ? 'a' : 'div'"
    :href="options.url"
    class="bwa-image"
    :alt="options.alt"
  >
    <img :src="options.src" alt />
  </component>
</template>

<script>
export default {
  name: 'BwaImage',
  props: {
    options: Object,
  },
}
</script>

<style lang="scss">
.bwa-image {
  width: 100%;
  img {
    width: 100%;
  }
}
</style>
