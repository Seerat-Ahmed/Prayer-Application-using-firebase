/* ********************************************************************************** */
/* *************************** Navigation Bar tempate ******************************* */
/* ********************************************************************************** */

/* ********** Create navigation bar template ********** */
const navigationTemplate =
    `<nav class="navbar navbar-expand-lg navbar-light bg-primary" >
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="#"><img src="images/logo.png" /></a>
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" id="me-link"></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" id="notification">Notification</a>
                </li>
                <li>
                    
                </li>
            </ul>
            <div class="form-inline my-2 my-lg-0">
                <input id="search"class="form-control mr-sm-2" type="text" placeholder="Search by name" aria-label="Search">
                <button id="search-btn" class="btn btn-outline-primary my-2 my-sm-0" type="submit">
                    Search
                </button>
                <button id="log-out" class="btn btn-secondary">
                    Logout
                </button>
            </div>
        </div>
    </nav>`;

/* ********** Getting Reference ********** */
const navigationElement = document.getElementsByTagName('my-nav');

/* ********** If element found ********** */ 
if (navigationElement[0] != null)
    navigationElement[0].innerHTML = navigationTemplate;//Pasting the navigation bar template in the my-nav custom tag