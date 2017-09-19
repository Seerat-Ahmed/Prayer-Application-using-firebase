function toggleComment(el) {
    let commentSection = el.parentElement.parentElement.parentElement.getElementsByClassName('comment-section');
    
    if (commentSection[0].style.display == 'block') {
        commentSection[0].style.display = 'none';

    }
    else {
        commentSection[0].style.display = 'block';
    }
}