function toggleLike(el) {
    let likeState = el.children[0].children[0];
    if (likeState.className == 'fa fa-heart-o') {
        likeState.setAttribute('class', 'fa fa-heart');
    }
    else {
        likeState.setAttribute('class', 'fa fa-heart-o');
    }
}