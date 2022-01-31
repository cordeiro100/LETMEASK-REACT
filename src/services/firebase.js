import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyAJaES054_nnDvcPFVvouUN3IbmNEZSKV4",
    authDomain: "letmeask3-61f09.firebaseapp.com",
    projectId: "letmeask3-61f09",
    storageBucket: "letmeask3-61f09.appspot.com",
    messagingSenderId: "975770404361",
    appId: "1:975770404361:web:9cc77a727655ac0a2a1ad8"
  };

  firebase.initializeApp(firebaseConfig)
 

  const auth = firebase.auth();
  const database = firebase.database();


 export { firebase, auth, database }
