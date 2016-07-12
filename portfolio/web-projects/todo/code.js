var numOfObjects = 0;
var completedObjects = 0;
var array = {};

function newObject(a) {
    this.value = a;
    this.isChecked = false;
    this.arrayNum = numOfObjects;
}

function updateStats() {
    var asdf = completedObjects + " / " + numOfObjects + " completed";
    document.getElementById("stats").innerHTML = asdf;
}

function updateList() {
    var full = "";
    for (var i = 0; i < numOfObjects; i++) {
        var part = '<div id="item' + i + '"><input type="checkbox" onclick="crossedOut('+ i +')" id="itemCheck' + i + '"/>' + array[i].value + '</div>';
        full += part;
    }
    document.getElementById("list").innerHTML = full;
    for (var i = 0; i < numOfObjects; i++)
    {
        if (array[i].isChecked == true) {
            document.getElementById(["item" + i]).className = "checked-off";
            document.getElementById(["itemCheck" + i]).checked = true;
        }
        else {
            document.getElementById(["item" + i]).className = "";
            document.getElementById(["itemCheck" + i]).checked = false;
        }
    }
    updateStats();
}

function crossedOut(a) {
    if (array[a].isChecked == false) {
        array[a].isChecked = true;
        document.getElementById(["item" + a]).className = "checked-off";
        completedObjects++;
    }
    else {
        array[a].isChecked = false;
        document.getElementById(["item" + a]).className = "";
        completedObjects--;
    }
    updateStats();
}

function addToList() {
    var listItem = document.checklistForm.checklistField.value;
    if (listItem != "") {
        document.checklistForm.checklistField.value = "";
        array[numOfObjects] = new newObject(listItem);
        numOfObjects++;
    }
    updateList();
}

function runScript() {
    var key = window.event.keyCode;
    if (key.keyCode == 13) {
        //var tb = document.getElementById("scriptBox");
        //eval(tb.value);
        //return false;
        addToList();
    }
}