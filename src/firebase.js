//import * as firebase from "firebase";
import firebase from "firebase/compat/app";
//import "firebase/firestore";
import 'firebase/compat/storage'
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDs8jyXb5kuXQSXg9q5rlFQ3R-cV799og4",
    authDomain: "stars-116de.firebaseapp.com",
    projectId: "stars-116de",
    storageBucket: "stars-116de.appspot.com",
    messagingSenderId: "305097421066",
    appId: "1:305097421066:web:777bae362e41266b410af3"
  };

const firebaseApp= firebase.initializeApp(firebaseConfig);
const firestore= firebaseApp.firestore();
const storage = firebase.storage()

export {
  storage,firestore as default
}

//firebase.initializeApp(config);
//export default firebase.firestore();

