$(document).ready(function(){
    $('select').formSelect();
  });
  function buildQueryURL() {

  }
  var queryParams = {"api-key": "AIzaSyB8I1jYCzLpdFheT0Fdk2XpdlzpeHJhJwE"};
  var queryURL = "https://www.google.com/maps/@?api=1&map_action=map";
  
  $.ajax({
    url: queryURL,
    method: "GET"
  
  }).then(function(response) {
    console.log(response);
    console.log(queryURL);
  })