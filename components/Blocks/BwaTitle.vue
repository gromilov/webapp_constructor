<template>
  <div class="bwa-title">
    <component :is="`H${options.size}`">{{ options.text }}</component>
  </div>
</template>

<script>
export default {
  name: 'BwaTitle',
  props: {
    options: Object,
  },
}
</script>

<style lang="scss">
.bwa-title {
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
}
</style>
