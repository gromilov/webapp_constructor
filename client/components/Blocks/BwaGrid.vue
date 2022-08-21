<template>
    <div
      class="bwa-grid"
      :style="{ gap: grid.gap, 'grid-template-columns': gridTemplateColumns }"
    >
      <slot />
    </div>
</template>

<script>
export default {
  name: 'BwaGridControl',
  props: {
    options: Object,
  },
  computed: {
    gridTemplateColumns() {
      return this.options.grid.gridTemplateColumns
    },
    grid() {
      return this.options.grid
    },
  },
}
</script>

<style lang="scss">
.bwa-grid {
  width: 100%;
  display: grid;
}
</style>
