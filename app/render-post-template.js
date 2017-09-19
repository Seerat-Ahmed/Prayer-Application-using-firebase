function RenderPost(key, obj) {
    return `
    <div class="post">

        <div id="${key}" class="post-header">
            <h3 id="${obj.priority}" class="sender-name"><a href="#">${obj.name}</a></h3>
            <span class="post-date">${obj.date}</span>
            <div class="dropdown">
                <i class="fa fa-cog" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-hidden="true"></i>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#"><i class="fa fa-remove"></i><span class="post-drop-item">Delete</span></a>
                    <a class="dropdown-item" href="#"><i class="fa fa-edit"></i><span class="post-drop-item">Edit</span></a>
                    <a class="dropdown-item" href="#"><i class="fa fa-eye-slash"></i><span class="post-drop-item">Hide</span></a>
                </div>
            </div>
        </div>

        <div class="post-content">
            ${obj.postBody}
        </div>

        <span class="horizon"></span>

        <div class="post-footer">
            <div class="row">
                <div onClick = "toggleLike(this)" class="post-like-icon col-md-4">
                    <a href="JavaScript:void(0)" class="">
                        <i class="fa fa-heart-o"></i>
                        <span> Like </span>
                    </a>
                </div>

                <div onClick="toggleComment(this)" class="post-comment-icon col-md-4">
                    <a href="JavaScript:void(0)">
                        <i class="fa fa-comment-o"></i>
                        <span> Comment </span>
                    </a>
                </div>

                <div class="post-share-icon col-md-4">
                    <a href="JavaScript:void(0)">
                        <i class="fa fa-share"></i>
                        <span> Share </span>
                    </a>
                </div>
            </div>
        </div>

        <span class="horizon"></span>

        <div class="comment-section">
            
        </div>

        <div class="post-a-comment">

            <div class="row">

                <div class="col-md-1">
                    <i class="fa fa-heart"></i>
                </div>

                <div class="col-md-10">
                    <input type="text" name="post-a-comment" placeholder="Write a comment" />
                </div>

                <div class="col-md-1">
                    <a onClick="postComment(this)" href="JavaScript:void(0)">
                        <i class="fa fa-send"></i>
                    </a>
                </div>
            </div>
        </div>
</div>`
}