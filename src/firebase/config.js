import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"

const firebaseConfig = {

    apiKey: "AIzaSyCzNc13NBEuhrjlm-HgJ662MUSSCNQsRS4",
  
    authDomain: "vue-blog-system-4da9f.firebaseapp.com",
  
    projectId: "vue-blog-system-4da9f",
  
    storageBucket: "vue-blog-system-4da9f.appspot.com",
  
    messagingSenderId: "775800106211",
  
    appId: "1:775800106211:web:7297df7136ff0d515229d6"
  
  };

  firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore();
  let timestamp = firebase.firestore.FieldValue.serverTimestamp;
  let auth = firebase.auth();

  export {db, timestamp, auth};
  
  



