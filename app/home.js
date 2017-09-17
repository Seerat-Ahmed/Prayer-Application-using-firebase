/* *********************************************************************** */
/* *************************** Home Events ******************************* */
/* *********************************************************************** */

/* ********** Getting Reference ********** */

const meLink = document.getElementById('me-link');
const logOutBtn = document.getElementById('log-out');
var auth = firebase.auth();

/* ********** Checking for authentication state ********** */
auth.onAuthStateChanged(user => {

    if (user) {//if logged in
        meLink.innerHTML = user.displayName;
    }
    else {//if not logged in
        window.location.replace('./index.html');
    }

});

/* ********** Sign out from the account when click on sign out button ********** */
logOutBtn.addEventListener('click', () => {

    auth.signOut();//Function to sign out from the account

});






