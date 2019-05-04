var map;
function initMap() {
  var latlong = {lat: 41.8781, lng: -87.6298};
  var map = new google.maps.Map(document.getElementById('map'), {zoom: 6, center: latlong});
  // var marker = new google.maps.Marker({position: latlong, map: map});
  // var infowindow = new google.maps.InfoWindow({content: latlong});

  // marker.addListener('click', function() {
  //   infowindow.open(map, marker);
  //   console.log('clicked')
  // });



$(document).ready(function () {

// Initalize Firebase
var config = {
  apiKey: "AIzaSyBRwD61vwENVUAeH_NHl-y29Ghjbe_UYNA",
  authDomain: "new-test-5bd5e.firebaseapp.com",
  databaseURL: "https://new-test-5bd5e.firebaseio.com",
  projectId: "new-test-5bd5e",
  storageBucket: "new-test-5bd5e.appspot.com",
  messagingSenderId: "324295534431"
};
firebase.initializeApp(config);

var database = firebase.database();

function buildQueryURL() {
    var queryURL = "https://api.eventful.com/json/events/search?...&";

    var queryParams = {
      app_key: "Cc5b498hZCQZ9P8m",
      oauth_fields: "4c420762561519b874ff",
      page_numbers: "1",
      page_size: "5"
    };

    queryParams.q = $("#event-type")
      .val()
      .trim();

    var zipCode = $("#zip-code")
      .val()
      .trim();

      // Firebase Info Push
      var eventSearch ={
        event_term: queryParams.q,
        zip_code: zipCode,
        }
      
      database.ref().push(eventSearch);

    if (parseInt(zipCode)) {
      queryParams.location = zipCode;
    }
    
    console.log("---------------\nURL: " + queryURL + "\n---------------");
    console.log(queryURL + $.param(queryParams));
    return queryURL + $.param(queryParams);

  };

function updatePage(localEvent) {
  console.log(localEvent);
  var events = localEvent.events.event;
  console.log("EVENTS", events);
  for (var i = 0; i < events.length; i++) {
      var eventInfo = events[i];
      var $eventList = $("<ul>");
      $eventList.addClass("list-group" + "<br>");
      $("#event-view").append($eventList);
      var title = eventInfo.title;
      console.log(title);
      var $eventListItem = $("<li class='list-group-item'>");
      var eventURL = eventInfo.url;
      if (eventURL) {
          console.log(eventURL);
          $eventListItem.append(
              "<h4>" + title +
              "</h4>"
          );
      }

      var description = eventInfo.description;
      if (description) {
          $eventListItem.append("<p>" + "Description: " + description + "</p>");
      }
      var startTime = eventInfo.start_time;
      if (startTime) {
          $eventListItem.append("<p>" + "Start Time: " + startTime + "</p>");
      }
      var venueAddress = eventInfo.venue_address;
      if (venueAddress) {
          $eventListItem.append("<p>" + "Location: " + venueAddress + "</p>");
      }
      var latlong = {
          lat: parseFloat(eventInfo.latitude),
          lng: parseFloat(eventInfo.longitude)
        };
  
        console.log(latlong);

        var marker = new google.maps.Marker({
          position: latlong
        });

        marker.setMap(map);
        
        var infowindow = new google.maps.InfoWindow({
          content: title,
        });

        marker.addListener('click', function() {
          infowindow.open(map, marker);
          console.log('clicked');
        });

      $eventList.append($eventListItem);
     }
  };

function clear() {
  $("#event-view").empty();
};

$("#search-event").on("click", function (event) {
  event.preventDefault();
  clear();
  var queryURL = buildQueryURL();
  $.ajax({
      url: queryURL,
      dataType: "jsonp",
      method: "GET"
  }).then(updatePage);
});

});
};