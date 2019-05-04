function buildQueryURL() {
}
var queryParams = {"api-key": "AIzaSyAB2nCG4mrdrlW6j6nJ1cY9LB6NZaRZ7OI"};
var queryURL = "https://www.google.com/maps/@?api=1&map_action=map";

$.ajax({
  url: queryURL,
  method: "GET"

}).then(function(response) {
  console.log(response);
  console.log(queryURL);
});

var firebase = new Firebase("<https://project-1-8adbf.firebaseio.com>")
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


