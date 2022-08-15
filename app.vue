<template>
  <NuxtPage />
</template>

<script setup>
const { blocks, bot_id, routes } = useRuntimeConfig().public
useState('blocks', () => blocks )
useState('bot_id', () => bot_id )
useState('routes', () => routes )
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 1.2;
  font-family: Inter, Helvetica, Arial, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  color: var(--tg-theme-text-color);
	background: var(--tg-theme-bg-color);
}

p {
  margin: 0 0 12px 0px;
}

* {
  box-sizing: border-box;
  &::before,
  &::after {
    box-sizing: border-box;
  }
  &:focus {
    outline: none;
  }
}

a {
  text-decoration: none;
  color: var(--c-text);
  cursor: pointer;
}

button {
  border: none;
  padding: 0;
  font-size: 16px;
  color: var(--c-text);
  background: transparent;
  cursor: pointer;
}

input,
textarea {
  line-height: 1.2;
  font-family: 'Inter', sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-size: inherit;
  font-weight: normal;
}

</style>
