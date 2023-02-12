//  // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
//   import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyDyziJBjDotcCCEIxr2DW10Ifkb8IrZBHk",
//     authDomain: "auth-1841c.firebaseapp.com",
//     databaseURL: "https://auth-1841c-default-rtdb.firebaseio.com",
//     projectId: "auth-1841c",
//     storageBucket: "auth-1841c.appspot.com",
//     messagingSenderId: "303547974602",
//     appId: "1:303547974602:web:ae983ff7a8c327882c0533",
//     measurementId: "G-GX1T1032GR"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
//   const auth = getAuth();

//   const signup= () =>{
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("pass").value;

//   firebase.auth().createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
// }


const signIn = document.querySelector('.btn')
console.log(signIn)

signIn.addEventListener('click', function() {
  const email = document.querySelector('.email');
  const password = document.querySelector('password');
  console.log(email)
  localStorage.addItem(email.textContent, password.textContent)
  const text = localStorage(email.textContent)
  console.log(text)
})

