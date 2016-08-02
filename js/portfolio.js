StringBuilder sb = new StringBuilder();
  sb.Append("Sys.Application.add_load(");
  sb.Append("function() { alert('page load'); });");

ClientScript.RegisterStartupScript(this.GetType(), "Page_Load", sb.ToString(), true);

var pageStates = {
    DEFAULT: 0,
    UNITY: 1,
    CUSTOM: 2,
    WEB: 3
}
var currentState;

// UPDATE PAGE DATA BASED OFF OF VALUE OF CURRENTSTATE

function updatePage() {
    switch (currentState)
    {
        case pageStates.DEFAULT:
            displayDefault();
            break;
        case pageStates.UNITY:
            displayUnity();
            break;
        case pageStates.CUSTOM:
            displayCustom();
            break;
        case pageStates.WEB:
            displayWeb();
            break;
        default:
            displayDefault();
            break;
    }
}

// CHECKS TO SEE IF THERE IS A HASH IN THE URL

function checkHash() {
    if(window.location.href.indexOf("unity") > -1) {
       currentState = pageStates.UNITY;
    }
    else if (window.location.href.indexOf("custom") > -1) {
        currentState = pageStates.CUSTOM;
    }
    else if (window.location.href.indexOf("web") > -1) {
        currentState = pageStates.WEB;
    }
    else
    {
        currentState = pageStates.DEFAULT;
    }
}

// DISPLAY FUNCTIONS

function displayDefault() {
    hideAll();
}

function displayUnity() {
    $("#customVerticleContainer").hide();
    $("#webVerticleContainer").hide();
    
    $("#verticlecardcontainer").show();
    $("#unityVerticleContainer").fadeIn(500);
}

function displayCustom() {
    $("#unityVerticleContainer").hide();
    $("#webVerticleContainer").hide();
    
    $("#verticlecardcontainer").show();
    $("#customVerticleContainer").fadeIn(500);
}

function displayWeb() {
    $("#unityVerticleContainer").hide();
    $("#customVerticleContainer").hide();

    $("#verticlecardcontainer").show();
    $("#webVerticleContainer").fadeIn(500);
}

function hideAll() {
    $("#verticlecardcontainer").hide();
    $("#unityVerticleContainer").hide();
    $("#customVerticleContainer").hide();
    $("#webVerticleContainer").hide();
}

// ON CLICK FUNCTIONS

function onUnityClick() {
    currentState = pageStates.UNITY;
    updatePage();
}

function onCustomClick() {
    currentState = pageStates.CUSTOM;
    updatePage();
}

function onWebClick() {
    currentState = pageStates.WEB;
    updatePage();
}

// WHEN THE PAGE LOADS

window.onload = function() {
    checkHash();
    updatePage();
}