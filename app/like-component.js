const likeComponent = ` <a href="JavaScript:void(0)" onClick="toggleLike(this)" class="">
                            <i class="fa fa-heart-o"></i>
                            <span> Like </span>
                        </a>`;
const likeTag = document.getElementsByTagName('like');

if(likeTag.length > 0){
   for(let i = 0; i < likeTag.length; i++){
       likeTag[i].innerHTML = likeComponent;
   }
}

function toggleLike(id) {

    let likeIcon = id.children[0];

    if(likeIcon.className == 'fa fa-heart-o'){
        likeIcon.setAttribute('class', 'fa fa-heart');
    }
    else{
        likeIcon.setAttribute('class', 'fa fa-heart-o');
    }

}
 

