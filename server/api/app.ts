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

export default defineEventHandler(async (event) => {
  const { id } = await useBody(event)
  const docRef = doc(db, 'webapp', id)
  const docSnap = await getDoc(docRef)
  const { blocks } = docSnap.data()
  return blocks
})