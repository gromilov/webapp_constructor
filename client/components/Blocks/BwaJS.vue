<template>
  <div></div>
</template>
<script setup>
const props = defineProps({ options: Object })

const page = usePage()
const vars = useVars()
const options = computed(() => props.options)
const variables = computed(() => vars.vars)
const getState = vars.getState
const setState = vars.setState
onMounted(() => {
  runCode()
}) 
const runCode = async () => {
  const tg = window.Telegram?.WebApp
  const runCode = new Function('el', 'tg', 'setState', 'getState', '$', props.options.code);
  await runCode(options, tg, setState, getState, variables.value)
}

</script>

<script>
import { useVars } from '@/stores/vars'
import { usePage } from '@/stores'
</script>

<style lang="scss">
.bwa-button {
  &__container {
    width: 100%;
  }
  display: block;
  width: 100%;
  margin: 16px 0;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  text-align: center;
  background: var(--tg-theme-button-color);
  color: var(--tg-theme-button-text-color);
}
</style>
