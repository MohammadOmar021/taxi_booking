
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut  } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
import { getFirestore,doc, setDoc  } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";
  const firebaseConfig = {
    apiKey: "AIzaSyBE2dt9QAJNRKLrLfkn926vBjl-6zXyM9c",
    authDomain: "taxi-booking-20381.firebaseapp.com",
    projectId: "taxi-booking-20381",
    storageBucket: "taxi-booking-20381.firebasestorage.app",
    messagingSenderId: "330511763094",
    appId: "1:330511763094:web:40d430e00281e71691a4b7"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  export{
    auth,
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    db, 
    setDoc,
    doc,
    signOut 
  }
