<script setup>
const blocks = useState('blocks')
const bot_id = useState('bot_id')
const routes = useState('routes')

function updateBlock({id, text}) {
  const block = blocks.value.find((block) => block.id == id)
  block.options.text = text
}

useHead({
  title: 'Telegram Web App',
  script: [
    {
      src: 'https://telegram.org/js/telegram-web-app.js',
    }
  ]
})
</script>

<template>
  <div class="web-app">
    <div class="web-app__blocks">
      <template v-for="block in blocks" :key="block.id">
          <component :is="block.component" :options="block.options" @updateBlock="updateBlock"/>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
.web-app {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 16px;
  &__blocks {
    max-width: 600px;
  }
}
</style>
