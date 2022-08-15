import { defineNuxtPlugin, useState } from '#app'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// import { getAuth, } from 'firebase/auth'
const firebaseConfig = {
  // development
  apiKey: 'AIzaSyBsovv_br0tZZiLV5RS8u_UbzzNcSzE3gk',
  authDomain: 'inqoob-dev.firebaseapp.com',
  projectId: 'inqoob-dev',
  storageBucket: 'inqoob-dev.appspot.com',
  messagingSenderId: '109707730862',
  appId: '1:109707730862:web:3d4b69b1586b308246323f',
  measurementId: 'G-EHB4B7PDRF',
}
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
export const db = getFirestore(firebaseApp)
// export const auth = getAuth(firebaseApp)

export default defineNuxtPlugin((nuxtApp) => {
  useState('db', () => db)
})
