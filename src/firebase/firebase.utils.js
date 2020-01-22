import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDUPVNpFBL-gDqL-tgaVvxk6GG3hi3tCW4",
    authDomain: "clothing-store-db-c3837.firebaseapp.com",
    databaseURL: "https://clothing-store-db-c3837.firebaseio.com",
    projectId: "clothing-store-db-c3837",
    storageBucket: "clothing-store-db-c3837.appspot.com",
    messagingSenderId: "298976422614",
    appId: "1:298976422614:web:e431fb873385a772d77777",
    measurementId: "G-HGD08TFR5M"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;