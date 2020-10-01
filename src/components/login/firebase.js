import * as firebase from 'firebase/app'
import "firebase/auth"

const firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyDka9KMAw61zoTJ0TNu_MOa0pSJGd0sVLM",
    authDomain: "clone-8c69f.firebaseapp.com",
    databaseURL: "https://clone-8c69f.firebaseio.com",
    projectId: "clone-8c69f",
    storageBucket: "clone-8c69f.appspot.com",
    messagingSenderId: "170623228652",
    appId: "1:170623228652:web:aa7af974e6b75aa00f63c9",
    measurementId: "G-R7HJM796FC"
  
  
})
  // Initialize Firebase
// const db = firebaseapp.firestore()
// const auth =firebaseapp.auth()
// console.log(auth)


// export {auth ,db} 
export default firebaseapp