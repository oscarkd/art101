//Lab 10 - Sort or Scrable a name
//Author: Oscar Kim-Dangle
//Created: 2/11/2021
//License: Coding Man lincense 2021

//find output (make it a golbal var)
var outputEl = document.getElementById("output");

//find button element
var buttonEl = document.getElementById("my-button");
//add listener
buttonEl.addEventListener("click", function(){
  //finds input
  nameEl = document.getElementById("user-name");
  //saves username
  var userName = nameEl.value;

  //make user name all lowercase
  userName = userName.toLowerCase();
  console.log(userName);
  //make username into an array
  var nameArray = userName.split('');
  //sort name array
  nameArray.sort();
  //Capitalize first letter
  nameArray[0] = nameArray[0].toUpperCase();
  //turn array into string
  userName = nameArray.join('');
  //console.log(nameArray);
  outputEl.innerHTML = userName;
})

//buttons for background color
var redEl = document.getElementById('red');
redEl.addEventListener("click", function(){
  outputEl.style.backgroundColor = "red";
})
var orangeEl = document.getElementById('orange');
orangeEl.addEventListener("click", function(){
  outputEl.style.backgroundColor = "orange";
})
var yellowEl = document.getElementById('yellow');
yellowEl.addEventListener("click", function(){
  outputEl.style.backgroundColor = "yellow";
})
var greenEl = document.getElementById('green');
greenEl.addEventListener("click", function(){
  outputEl.style.backgroundColor = "green";
})
var blueEl = document.getElementById('blue');
blueEl.addEventListener("click", function(){
  outputEl.style.backgroundColor = "blue";
})
var purpleEl = document.getElementById('purple');
purpleEl.addEventListener("click", function(){
  outputEl.style.backgroundColor = "purple";
})

//buttons for text color
var text1El = document.getElementById('text1');
text1El.addEventListener("click",function(){
  outputEl.style.color = "Black";
})
var text2El = document.getElementById('text2');
text2El.addEventListener("click",function(){
  outputEl.style.color = "White";
})

//buttons for border
var border1El = document.getElementById('solid');
border1El.addEventListener("click",function(){
  outputEl.style.border = "solid";
})
var border2El = document.getElementById('dashed');
border2El.addEventListener("click",function(){
  outputEl.style.border = "dashed";
})
var border3El = document.getElementById('dotted');
border3El.addEventListener("click",function(){
  outputEl.style.border = "dotted";
})
var border4El = document.getElementById('double');
border4El.addEventListener("click",function(){
  outputEl.style.border = "double";
})


// var buttonEl = document.getElementById("submit-button");
//
// buttonEl.addEventListener("click",function(){
//
//   nameEl = document.getElementById("name");
//
//   var userName = nameEl.value;
//   userName.sort();
//
//   titleEl = document.getElementById("title");
//   titleEl.innerHTML = userName;
//)}
