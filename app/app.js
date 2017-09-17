/* ******************************************************************* */
/* *********************** Signing  In ******************************* */
/* ******************************************************************* */


/* ********** Getting References ********** */
const email = document.getElementById('email');
const password = document.getElementById('password');
const signInBtn = document.getElementById('sign-in');
const signUpBtn = document.getElementById('sign-up');
const auth = firebase.auth();


/* ********** Signing In a user when click on sign in button */ 
signInBtn.addEventListener('click', () => {
    //Getting text from input fields
    const emailText = email.value;
    const passwordText = password.value;    
    //Check whether any of the input box is empty
    if (emailText != "" || passwordText != "") {
        auth.signInWithEmailAndPassword(emailText, passwordText)
            .then(user => {
                console.log('Sucessfully Sign In');
            })
            .catch(error => {
                console.error(error);
            });
    }
    else {
        console.warn('Kindly fill empty fields');
    }

});


/* ********** Redirecting to sign up page when click on sign up button ********** */
signUpBtn.addEventListener('click', () => {
    
    window.location.replace('./sign-up.html');

});

/* ********** Checking for authentication state ********** */
auth.onAuthStateChanged(user => {

    if (user) {
        console.log('Logged in ');
        window.location.replace('./home.html');
    }
    else{
        console.log('Logged out ');
    }

});