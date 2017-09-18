var postRef = firebase.database().ref('/').child('post');


    // dbRef.on('child_added', snapshot => {
    //     console.log('Normal : ' + snapshot.val());
    // });

// postRef.on('child_added', snapshot => {
//     let obj = snapshot.val();
//     console.log('Descending : ' + obj);
// });


// firebase.database().ref('/').child('post').on('child_added', function(fbdata) {
//     console.log(fbdata.exportVal());
//   })

