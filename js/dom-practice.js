/*eslint-env browser*/

//STEP 1
/*
function myFunction() {
    "use strict";
    alert("I have been clicked.");
}
*/

//STEP 2
/*
function myFunction(){
    "use strict";
    alert("I have been clicked.");
};
*/

//STEP 3
/*
document.getElementById("myBtn").addEventListener("click", myFunction);

function myFunction(){
    "use strict";
    alert("I have been clicked.");
};
*/

//STEP 4
/* COME BACK TO
document.getElementById("myBtn").addEventListener("click", myFunction);

function myFunction(x) {
    "use strict";
    alert(x);
}
function clicked() {
    "use strict";
    alert("I have been clicked.")
}
myFunction(clicked());
*/

//STEP 5 COME BACK TO

//STEP 6
/*
document.getElementById("redirect").addEventListener("click", function(event){
    event.preventDefault();
    alert("You have clicked on the link.")
});
*/

//STEP 7
/*
document.getElementById("btn").addEventListener("click");

onload = function(){
    document.form.textbx.focus();
}
function displayText() {
    "use strict";
    if(document.form.textbx.value !== ""){
        alert("You entered " + document.form.textbx.value);
    } else {
            alert("Nothing was entered.");
    }
}
*/
//STEP 8
/*
function init() {
    "use strict";
    var btn = window.document.getElementById("btn");
    btn.addEventListener("click", function () {
        window.open("newpage.html", "login", "width=300,height=300");
    });
}
window.addEventListener("load", init);
*/

//STEP 9
/*
var start = window.document.getElementById("start");
start.addEventListener("click", function() {
    "use strict";
    function displayMessage() {
        window.console.log("Learning Javascript is fun!");
    }
    window.setInterval(displayMessage, 2000);
})

var stop = window.document.getElementById("stop");
stop.addEventListener("click", function() {
    "use strict";
    function doNotDisplayMessage() {
    window.clearInterval(start);
    }
})
*/

//STEP 10
/*
document.getElementById("btn").addEventListener("click");

onload = function(){
    document.form.names.focus();
}
function displayText() {
    "use strict";
    if (document.form.names.value !== ""){
        alert("My name is " + document.form.names.value);
    } 
}
*/