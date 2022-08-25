import { acceptHMRUpdate, defineStore } from 'pinia'

export const usePage = defineStore('page', {
  state: () => ({
    page_id: null,
    blocks: {},
    order: [],
    active_block: null
  }),

  getters: {
    block: (state) => (id) => state.blocks[id]
  },

  actions: {
    setPageId(page_id) {
      this.$patch({page_id})
    },
    setPage(page) {
      this.$patch(page)
    },
    setActiveBlock(block_id) {
      this.$patch({
        active_block: block_id
      })
    }
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePage, import.meta.hot))
}