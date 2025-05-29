
import{getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, db, setDoc,doc} from './firebase.js'

let signup = document.getElementById("signup")
let login = document.getElementById("login-btn")
const auth = getAuth();
if(signup){
    signup.addEventListener('click', ()=>{
    let Name = document.getElementById("Name").value
    let email = document.getElementById("Email").value
    let password = document.getElementById("Password").value
    let Phone = document.getElementById("Phone").value

    
createUserWithEmailAndPassword(auth, email, password, Name)
  .then((userCredential) => {
    // Signed up 
      
    const user = userCredential.user;
    updateProfile(auth.currentUser, {
  displayName: Name,
       
}).then(() => {
          // ✅ Now call saveUser with valid user and phone
           saveUser(user, Phone);
        }).then(()=>{
          
          console.log("User--->", user)
          location="booking_page.html";

        });
  
    // ...
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
})
}

if(login){
    login.addEventListener('click', ()=>{
       let email = document.getElementById("Email").value
    let password = document.getElementById("Password").value
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    Swal.fire({
  title: "Login Successfull",
  icon: "success",
  draggable: true
}).then(()=>{
    //  const user = userCredential.user;
    location="booking_page.html"
});
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });

})
}

let saveUser = async(user, Phone)=>{
  // const phoneNumber = "03020244975";
     await setDoc(doc(db, "users", user.uid), {
      name: user.displayName,
      email: user.email,
    uid: user.uid,
    phone: Phone
    });
    console.log("Document successfully written!", Phone);
}
