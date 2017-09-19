let postMilliRef = firebase.database().ref('/').child('post');//.orderByChild('milli');

postMilliRef.on('child_added', snapshot => {
    let dataObj = snapshot.exportVal();
    console.log(dataObj);
});
let yourObject = {
    nmae : 'Ghania Ahmed Khan'
};
let item = firebase.database().ref('/').child('host').push();
item.setWithPriority(yourObject, 0 - Date.now());

firebase.database().ref('/').child('host').on('child_added', function(fbdata) {
    console.log(fbdata.exportVal());
  })