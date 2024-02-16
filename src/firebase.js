// import firebase from 'firebase'

// console.log(firebase)
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCPJn0hzWg6ISeU9r0eZLB0Yjf8ScH65do",
//     authDomain: "login-system-9e779.firebaseapp.com",
//     projectId: "login-system-9e779",
//     storageBucket: "login-system-9e779.appspot.com",
//     messagingSenderId: "866209696254",
//     appId: "1:866209696254:web:4e7682d348d5c931b618af",
//     measurementId: "G-R9FVMZKP0B"
//   };

// // Initialize Firebase

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const auth=firebase.auth();
// const provider= new firebase.auth.GoogleAuthProvider();

// export {auth,provider}
//____________________________________________________________________


import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCPJn0hzWg6ISeU9r0eZLB0Yjf8ScH65do",
    authDomain: "login-system-9e779.firebaseapp.com",
    projectId: "login-system-9e779",
    storageBucket: "login-system-9e779.appspot.com",
    messagingSenderId: "866209696254",
    appId: "1:866209696254:web:4e7682d348d5c931b618af",
    measurementId: "G-R9FVMZKP0B"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const provider= new firebase.auth.GoogleAuthProvider();
export { auth,provider }
