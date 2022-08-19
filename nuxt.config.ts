import { defineNuxtConfig } from 'nuxt'
import { initializeApp } from 'firebase/app'
import { copySync } from 'fs-extra'
import path from 'path'

import { 
  getFirestore,
  doc,
  getDoc,
  collection,
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
const db = getFirestore(firebaseApp)

async function nuxtConfig() {
  const srcDir = 'client/'
  const bot_id = process.env.BOT_ID
  const docRef = doc(db, 'webapp', bot_id)
  const docSnap = await getDoc(docRef)
  const { routes } = docSnap.data()
  let rootDir
  let pages
  
  if (process.env.NODE_ENV === 'production') {
    rootDir = `WEB_APPS/APP_${bot_id}`
    
    try {
      copySync(
        path.resolve( __dirname, srcDir), 
        path.resolve( __dirname, `${rootDir}/${srcDir}`), 
        { overwrite: true }
      )
      console.log(`Папка /client/ скопирована!`)
    } catch (err) {
      console.error(err)
    }
  }

  return defineNuxtConfig({
    rootDir,
    srcDir: `${srcDir}/`,
    runtimeConfig: {
      public: {
        pages,
        bot_id,
        routes,
        firebaseConfig,
      }
    },
    components: {
      dirs: [
        {
          path: '~/components/Blocks',
          global: true
        },
        '~/components'
      ]
    },
    router: {
      options: {}
    },
    nitro: {
      prerender: {
        routes: Object.values(routes).map(({href}) => href)
      }
    }
  })
}
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default nuxtConfig

