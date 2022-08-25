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
  adapter = await WindowAdapter.createSimpleWindowAdapter()
  bus = new Bus(adapter)
}
export default {
  async setup() {
    const page = usePage()
    const route = useRoute()
    const { bot_id, routes, firebaseConfig } = useRuntimeConfig().public
    const { id: page_id, name } = Object.values(routes).find(
      ({ href }) => route.fullPath.split('#')[0] === href
    )
    page.setPageId(page_id)
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
    } else {
      // try {
      //   const data = await $fetch(
      //     `/api/page`, { method: 'POST', body: { page_id }}
      //   );
      //   page.setPage(data)
      // } catch {}

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
      bus.off('activeBlock')
      bus.off('page_id')
      adapter.destroy()
    }) 

    return { 
      setActiveBlock,
      blocks: computed(() => page.blocks),
      order: computed(() => page.order),
      active_block: computed(() => page.active_block),
      page_id
    }
  }
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
