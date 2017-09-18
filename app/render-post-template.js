const renderPostTemplate = `
<div class="post">

                <div class="post-header">
                    <h3 class="sender-name"><a href="#">Seerat Ahmed Khan</a></h3>
                    <span class="post-date">Aug 28, 2017</span>
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quos dolore fugiat nam, natus repellendus aliquid ipsa nemo!
                    Consequatur ducimus eaque deserunt aliquam voluptate, est quae qui? Explicabo, animi labore.
                </div>

                <span class="horizon"></span>

                <div class="post-footer">
                    <div class="row">
                        <div class="post-like-icon col-md-4">
                            <!-- <a href="JavaScript:void(0)" class="">
                                <i class="fa fa-heart-o"></i>
                                <span> Like </span>
                            </a> -->
                            <like></like>
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

`;