var currentPage = {
    RED: 0,
    BLUE: 1,
    ORANGE: 2,
    GREEN: 3
}
var currentPage;

$( document ).ready(function() {
    currentPage = 0;
    itemOne();
});

function deselectAll()
{
    $("#navOne").removeClass("navOneSelected");
    $("#navTwo").removeClass("navTwoSelected");
    $("#navThree").removeClass("navThreeSelected");
    $("#navFour").removeClass("navFourSelected");
    
    $("footer").removeClass("footerOne");
    $("footer").removeClass("footerTwo");
    $("footer").removeClass("footerThree");
    $("footer").removeClass("footerFour");
    
    $("#sidebar").removeClass("contentOne");
    $("#sidebar").removeClass("contentTwo");
    $("#sidebar").removeClass("contentThree");
    $("#sidebar").removeClass("contentFour");
}

function itemOne() {
    deselectAll();
    $("#pageTwo").hide();
    $("#pageThree").hide();
    $("#pageFour").hide();
    
    $("#pageOne").fadeIn(300);
    
    currentPage = 0;
    
    $("#navOne").addClass("navOneSelected");
    $("footer").addClass("footerOne");
    $("#sidebar").addClass("contentOne");
}
function itemTwo() {
    deselectAll();
    $("#pageOne").hide();
    $("#pageThree").hide();
    $("#pageFour").hide();
    
    $("#pageTwo").fadeIn(300);
    
    currentPage = 1;
    
    $("#navTwo").addClass("navTwoSelected");
    $("footer").addClass("footerTwo");
    $("#sidebar").addClass("contentTwo");
}
function itemThree() {
    deselectAll();
    $("#pageOne").hide();
    $("#pageTwo").hide();
    $("#pageFour").hide();
    
    $("#pageThree").fadeIn(300);
    
    currentPage = 2;
    
    $("#navThree").addClass("navThreeSelected");
    $("footer").addClass("footerThree");
    $("#sidebar").addClass("contentThree");
}
function itemFour() {
    deselectAll();
    $("#pageOne").hide();
    $("#pageTwo").hide();
    $("#pageThree").hide();
    
    $("#pageFour").fadeIn(300);
    
    currentPage = 3;
    
    $("#navFour").addClass("navFourSelected");
    $("footer").addClass("footerFour");
    $("#sidebar").addClass("contentFour");
}