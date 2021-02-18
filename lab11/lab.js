/**
 * Author:    Oscar Kim-Dangle and Ella Tracy
 * Created:   February 17, 2021
 *
 * (c) Copyright by UC Santa Cruz Students.
 **/

 // Using jQuery, create buttons to add to the challenge, problems,
 //and results sections of your document:

 // Find the section you want to add the button to
 var challengeEl = $("#challenge");
 var problemsEl = $("#problems");
 var resultsEl = $("#results");
 var outputEl = $("#output");
 var bodyEl = $("body");
 var headerEl = $("#body h3");
 var pEl= $("#body p");
 // Create the button , Give it a text label
 var myButton = "<button id='a'> Style me! </button>";
 var myButton1 = "<button id='b'> Change Fonts </button>";
 var myButton2 = "<button id='c'> Turn into terminal </button>";
 // Add it to the section
 challengeEl.append(myButton);
 problemsEl.append(myButton1);
 resultsEl.append(myButton2);

 var button1El = $("#a");
 var button2El = $("#b");
 var button3El = $("#c");

 // Using jQuery, do the following for each button:
 // Add a click event to each button
 // Find the challenge, problems, or results section the button is in.
 challengeEl.toggleClass("special");
 $("#a").click(function(){
    challengeEl.toggleClass("special");
    button1El.css("background-color","#4CAF50");
    button2El.css("background-color","#8DBEFC");
    button3El.css("background-color","#8DBEFC");
 });

$("#b").click(function(){
    headerEl.css("font-family", "cursive");
    headerEl.css("font-weight", "bold");
    pEl.css("font-family","fantasy");
    button1El.css("background-color","#B998FF");
    button2El.css("background-color","#4CAF50");
    button3El.css("background-color","#B998FF");

});

 $("#c").click(function(){
   button1El.css("background-color","#E64034");
   button2El.css("background-color","#E64034");
   resultsEl.css("background-color", "black");
   resultsEl.css("color","white");
   resultsEl.css("border-style","solid");
   resultsEl.css("border-width","5px");
   resultsEl.css("border-color","#36F05B");
   resultsEl.css("padding","20px");
   resultsEl.css("margin", "20px")
   resultsEl.html("beep boop i am a computer");
   resultsEl.css("font-family", "monospace");
 });
