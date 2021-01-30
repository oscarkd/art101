/**
 * Author:    Oscar Kim-Dangle
 * Created:   Jan 30, 2021
 *
 * (c) Intellecutal property of Oscar.
 **/

//My transport array
 var myTransport = ["bike"," car"," bus"," longboard"," rollerskate"];

//My main ride Object
 var myMainRide = {
    make: "tesla",
    model : "flymobile",
    color : "silver",
    year: 1999,
    ownIt: false,
    age: function(){
      return 2021 - year;
    }
  };

//print

document.writeln("To get around town I use my "+ myTransport + "<br>"+"<br>");

document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
