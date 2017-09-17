/* ******************************************************************* */
/* *********************** Signing  Up ******************************* */
/* ******************************************************************* */


/* ********** Getting Rference ********** */
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submitBtn = document.getElementById('submit');
const cancelBtn = document.getElementById('cancel');
const auth = firebase.auth();

/* ********** Redirecting to index.html when click on cancel button ********** */
cancelBtn.addEventListener('click', () => {

    window.location.replace('./index.html');

});


/* ********** Submit a requesting for signing up when click on sign up button ********** */
submitBtn.addEventListener('click', () => {
    //Getting value from text fields
    let nameText = username.value;
    let emailText = email.value;
    let passwordText = password.value;

    //Creating account using the above data
    auth.createUserWithEmailAndPassword(emailText, passwordText)
        .then(user => {//if successfully created account
            //Setting Display name
            return user.updateProfile({
                displayName: nameText,
            })
                .then(() => {//if successfully updated display name
                    console.log('Successfully Updated');
                    window.location.replace('./index.html');
                });
        })
        .catch(error => {//if failed to create account
            console.log(error);
        });

});

