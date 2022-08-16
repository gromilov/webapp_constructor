<template>
  <button v-show="show" class="bwa-button" v-html="options.text" @click.stop="handleClick"></button>
</template>

<script>
export default {
  name: 'BwaButton',
  props: {
    options: Object,
  },
  data() {
    return {
      test: "test",
      show: true,
    }
  },
  methods: {
    handleClick() {
      const tg = window.Telegram?.WebApp
      const ctx = this
      const runCode = new Function('tg', 'ctx', this.options.code);
      runCode(tg, ctx)
    },
    updateBlock({ id, text }) {
      this.$emit('updateBlock', { id, text })
    },
    hide() {
      this.show = false
    }
  },
}
</script>

<style lang="scss">
.bwa-button {
  width: 100%;
  margin: 16px 0;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background: var(--tg-theme-button-color);
  color: var(--tg-theme-button-text-color);
}
</style>
