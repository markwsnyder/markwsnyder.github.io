window.onload = function pageload() {

    //document.getElementById('mainNav').innerHTML = '<object type="text/html" data="html/nav.html" class="nav"></object>';
    if(window.location.href.indexOf('index') > -1) {
       alert("WHOA");
       $('#home').addClass('active');
       alert("WHOA2");
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
};