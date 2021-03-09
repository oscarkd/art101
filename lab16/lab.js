/**
 * Author:    Oscar Kim-Dangle and Ella Tracy
 * Created:   3.08.2021
 *
 * (c) Copyright by UCSC students.
 **/
getComic("http://xkcd.com/" + Math.round(Math.random()*2433) + "/info.0.json");
var page = 0;
var url='';

 $("#button").click(function(){
   page = Math.round(Math.random()*2433);
   url = "http://xkcd.com/" + page + "/info.0.json";
   getComic(url);
 })



 // $("back").click(function(){
 //   console.log("test");
 //   var page = currentComicObj.num-1;
 //   var newurl = "http://xkcd.com/" + page + "/info.0.json";
 //   getComic(newurl);
 //
 // })
 //
 // $("next").click(function(){
 //   var page = currentComicObj.num-1;
 //   var newurl = "http://xkcd.com/" + page + "/info.0.json";
 //   getComic(newurl);
 // })


 // Using the core $.ajax() method
function getComic(URL) {
  $.ajax({
    // The URL for the request (from the api docs)
    url: URL,
    // The data to send (will be converted to a query string)
    data: {
            // // here is where any data required by the api
            // //   goes (check the api docs)
            // id: 123,
            // api_key: "blahblahblah",
          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(comicObj) {
      currentComicObj = comicObj;
        // do stuff
        console.log(comicObj);
        // Give the section a title using the comicObj.title key from the object
        $("#output").html("<h3>"+ comicObj.title +"</h3>");
        // Create an image tag using the comicObj.img key from the object
        $("#output").append("<img src =' "+ comicObj.img + " ' alt = '"+ comicObj.alt +"'>");
        // Give the image an alt and title attributes using the comicObj.alt key from the object
        $("#output").append("<p>"+comicObj.month+"/"+comicObj.day+"/"+comicObj.year+"</p>");

    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})
}
