$(document).ready(function() {
    setTimeout(function(){
    if(window.location.href.indexOf('index') > -1) {
       $('#home').addClass('active');
    }
    else if(window.location.href.indexOf('portfolio') > -1) {
       document.getElementById('portfolio').className = 'active';
    }
    else if(window.location.href.indexOf('games') > -1) {
       document.getElementById('games').className = 'active';
    }
    else if(window.location.href.indexOf('contact') > -1) {
       document.getElementById('contact').className = 'active';
    }
    else {
       document.getElementById('home').className = 'active';
    }
    }, 300);
});