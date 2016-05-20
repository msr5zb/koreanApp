$(document).ready(function(){

    //Start of JS Pre-Functions
    //Fade Content in
    $('#contentContainer').css('opacity','1'); 

    //Function for Smooth Scrolling
    function smoothScroll(speed) {
       $('html, body').animate({
           scrollTop: $("#content").offset().top-50
        }, speed);
    }

    $("#banner").click(function(){
        window.location.href = "index.html";
    });
    
    $(".navHandler").click(function(){
        smoothScroll(500);
    });
    
    
});

