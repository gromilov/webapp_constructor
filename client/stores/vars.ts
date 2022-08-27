import { defineStore } from 'pinia'

export const useVars = defineStore('vars', {
  state: () => ({
    vars: {
      
    },
  }),

  getters: {
    getState: (state) => (key) => state.vars[key]
  },

  actions: {
    setState({key, value}) {
      this.vars[key] = value
      return value
    },
  },
})

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useVars, import.meta.hot))
// }