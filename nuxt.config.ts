import { defineNuxtConfig } from 'nuxt'
import { initializeApp } from 'firebase/app'
import { 
  getFirestore,
  doc,
  getDoc,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBsovv_br0tZZiLV5RS8u_UbzzNcSzE3gk',
  authDomain: 'inqoob-dev.firebaseapp.com',
  projectId: 'inqoob-dev',
  storageBucket: 'inqoob-dev.appspot.com',
  messagingSenderId: '109707730862',
  appId: '1:109707730862:web:3d4b69b1586b308246323f',
  measurementId: 'G-EHB4B7PDRF',
}

const firebaseApp = initializeApp(firebaseConfig)
export const db = getFirestore(firebaseApp)

async function nuxtConfig() {
 
  const bot_id = process.env.BOT_ID
  const docRef = doc(db, 'webapp', bot_id)
  const docSnap = await getDoc(docRef)
  const { blocks, routes } = docSnap.data()

  console.log(bot_id, 'bot_id')

  return defineNuxtConfig({
    rootDir: `BOTS/BOT_${bot_id}`,
    runtimeConfig: {
      public: {
        blocks,
        bot_id,
        routes,
      }
    },
    router: {
      // https://router.vuejs.org/api/interfaces/routeroptions.html
      options: {}
    },
    nitro: {
      prerender: {
        routes: routes.map(({route}) => route)
      }
    }
  })
}
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default nuxtConfig

