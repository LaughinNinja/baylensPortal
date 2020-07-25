const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.menu');
    const navLinks = document.querySelectorAll('.menu li');

    //toggle
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    

    //animate links
    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = '';
        } else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
    });

    //burger animation
    burger.classList.toggle('toggle');
});


}

navSlide();
$(document).ready(function(){

    $('h4#logo').mouseover(function(){
        logo.style.color = "white";
    });
    $('h4#logo').mouseout(function(){
        logo.style.color = "rgb(226,226,226)";
    });
    $('a#l1').mouseover(function(){
        l1.style.color = "white";
    });
    $('a#l1').mouseout(function(){
        l1.style.color = "rgb(226,226,226)";
    });
    $('a#l2').mouseover(function(){
        l2.style.color = "white";
    });
    $('a#l2').mouseout(function(){
        l2.style.color = "rgb(226,226,226)";
    });
    $('a#l3').mouseover(function(){
        l3.style.color = "white";
    });
    $('a#l3').mouseout(function(){
        l3.style.color = "rgb(226,226,226)";
    });
    $('a#l4').mouseover(function(){
        l4.style.color = "white";
    });
    $('a#l4').mouseout(function(){
        l4.style.color = "rgb(226,226,226)";
    });

});