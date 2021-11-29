$(document).ready(function() {
    $(".menu-toggle").on("click", function() {
        $(".nav-bar").toggleClass("show-nav");
        $(".user-dropdown").toggleClass("show-nav");
    });
});