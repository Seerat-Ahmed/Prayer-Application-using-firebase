/* ************************************************************************************* */
/* *************************** Posting Prays to Database ******************************* */
/* ************************************************************************************* */


/* ********** Getting References ********** */
const postPray = document.getElementById('post-pray');
const postBody = document.getElementById('post-body');
const postCancel = document.getElementById('post-cancel');
const dbRef = firebase.database().ref('/');
var auth = firebase.auth();





/* ********** Declaring time ********** */
var currentTime;
const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];





/* ********** Getting current date ********** */
getCurrentDate = () => {
    //Getting date string
    let date = new Date();
    //Getting mmonth index
    let currentMonth = date.getMonth();
    //Getting month name
    currentMonth = month[currentMonth];
    //Getting year
    let currentYear = date.getFullYear();
    //Getting current date
    currentDate = date.getDate();
    //Returning month date, year
    return (`${currentMonth} ${currentDate}, ${currentYear}`);
};


/* ********** post a pray to the database when clicked on post a pray button ********** */
postPray.addEventListener('click', () => {
    //Getting user uid    
    let user = firebase.auth().currentUser;

    if (user != null) {//if successfully got user uid
        try {
            //Posting to the database
            dbRef.child('post').push({
                milli: new Date().getMilliseconds(),//Get milliseconds which can be used in sorting
                name: user.displayName,//Get user name
                uid: user.uid,//Get user uid
                email: user.email,//Get user email
                postBody: postBody.value,//get post body
                date: getCurrentDate()//get current date  - 'month date, year'
            });

        } catch (error) {
            console.log(error);
        }
    }
});


/* ********** Clear the textarea when click on the clear button ********** */
postCancel.addEventListener('click', () => {

    postBody.value = "";

});