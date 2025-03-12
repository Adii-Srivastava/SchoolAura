// // menu toggle
// $(document).ready(function () {
    
//     $("body").on("click", function (e) {
//         if ($(e.target).parents(".navbar-link").hasClass("navbar-link") || $(e.target).hasClass("navbar-link")) {
//             console.log("menubox");
//         }
//         else if ($(e.target).parents(".menu-btn").hasClass("menu-btn")) {
//             console.log("btn");
//             $(".header-navbar .navbar-link").toggleClass("active");
//         } else {
//             console.log("else");
//             $(".header-navbar .navbar-link").removeClass("active");
//         }
//     });
// });
    
//     // form toggle
//     var LoginForm = document.getElementById("LoginForm");
//     var RegForm = document.getElementById("RegForm");
//     var Indicator = document.getElementById("Indicator");
//     function register(){
//         RegForm.style.transform = "translateX(0px)";
//         LoginForm.style.transform = "translateX(0px)";  
//         Indicator.style.transform = "translateX(140px)";   
    
//     }
    
//     function login(){
//         RegForm.style.transform = "translateX(300px)";
//         LoginForm.style.transform = "translateX(300px)"; 
//         Indicator.style.transform = "translateX(15px)";   
    
//     }


// menu toggle
$(document).ready(function () {
    
    $("body").on("click", function (e) {
        if ($(e.target).parents(".navbar-link").hasClass("navbar-link") || $(e.target).hasClass("navbar-link")) {
            console.log("menubox");
        }
        else if ($(e.target).parents(".menu-btn").hasClass("menu-btn")) {
            console.log("btn");
            $(".header-navbar .navbar-link").toggleClass("active");
        } else {
            console.log("else");
            $(".header-navbar .navbar-link").removeClass("active");
        }
    });
});

const handleClick=()=>{
    
}
    
    // form toggle
    var LoginForm = document.getElementById("LoginForm");
    var RegForm = document.getElementById("RegForm");
    var Indicator = document.getElementById("Indicator");
    function register(){
        RegForm.style.transform = "translateX(0px)";
        LoginForm.style.transform = "translateX(0px)";  
        Indicator.style.transform = "translateX(140px)";   
    
    }
    
    function login(){
        RegForm.style.transform = "translateX(300px)";
        LoginForm.style.transform = "translateX(300px)"; 
        Indicator.style.transform = "translateX(15px)";   
    
    }


