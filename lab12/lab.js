/**
 * Author:    Oscar Kim-Dangle and Ella Tracy
 * Created:   2/22/21
 *
 * (c) Copyright by UCSC
 **/

//  Create a function sortingHat()
// that takes a string as an argument: function sortingHat(str)
var houseDescription="";

function sortingHat(name) {
  // counts the letters in str and assigns it to a variable length
  var length = name.length;
  // uses modulus (% operator) to get the remainder with 4: mod = length % 4;
  var mod= length % 4;
  // mod will now be a value between 0 and 3
  // create a conditional that will return
  // Gryffindor, Ravenclaw, Slytherin, and Hufflepuff depending on whether the value
  // of mod is 0, 1, 2, or 3
//   if(mod==0){
//     return "Gryffindor";
//   } else if(mod==1){
//     return "Ravenclaw";
//   } else if(mod==2){
//     return "Hufflepuff";
//   }else if(mod==3){
//     return "Slytherin";
//   }
// }

  //task x - add house description
    if(mod==0){
      houseDescription= "Gryffindor values daring, nerve, and chivalry.";
    } else if(mod==1){
      houseDescription= "Ravenclaw values wit, learning, and wisdom.";
    } else if(mod==2){
      houseDescription = "Hufflepuff values hard work, dedication, patience, loyalty, and fair play.";
    }else if(mod==3){
      houseDescription = "Slytherin values ambition, cunning, leadership, and resourcefulness.";
    }
    console.log(houseDescription);

    //task x - use an array to make the code simpler
    var houses = ["Gryffindor","Ravenclaw","Hufflepuff","Slytherin"];
    return houses[mod];
  }


// Create an event listener attached to #button
 $("#button").click(function (){
   // that gets the value of #input and assigns it to a variable name
   var name = $("#input").val();
   // runs sortingHat(name) and stores the result in a variable house
   var house = sortingHat(name);
   // appends a new styled paragraph to #output that says "The Sorting Hat has sorted you into " + house
   $("#output").text("The sorting hat has assigned you to:");
   $("#output").append("<h3>" +house+"</h3>");
   $("#output").append(houseDescription);
 })
