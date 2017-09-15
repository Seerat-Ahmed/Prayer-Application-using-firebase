const email = document.getElementById('email');
const password = document.getElementById('password');
const signInBtn = document.getElementById('sign-in');


const auth = firebase.auth();

signInBtn.addEventListener('click', () => {
    const emailText = email.value;
    const passwordText = password.value;    
    if (emailText != "" || passwordText != "") {
        auth.signInWithEmailAndPassword(emailText, passwordText)
            .then(user => {
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            });
    }
    else {
        console.log('Kindly fill empty fields');
    }
});

auth.onAuthStateChanged(user => {
    if (user) {
        console.log('Logged in ');
    }
});