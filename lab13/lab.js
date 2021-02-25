/**
 * Author:    Ella Tracy and Oscar Kim-Dangle
 * Created:   2.24.2021
 *
 * (c) Copyright  UCSC.
 **/
//input field that sets range of the Loop
var loops = 0;
var name1="";
var name2="";
var name3="";
var factor1= 0;
var factor2= 0;
var factor3= 0;
$("#button").click(function() {
  loops = $("#input").val();
  factor1= $("#factor1").val();
  name1 = $("#name1").val();
  factor2= $("#factor2").val();
  name2 = $("#name2").val();
  factor3= $("#factor3").val();
  name3 = $("#name3").val();
  loop();
})

function loop(){
 // Loop through numbers 1 to 200, listing them as you go
 for (var i=1; i<=loops; i++){
   var string = '';
 // If the number is a multiple of 3, if should print "Fizz!"
    if(i%factor1 == 0){
      string = string + name1;
    }
 // If the number is a multiple of 5, it should print "Buzz!"
    if(i%factor2 == 0){
      string = string + name2;
    }

 // If the number is a multiple of 7, it should print "Boom!"
    if(i%factor3 == 0){
      string = string + name3;
    }

    if(string == ""){
      string = i;
    }
    $("#output").append("<p>"+ string +"</p>");
 // If the number is a multiple of more than one 3, 5 or 7, it
 // should combine Fizz, Buzz, and Boom. For example, if the number
 // is a multiple of 3 AND 5, it should print "FizzBuzz!" and so on.
 }
}
