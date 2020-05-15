
$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 10) {
            $('.navbar .navbar-brand img').attr('src','./images/logo-dark.png');
        }
        if ($(window).scrollTop() < 10) {
            $('.navbar .navbar-brand img').attr('src','./images/logo.png');
        }
    })
});


//Navbar

$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});



//fade

$(window).on("load",function() {
    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".fade").each(function() {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();

            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
            } else { //object goes out of view (scrolling up)
                if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
            }
        });
    }).scroll(); //invoke scroll-handler on page-load
});


//canva screen
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("main").style.marginLeft = "0px";
    document.getElementById("main").style.backgroundColor="rgba(0,0,0,0.4)";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("main").style.backgroundColor= "white";
}





// Hamburgur menu
function myFunction(x) {
    x.classList.toggle("change");
}

//blog slide
$('.owl-carousel1').owlCarousel({
    loop:true,
    margin: 0,
    center: false,
    items: 4,
    dots:true,
    autoplay: true,
    autoplayTimeout: 2500,
    smartSpeed: 450,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1170: {
            items: 4
        }
    }
});


//Testimonials
jQuery(document).ready(function($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: false,
        items: 3,
        margin: 10,
        autoplay: true,
        dots:true,
        autoplayTimeout: 2500,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1170: {
                items: 3
            }
        }
    });
});


//smooth scroll for menu link

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
