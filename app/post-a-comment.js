function RenderComment(comment){
    return `
            <div class="post-comment">
                <div class="row">
                    <div class="col-md-1">
                        <i class="fa fa-heart"></i>
                    </div>
                    <div class="col-md-11">
                        <h3>${firebase.auth().currentUser.displayName}</h3>
                            <p>
                                ${comment}
                            </p>
                        </div>
                    </div>
                    <span class="horizon"></span>
                </div>
            </div>`
}
function postComment(el) {
    let parentEl = el.parentElement.parentElement;
    let inputBox = parentEl.getElementsByTagName('input');
    let abbu = parentEl.parentElement.parentElement;
    let commentSection = abbu.getElementsByClassName('comment-section');
    commentSection[0].innerHTML += RenderComment(inputBox[0].value);
    inputBox[0].value = "";
}