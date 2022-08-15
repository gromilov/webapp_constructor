<template>
  <div class="bwa-item">
    <div class="bwa-handle"></div>
    <div class="bwa-handle__slot">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BwaItem',
}
</script>

<style lang="scss">
.bwa-item {
  position: relative;
  display: flex;
  margin-bottom: 4px;
}
.bwa-handle {
  // position: absolute;
  // height: calc(100% - 4px);
  &__slot {
    width: 100%;
  }
  margin-right: 8px;
  flex: 0 0 16px;
  left: -40px;
  top: 2px;
  background-color: var(--c-bg-accent);
  border-radius: $border-radius-xs;
  cursor: move;
}
</style>
