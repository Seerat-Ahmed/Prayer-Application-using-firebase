/* ******************************************************************* */
/* *********************** Signing  Up ******************************* */
/* ******************************************************************* */

/* ********** Getting Referencexs ********** */
const searchBar = document.getElementById('search');
const searchButton = document.getElementById('search-btn');

/* ********** Searching for data in database when click on search button ********** */
searchButton.addEventListener('click', () => {
    //Getting search bar text
    let searchBarText = searchBar.value;
    //Getting user name references
    let nameRef = firebase.database().ref('/').child('post').orderByValue('.priority');
    //Checking whether the search input field is emplty or not
    if (searchBarText != "" && searchBarText != null) {
        let data = nameRef.equalTo(searchBarText);
        data.on('child_added', snapshot => {

            console.log(snapshot.exportVal());

        });
    }
    else {
        console.log('Nothing to search');
    }

});
