/*var currentPage = {
    RED: 0,
    BLUE: 1,
    ORANGE: 2,
    GREEN: 3
}*/

//var currentPage;

var bracketState = {
    val: 0
}

var rulesState = {
    val: 0
}

var calendarState = {
    val: 0
}

var contactState = {
    val: 0
}

var tutorialState = {
    val: 0
}

//var bracketState;

$( document ).ready(function() {
    //currentPage = 0;
    //itemOne();
    $("#calendar").hide();
    //$("#bracket").hide();
    //$("#rules").hide();
    $("#contact").hide();
    //$("#tutorial").hide();
    alert("The Christmas Tournament has been moved from Dec 16 to Dec 22. Sorry for any inconvenience this has caused.");
});

$('#hoverMe').hover(function () {
    $('#tooltip').fadeIn(0);
}, function () {
    $('#tooltip').fadeOut(0);
});
$('#tooltip').hover(function () {
    $('#tooltip').fadeIn(0);
}, function () {
    $('#tooltip').fadeOut(150);
});

function downloadForm() {
  	window.open('../files/SmashBrosPermissionSlip.pdf');
}

/*
function toggleBracket() {
    if (bracketState == 0) {
        bracketState = 1;
        $("#bracket").slideDown(300);
    }
    else if (bracketState == 1) {
        bracketState = 0;
        $("#bracket").slideUp(300);
    }
}

function toggleCalendar() {
    if (bracketState == 0) {
        $("#calendar").slideDown(300);
        bracketState = 1;
    }
    else if (bracketState == 1) {
        $("#calendar").slideUp(300);
        bracketState = 0;
    }
}
*/

function toggleItem(id, itemState) {
    if (itemState.val == 0) {
        $(id).slideDown(300);
        /*
        $(id).show(function(){
        // Find the iframes within our newly-visible element
        $(this).find("iframe").prop("src", function(){
            // Set their src attribute to the value of data-src
            return $(this).data("src");
        });
    });*/
        
        itemState.val = 1;
    }
    else if (itemState.val == 1) {
        $(id).slideUp(300);
        itemState.val = 0;
    }
}

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
    
    //currentPage = 0;
    
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
    
    //currentPage = 1;
    
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
    
    //currentPage = 2;
    
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
    
    //currentPage = 3;
    
    $("#navFour").addClass("navFourSelected");
    $("footer").addClass("footerFour");
    $("#sidebar").addClass("contentFour");
}