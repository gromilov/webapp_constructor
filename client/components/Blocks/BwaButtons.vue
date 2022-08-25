<template>
  <div class="bwa-buttons">
    <BwaGrid :options="options" :block_id="block_id">
      <Block v-for="id in options.childrens" :key="id" :block_id="id" />
    </BwaGrid>
  </div>
</template>

<script>
export default {
  name: 'BwaButtons',
  props: {
    options: Object,
  },
}
</script>

<style lang="scss">
.bwa-buttons {
 width: 100%;
 margin: 16px 0;
 .bwa-button {
  margin: 0;
 }
}
</style>
