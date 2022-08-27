<script setup>
    let page = usePage()
    const route = useRoute()
    const { bot_id, routes, firebaseConfig } = useRuntimeConfig().public
    const { id: page_id, name } = Object.values(routes).find(
      ({ href }) => route.fullPath.split('#')[0] === href
    )
    page.setPageId(page_id)
    onMounted( () => {
      bus.dispatchEvent('page_id', page_id)
      bus.on('activeBlock', block_id => {
        try {
          document.getElementById(block_id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        } catch {
          alert("Блок не найден!")
        }
        page.setActiveBlock(block_id)
      })
    })

    onUnmounted(() => {
      if (process.client) {
        bus.off('activeBlock')
        bus.off('page_id')
        adapter.destroy()
      }
    }) 
    if (process.client) {
      const firebaseApp = initializeApp(firebaseConfig)
      const db = getFirestore(firebaseApp)
      const webappRef = doc(db, 'webapp', bot_id)
      const pageRef = doc(webappRef, 'pages', page_id)
      onSnapshot(
        pageRef,
        { includeMetadataChanges: false },
        doc => {
          page.setPage(doc.data())
        }
      )
    } else if (process.env.NODE_ENV === 'production') {
      const firebaseApp = initializeApp(firebaseConfig)
      const db = getFirestore(firebaseApp)
      const webappRef = doc(db, 'webapp', bot_id)
      const pageRef = doc(webappRef, 'pages', page_id)
      const pageSnap = await getDoc(pageRef)
      page.setPage(pageSnap.data()) 
    }

    function setActiveBlock(block_id) {
      bus.dispatchEvent('activeBlock', block_id)
    }

    useHead({
      title: name,
      script: [
        {
          src: 'https://telegram.org/js/telegram-web-app.js',
        }
      ]
    })

    const blocks = computed(() => page.blocks)
    const order = computed(() => page.order)
    const active_block = computed(() => page.active_block)
</script>
<script>
import { Bus, WindowAdapter } from '@waves/waves-browser-bus';
import { initializeApp } from 'firebase/app'
import { 
  getFirestore,
  onSnapshot,
  doc,
  getDoc,
} from 'firebase/firestore'

import { usePage } from '@/stores'
let adapter
let bus
if (process.client) {
  const f = async function() {
    adapter = await WindowAdapter.createSimpleWindowAdapter()
    bus = new Bus(adapter)
  }
  f()
}
export default {
  
}
</script>

<template>
  <div class="web-app">
    <div class="web-app__blocks" v-if="order.length">
      <template
        v-for="block_id in order" 
        :id="block_id"
        :key="block_id"
      >
        <Block :block_id="block_id" @contextmenu.prevent="setActiveBlock(block_id)"/>
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
    width: 100%;
    max-width: 600px;
  }
}
</style>
