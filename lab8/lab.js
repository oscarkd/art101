/**
 * Author:    Oscar Kim-Dangle and Ella Tracy
 * Created:   2/8/2021
 *
 * (c) Copyright by UCSC students.
 **/

 function firstThing(test) {
   console.log(test+ " This is the first thing");
   return(test+ " This is the first thing");
 }

 function secondThing(test){
   console.log(test+ " This is the second thing");
   return(test+" This is the second thing");
 }

 function thirdThing(test){
   console.log(test+ " This is the third thing");
   return(test+" This is the third thing");
 }

//first test
 firstThing("TEST 1");
 secondThing("TEST 1");
 thirdThing("TEST 1");

//second test
 setTimeout( function(){
   firstThing("TEST 2");
 } ,0);

 setTimeout( function(){
   secondThing("TEST 2");
 } ,0);

 setTimeout( function(){
   thirdThing("TEST 2");
 } ,0);

 //third TEST
 setTimeout( function(){
   var output= document.getElementById('output');
   output.innerHTML = firstThing("TEST 3");
 } ,4000);

 setTimeout( function(){
   var output= document.getElementById('output');
   output.innerHTML =secondThing("TEST 3");
 } ,2000);

 setTimeout( function(){
   var output= document.getElementById('output');
   output.innerHTML =thirdThing("TEST 3");
 } ,3000);
