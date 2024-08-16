
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";


// const firebaseConfig = {
//     apiKey: "AIzaSyAjz0WmPNI3-9-Z3UDbqsNP2PaA24MQFZ0",
//     authDomain: "test-app-f4c6f.firebaseapp.com",
//     projectId: "test-app-f4c6f",
//     storageBucket: "test-app-f4c6f.appspot.com",
//     messagingSenderId: "455900792964",
//     appId: "1:455900792964:web:4aba413ab8709621dc5ad1",
//     measurementId: "G-R888DDLGQ6"
//   };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);


// export { auth, createUserWithEmailAndPassword }
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
 import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAldY1Ac6I-aQ2UpW9jUHCoaTEVqA_OHD4",
   authDomain: "blog-app-cb145.firebaseapp.com",
   projectId: "blog-app-cb145",
   storageBucket: "blog-app-cb145.appspot.com",
   messagingSenderId: "416789958851",
   appId: "1:416789958851:web:bf7fb269f10e5334d25276",
   measurementId: "G-EKLSNRF7GY"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword }
