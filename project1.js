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
});

  var config = {
    apiKey: "AIzaSyB28biNcaTY2Uv-AzmrOI7XI5ZCJVI5BEQ",
    authDomain: "project-1-8adbf.firebaseapp.com",
    databaseURL: "https://project-1-8adbf.firebaseio.com",
    projectId: "project-1-8adbf",
    storageBucket: "project-1-8adbf.appspot.com",
    messagingSenderId: "167793891997"
  };
    firebase.initializeApp(config);
    console.log("works");


