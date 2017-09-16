const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submitBtn = document.getElementById('submit');
const cancelBtn = document.getElementById('cancel');
const auth = firebase.auth();

cancelBtn.addEventListener('click', () => {
    window.location.replace('./index.html');
});


submitBtn.addEventListener('click', () => {
    let nameText = username.value;
    let emailText = email.value;
    let passwordText = password.value;
    auth.createUserWithEmailAndPassword(emailText, passwordText)
        .then(user => {
                return user.updateProfile({
                displayName: nameText,
            }).then(function () {
                console.log('Successfully Updated');
                window.location.replace('./index.html');
            });
            
        })
        .catch(error => {
            console.log(error);
        });

});

