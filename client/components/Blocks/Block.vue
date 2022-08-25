<script setup>
const props = defineProps({ block_id: String })
const page = usePage()
const block = computed(() => page.block(props.block_id))
const active_block = computed(() => page.active_block)
</script>

<script>
import { usePage } from '@/stores'
export default {
}
</script>

<template>
  <div 
    :id="block_id"
    :class="[
    'block',
    {'block--active': active_block === block_id}
  ]">
  <component
    :is="block.component" 
    :options="block.options"
  />
  </div>
</template>

<style lang="scss">
.block {
  &--active {
    outline: 2px solid var(--tg-theme-button-color);
  }
}
</style>
