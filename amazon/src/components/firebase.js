import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAlcKE7v7bkVnR-Tj9TTbumXeW-QwiSuvs",
  authDomain: "clone-50fab.firebaseapp.com",
  projectId: "clone-50fab",
  storageBucket: "clone-50fab.appspot.com",
  messagingSenderId: "760339476982",
  appId: "1:760339476982:web:1596fb98d1adc7614697d7",
  measurementId: "G-7QYGV8MBRV"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()

export {auth}