import firebase from 'firebase/app'; // import lib - important
import 'firebase/firestore';
import 'firebase/auth';

const config =  { // copy in firebase
    apiKey: "AIzaSyCIxYZPusofGREX84HnyGhpFa8727ml1iU",
    authDomain: "crown-db-8b0c9.firebaseapp.com",
    databaseURL: "https://crown-db-8b0c9.firebaseio.com",
    projectId: "crown-db-8b0c9",
    storageBucket: "crown-db-8b0c9.appspot.com",
    messagingSenderId: "209790915812",
    appId: "1:209790915812:web:c69b001184bb6aa84e08f1",
    measurementId: "G-YZ28E4NWVN"
  };
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' }); // show sign in popup google whenever access
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;