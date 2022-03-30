(function () {


    // Import the functions you need from the SDKs you need
    // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
    // // TODO: Add SDKs for Firebase products that you want to use
    // // https://firebase.google.com/docs/web/setup#available-libraries

    // // Your web app's Firebase configuration
    // const firebaseConfig = {
    //     apiKey: "AIzaSyB2E-FyX45282cIum3ootKxP87uDLd3aYQ",
    //     authDomain: "food-28d6b.firebaseapp.com",
    //     databaseURL: "https://food-28d6b-default-rtdb.firebaseio.com",
    //     projectId: "food-28d6b",
    //     storageBucket: "food-28d6b.appspot.com",
    //     messagingSenderId: "358972668515",
    //     appId: "1:358972668515:web:1b0e1cd4ecf90ad9241656"
    // };

    // // Initialize Firebase
    // const app = initializeApp(firebaseConfig);

    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyB2E-FyX45282cIum3ootKxP87uDLd3aYQ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    //Get Elements
    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignup = document.getElementById("btnSignup");

    //Add Login Event
    btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        const password = txtPassword.value;

        const auth = firebase.auth();

        //sign in with firebase auth
        auth.signInWithEmailAndPassword(email, password).then(user => {
            alert("Login Successful :)");
            localStorage.setItem('keeploggedin', 'yes')
            localStorage.setItem('user', email)
            window.location.href = '/index.html';
        }).catch(err => {
            alert(err.message);
        });

    });

    //Add Signup Event
    // btnSignup.addEventListener('click', e => {

    //     //get email and password
    //     const email = txtEmail.value;
    //     const password = txtPassword.value;

    //     const auth = firebase.auth();

    //     //sign in with firebase auth
    //     const promise = auth.createUserWithEmailAndPassword(email, password).then(user => {
    //         alert("Signup Successful :)")
    //     }).catch(err => {
    //         alert(err.message);
    //     });

    // });


}());
