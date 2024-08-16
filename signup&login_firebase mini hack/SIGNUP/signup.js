import { auth, createUserWithEmailAndPassword } from "../firebase.js"

let email = document.getElementById("email");
let password = document.getElementById("password");
let signupbtn = document.getElementById("signupbtn")

const signup = () => {
    console.log('hi')
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            Toastify({

                text: "signup Successgfully",

                duration: 3000

            }).showToast();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Toastify({

                text: error,

                duration: 3000

            }).showToast();
        });

}
signupbtn.addEventListener("click", signup)