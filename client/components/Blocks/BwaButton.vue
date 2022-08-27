<template>
  <div class="bwa-button__container" >
    <NuxtLink v-if="options.isLink" :to="options.url" class="bwa-button" v-html="options.text" />
    <button v-else class="bwa-button" v-html="options.text" @click.stop="handleClick" />
  </div>
</template>

<script setup>
const props = defineProps({ options: Object })
const options = props.options
const page = usePage()
const vars = useVars()

const variables = vars.vars
const getState = vars.getState
const setState = vars.setState

const runCode = () => {
  const tg = window.Telegram?.WebApp
  const runCode = new Function('el', 'tg', 'setState', 'getState', '$', options.code);
  runCode(options, tg, setState, getState, variables )
}
const handleClick = function () {
  runCode()
}
</script>

<script>
import { useVars } from '@/stores/vars'
import { usePage } from '@/stores'
// export default {
//   name: 'BwaButton',
//   props: {
//     options: Object,
//   },
//   data() {
//     return {
//       show: true,
//     }
//   },
//   methods: {
//     handleClick() {
//       const tg = window.Telegram?.WebApp
//       const runCode = new Function('el', 'tg', 'updateBlock', 'setState', 'getState', '$', this.options.code);
//       runCode(this.options, tg, this.page.updateBlock, this.vars.setState, this.vars.getState, this.vars.vars )
//     },
//     hide() {
//       this.show = false
//     }
//   },
// }
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
