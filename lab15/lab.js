
$("#activate").click(function(){
  var input = $('#input').val();
  var url = "https://en.wikipedia.org/api/rest_v1/page/summary/"+input+"?redirect=true";
// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: url,
    // The data to send (will be converted to a query string)
    data: {

          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        if(data.extract_html){
        $("#output").html(data.extract_html);
        $("#img").html("<img src='"+data.originalimage.source+"'>");
      }else {
        $("#output").html("I couldn't find anything about that sorry :/")
        console.log("Error:", textStatus, errorThrown);
      }
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        $("#output").html("I couldn't find anything about that sorry :/")
        console.log("Error:", textStatus, errorThrown);
    }
})
})
