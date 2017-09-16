const meLink = document.getElementById('me-link');
const auth = firebase.auth();

auth.onAuthStateChanged(user => {
    if(user){
        meLink.innerHTML = user.displayName;
        console.log(user);
    }
    else{
        window.location.replace('./index.html');
    }
});