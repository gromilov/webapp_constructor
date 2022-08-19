<script setup>
const { bot_id, routes, firebaseConfig } = useRuntimeConfig().public
const route = useRoute()

let page_id
let name
const { id: s_page_id, name: s_name } = Object.values(routes).find(
  ({ href }) => route.fullPath.split('#')[0] === href
)
page_id = s_page_id
name = s_name

let page = {
  blocks: {},
  order: []
}

try {
  page = await $fetch(
    `/api/page`, { method: 'POST', body: { page_id }}
  );
  console.log('API On')
} catch {
  console.log('API Off')
  const firebaseApp = initializeApp(firebaseConfig)
  const db = getFirestore(firebaseApp)
  const webappRef = doc(db, 'webapp', bot_id)
  const pageRef = doc(webappRef, 'pages', page_id)
  const docSnap = await getDoc(pageRef)
  page = docSnap.data()
}

const blocks = ref(page?.blocks)
const order = ref(page?.order)

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
  doc,
  getDoc,
} from 'firebase/firestore'
</script>

<template>
  <div class="web-app">
    <div class="web-app__blocks" v-if="order.length">
      <pre>{{ order }}</pre>
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
