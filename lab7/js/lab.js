/**
 * Authors:    Oscar Kim-Dangle and Ella Tracy
 * Created:   2/3/2021
 *
 * (c) Copyright by UCSC Students.
 **/

//nameSort - takes the users name and sort the letters
function nameSort(){
  //asks user for name
  var userName = window.prompt("Enter your name");

      //sets user's name to all lowercase
      userName = userName.toLowerCase();

  //makes array of letters in name
  var nameArray = userName.split("");
  //sorts letters
  nameArray.sort();

      //makes the first letter uppercase
      nameArray[0] = nameArray[0].toUpperCase();


  //creates string from sorted array
  var newName = nameArray.join('');
  //returns new name
  return newName;
}

document.writeln("Your sorted name is: " +nameSort());
