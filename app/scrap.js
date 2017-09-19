
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















































<div class="post">
    <!-- Post header contain name date and some basic option for managing post -->
                <div class="post-header">
        <!-- Sender name will show here -->
                    <h3 class="sender-name"><a href="#">Seerat Ahmed Khan</a></h3>
        <!-- Sending date will show here -->
                    <span class="post-date">Aug 28, 2017</span>
        <!-- This is a dropdown that conatins some basic options(Edit, Delete and Hide) -->
                    <div class="dropdown">
            <i class="fa fa-cog" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-hidden="true"></i>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#"><i class="fa fa-remove"></i> <span class="post-drop-item">Delete</span></a>
                <a class="dropdown-item" href="#"><i class="fa fa-edit"></i><span class="post-drop-item">Edit</span></a>
                <a class="dropdown-item" href="#"><i class="fa fa-hide"></i><span class="post-drop-lock">Hide</span></a>
            </div>
        </div>
    </div>
    <!-- Post content will render here -->
                <div class="post-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quos dolore fugiat nam, natus repellendus aliquid ipsa nemo!
                    Consequatur ducimus eaque deserunt aliquam voluptate, est quae qui? Explicabo, animi labore.
                </div>

    <!-- This is a horizontal line -->
                <span class="horizon"></span>

    <!-- This is the footer that contains like, comment and share button -->
                <div class="post-footer">
        <div class="row">
            <div class="post-like-icon col-md-4">
                <a href="JavaScript:void(0)" class="">
                    <i class="fa fa-heart-o"></i>
                    <span> Like </span>
                </a>
            </div>

            <div class="post-comment-icon col-md-4">
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
        <div class="post-comment">
            <div class="row">
                <div class="col-md-1"><i class="fa fa-heart"></i></div>
                <div class="col-md-11">
                    <h3>Seerat Ahmed Khan</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, asperiores? Debitis dolorem sed voluptates dolorem recusandae
                                    iusto?
                                </p>
                </div>
            </div>
            <span class="horizon"></span>
        </div>


        <div class="post-comment">
            <div class="row">
                <div class="col-md-1"><i class="fa fa-heart"></i></div>
                <div class="col-md-11">
                    <h3>Seerat Ahmed Khan</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, asperiores? Debitis dolorem sed voluptates dolorem recusandae
                                    iusto?
                                </p>
                </div>
            </div>
            <span class="horizon"></span>
        </div>
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
                <a href="JavaScript:void(0)">
                    <i class="fa fa-send"></i>
                </a>
            </div>
        </div>
    </div>
</div>
