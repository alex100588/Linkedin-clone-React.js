import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDnM_ogu5b80yXHTxp2CH25ajVeUaDfwk8",
  authDomain: "linkedin-clone-4d3b9.firebaseapp.com",
  projectId: "linkedin-clone-4d3b9",
  storageBucket: "linkedin-clone-4d3b9.appspot.com",
  messagingSenderId: "412033064427",
  appId: "1:412033064427:web:37d10d2e0581cfff634dae"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export { db, auth }