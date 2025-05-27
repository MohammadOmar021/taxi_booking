import{onAuthStateChanged, getAuth, db, signOut } from './firebase.js'

let logOut = document.getElementById("logOut");
let verify = document.getElementById("verify")
let personData = document.getElementById("personData")
let personLogo = document.getElementById("personLogo")
let avatar= document.getElementById("avatar")
let pickUp = document.getElementById("pickUp")
let currentLoc = document.getElementById("currentLoc")
let bookme = document.getElementById("bookme")
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const displayName = user.displayName;
     personData.innerHTML=`${displayName}`
    const uid = user.uid;
  if(!user.emailverified){
    verify.style.display="inline-block";
  }
  if(!user.photoURL){
        personLogo.style.display="block"
        avatar.innerHTML=`<img src="https://png.pngtree.com/png-clipart/20230930/original/pngtree-man-avatar-isolated-png-image_13022170.png" class="img-fluid">`
  }
  console.log(user)
    // ...
  } else {
    // User is signed out
    // ...
    
  }
});

currentLoc.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition((position) => {
   
  pickUp.value = position.coords.latitude + ", " + position.coords.longitude;

  }, (error) => {
    console.log("Geolocation error:", error.message);
  });
});

logOut.addEventListener('click', ()=>{
    signOut(auth).then(() => {
  // Sign-out successful.
  location="index.html"
}).catch((error) => {
  // An error happened.
});
})