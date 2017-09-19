var postRef = firebase.database().ref('/').child('post');
var postSection = document.getElementById('post-section');


postRef.on('child_added', snapshot => {
    let obj = snapshot.exportVal();
    let key = snapshot.key;
    postSection.innerHTML += RenderPost(key, obj);
});