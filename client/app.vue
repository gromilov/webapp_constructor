<template>
  <NuxtPage />
</template>

<style lang="scss">
@media (prefers-color-scheme: dark) {
  :root {
    --tg-theme-bg-color: #18222d;
    --tg-theme-secondary-bg-color: #131415;
    --tg-theme-hint-color: #b1c3d5;
    --tg-theme-link-color: #62bcf9;
    --tg-theme-text-color: #ffffff;
    --tg-theme-button-color: #2ea6ff;
    --tg-theme-button-text-color: #ffffff;
  }
}

@media (prefers-color-scheme: light) {
  :root {
    --tg-theme-button-color: #2481cc;
    --tg-theme-button-text-color: #ffffff;
    --tg-theme-link-color: #2481cc;
    --tg-theme-secondary-bg-color: #efeff3;
    --tg-theme-bg-color: #ffffff;
    --tg-theme-hint-color: #999999;
    --tg-theme-text-color: #000000;
  }
}

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
