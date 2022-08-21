<template>
  <div class="bwa-buttons">
    <BwaGrid :options="options" :block_id="block_id">
      <BwaButton :options="blocks[id].options" v-for="id in childrens" :key="id" />
    </BwaGrid>
  </div>
</template>

<script>
export default {
  name: 'BwaButtons',
  props: {
    options: Object,
    blocks: Object,
  },
  
  computed: {
    childrens() {
      return this.options.childrens
    },
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
