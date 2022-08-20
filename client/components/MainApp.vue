<script setup>
const route = useRoute()
const { bot_id, routes, firebaseConfig } = useRuntimeConfig().public
const { id: page_id, name } = Object.values(routes).find(
  ({ href }) => route.fullPath.split('#')[0] === href
)

const blocks = ref({})
const order = ref([])
try {
  data = await $fetch(
    `/api/page`, { method: 'POST', body: { page_id }}
  );
  blocks.value = data.blocks
  order.value = data.order
} catch {
  const firebaseApp = initializeApp(firebaseConfig)
  const db = getFirestore(firebaseApp)
  const webappRef = doc(db, 'webapp', bot_id)
  const pageRef = doc(webappRef, 'pages', page_id)
  // const docSnap = await getDoc(pageRef)

  // if (docSnap.exists()) {
    onSnapshot(
      pageRef,
      { includeMetadataChanges: false },
      doc => {
        blocks.value = doc.data().blocks
        order.value = doc.data().order
      }
    )
  // }
}

function updateBlock({id, text}) {
  const block = blocks.find((block) => block.id == id)
  block.options.text = text
}

useHead({
  title: name,
  script: [
    {
      src: 'https://telegram.org/js/telegram-web-app.js',
    }
  ]
})
</script>

<script>
import { initializeApp } from 'firebase/app'
import { 
  getFirestore,
  onSnapshot,
  doc,
  getDoc,
} from 'firebase/firestore'
</script>

<template>
  <div class="web-app">
    <div class="web-app__blocks" v-if="order.length">
      <template v-for="id in order" :key="id">
        <component :is="blocks[id].component" :options="blocks[id].options" @updateBlock="updateBlock"/>
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
