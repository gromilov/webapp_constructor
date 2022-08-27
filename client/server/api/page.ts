// import { initializeApp } from 'firebase/app'
// import { 
//   getFirestore,
//   doc,
//   getDoc,
// } from 'firebase/firestore'
// const { bot_id, firebaseConfig } = useRuntimeConfig().public
// const firebaseApp = initializeApp(firebaseConfig)
// const db = getFirestore(firebaseApp)

export default defineEventHandler(async (event) => {
    // const { page_id } = await useBody(event)
    // const webappRef = doc(db, 'webapp', bot_id)
    // const pageRef = doc(webappRef, 'pages', page_id)
    // const pageSnap = await getDoc(pageRef)
    // const page = pageSnap.data()
    return { blocks: {}, order: []}
})