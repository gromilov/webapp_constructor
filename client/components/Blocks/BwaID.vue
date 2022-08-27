<template>
  <Block :block_id="options.ID" />
</template>


<script setup>
const props = defineProps({ block_id: String, options: Object})
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
