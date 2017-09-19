/* *********************************************************************** */
/* *************************** Toggle Like ******************************* */
/* *********************************************************************** */

/* ********** Getting references ********** */

function toggleLike(el) {
    //Getting reference to the like icon button
    let likeIcon = el.children[0];
    //Getting reference to the main post div
    let postDiv = likeIcon.parentElement.parentElement.parentElement;
    console.log(postDiv);
    if (likeIcon.className == 'fa fa-heart-o') {
        likeIcon.setAttribute('class', 'fa fa-heart');
    }
    else {
        likeIcon.setAttribute('class', 'fa fa-heart-o');
    }

}


