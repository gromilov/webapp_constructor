<template>
  <div class="bwa-you-tube">
    <iframe
      width="560"
      height="315"
      :src="`https://www.youtube.com/embed/${options.src}${
        options.controls ? '' : '?controls=0'
      }`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      :allowfullscreen="options.allowfullscreen"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'BwaYouTube',
  props: {
    options: Object,
  },
}
</script>

<style lang="scss">
.bwa-you-tube {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25px;
  height: 100px;
  background-color: #fff;
  min-width: 100%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
}
</style>
