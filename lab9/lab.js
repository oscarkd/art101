/**
 * Author:    Oscar Kim-Dangle and Ella Tracy
 * Created:   February 10, 2021
 *
 * (c) Copyright by UC Santa Cruz Students.
 **/

// Use getElementById() to find your output <div> and assign it to a variable outputEl
var outputEl = document.getElementById("output");

    // TASK X - creates variable for the whole HTML body
    var bodyEl = document.getElementById("body");
    
// Create a new element with document.createElement("p") and assign it to a variable new1El
var new1El = document.createElement("p")
// Change the html attribute of new1El to say something new.
new1El.innerHTML = "Hello. I am computer"
// Create another new element and assign it to a variable new2El
var new2El = document.createElement("div")
// Change the html attribute of new2El to say something else.
new2El.innerHTML = "Hello. I am Mr. Cool"

    // TASK X - new element for task x
    var new3El = document.createElement("a");
    new3El.innerHTML = "This is the third element, I can be printed before any element"

// Append both new elements one at a time using appendChild() to your output <div>
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

    // TASK X - append element before an element
    var beforeEl = bodyEl.childNodes[0];
    bodyEl.insertBefore(new3El, beforeEl);

// Change the css attributes of at least two elements of your page
new1El.style.color = "red";
new2El.style.color = "blue";
bodyEl.style.padding = "20px";
bodyEl.style.color = "white";
bodyEl.style.backgroundColor = "#a67777";
