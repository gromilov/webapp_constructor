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

<script>
// import {
//   doc,
//   onSnapshot,
//   getDoc,
// } from 'firebase/firestore'

import BwaText from '@/components/Blocks/BwaText.vue'
import BwaTitle from '@/components/Blocks/BwaTitle.vue'
import BwaYouTube from '@/components/Blocks/BwaYouTube.vue'
import BwaImage from '@/components/Blocks/BwaImage.vue'
import BwaButton from '@/components/Blocks/BwaButton.vue'

export default {
  components: {
    BwaText,
    BwaTitle,
    BwaYouTube,
    BwaImage,
    BwaButton,
  },

  // async mounted() {
  //   const db = useState('db').value
  //   const docRef = doc(db, 'webapp', this.bot_id)
  //   const docSnap = await getDoc(docRef)
  //   if (docSnap.exists()) {
  //     onSnapshot(docRef, { includeMetadataChanges: false }, doc => {
  //       const data = doc.data()
  //       const source = doc.metadata.hasPendingWrites ? 'Local' : 'Server'
  //       if (source == 'Local') {
  //         this.blocks = data.blocks
  //       } else {
  //         this.blocks = data.blocks
  //       }
  //     })
  //   }
  // },
}
</script>

<template>
  <div class="web-app">
    <pre>{{routes}}</pre>
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
