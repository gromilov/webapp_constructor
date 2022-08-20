import { Bus, WindowAdapter } from '@waves/waves-browser-bus';
export default defineNuxtPlugin(async (nuxtApp) => {
  const adapter = await WindowAdapter.createSimpleWindowAdapter()
  const bus = new Bus(adapter)
  window.$bus = bus
})