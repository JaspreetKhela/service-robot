// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 6,
  });
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

// Retrieve longitude and latitude of user's position

var coordinates = document.getElementById("coordinates");
var x = document.getElementById("geolocation");

var positionData = {};

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
    positionData = position;

    fetchLocationData()

    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}

function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        x.innerHTML = "User denied the request for Geolocation."
        break;
      case error.POSITION_UNAVAILABLE:
        x.innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        x.innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        x.innerHTML = "An unknown error occurred."
        break;
    }
}

coordinates.addEventListener("click", getLocation());

// Perform a reverse geocode request to find province information
provinceName = document.getElementById("province-name");
provincePrimier = document.getElementById("province-premier");
provinceAttractions = document.getElementById("province-attractions");
provinceTax = document.getElementById("province-tax");

var apiKey = "pk.eyJ1IjoiamFzcHJlZXRraGVsYSIsImEiOiJja3dydmt1eDgweXRhMnZwNGJzeHhoeGw3In0.WxmHwzKils_9hqoiot75ww";
var province = "";

function fetchLocationData() {
    // Fetch data from the Mapbox API
    fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/" + positionData.coords.longitude + "," + positionData.coords.latitude + ".json?access_token=" + apiKey)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        province = ((data.features)[5]).text;

        console.log("Your current location is in the province of " + province);

        if (province == "Ontario") {
            provinceName.innerHTML = "Your are currently in the province of " + province + ".";
            provincePrimier.innerHTML = "The premier of " + province + " is Doug Ford.";
            provinceAttractions.innerHTML = "Popular attractions in " + province + " include the CN Tower and the ROM.";
            provinceTax.innerHTML = province + "'s total sales tax is 13%."
        }
        if (province == "Quebec") {
            provinceName.innerHTML = "Your are currently in the province of " + province + ".";
            provincePrimier.innerHTML = "The premier of " + province + " is François Legault.";
            provinceAttractions.innerHTML = "Popular attractions in " + province + " include the Place Royale and Le Château Frontenac.";
            provinceTax.innerHTML = province + "'s total sales tax is 14.975%."
        }
        if (province == "Nova Scotia") {
            provinceName.innerHTML = "Your are currently in the province of " + province + ".";
            provincePrimier.innerHTML = "The premier of " + province + " is Tim Houston.";
            provinceAttractions.innerHTML = "Popular attractions in " + province + " include the Halifax Citadel National Historic Site of Canada and the Maritime Museum of the Atlantic.";
            provinceTax.innerHTML = province + "'s total sales tax is 15%."
        }
        if (province == "New Brunswick") {
            provinceName.innerHTML = "Your are currently in the province of " + province + ".";
            provincePrimier.innerHTML = "The premier of " + province + " is Blaine Higgs.";
            provinceAttractions.innerHTML = "Popular attractions in " + province + " include the Bay of Fundy and the Hopewell Rocks.";
            provinceTax.innerHTML = province + "'s total sales tax is 15%."
        }
        if (province == "Manitoba") {
            provinceName.innerHTML = "Your are currently in the province of " + province + ".";
            provincePrimier.innerHTML = "The premier of " + province + " is Heather Stefanson.";
            provinceAttractions.innerHTML = "Popular attractions in " + province + " include the Canadian Museum for Human Rights and the Assiniboine Park Zoo.";
            provinceTax.innerHTML = province + "'s total sales tax is 12%."
        }
        if (province == "British Columbia") {
            provinceName.innerHTML = "Your are currently in the province of " + province + ".";
            provincePrimier.innerHTML = "The premier of " + province + " is John Horgan.";
            provinceAttractions.innerHTML = "Popular attractions in " + province + " include Whistler and the Yoho National Park.";
            provinceTax.innerHTML = province + "'s total sales tax is 12%."
        }
        if (province == "Prince Edward Island") {
            provinceName.innerHTML = "Your are currently in the province of " + province + ".";
            provincePrimier.innerHTML = "The premier of " + province + " is Dennis King.";
            provinceAttractions.innerHTML = "Popular attractions in " + province + " include the Green Gables Heritage Place and the Prince Edward Island National Park.";
            provinceTax.innerHTML = province + "'s total sales tax is 15%."
        }
        if (province == "Saskatchewan") {
            provinceName.innerHTML = "Your are currently in the province of " + province + ".";
            provincePrimier.innerHTML = "The premier of " + province + " is Scott Moe.";
            provinceAttractions.innerHTML = "Popular attractions in " + province + " include the RCMP Heritage Centre and the Cypress Hills Interprovincial Park.";
            provinceTax.innerHTML = province + "'s total sales tax is 11%."
        }
        if (province == "Alberta") {
            provinceName.innerHTML = "Your are currently in the province of " + province + ".";
            provincePrimier.innerHTML = "The premier of " + province + " is Jason Kenney.";
            provinceAttractions.innerHTML = "Popular attractions in " + province + " include Lake Louise and Athabasca Falls.";
            provinceTax.innerHTML = province + "'s total sales tax is 5%."
        }
        if (province == "Newfoundland and Labrador") {
            provinceName.innerHTML = "Your are currently in the province of " + province + ".";
            provincePrimier.innerHTML = "The premier of " + province + " is Andrew Furey.";
            provinceAttractions.innerHTML = "Popular attractions in " + province + " include the Signal Hill National Historic Site of Canada and the Cape Spear Lighthouse National Historic Site of Canada.";
            provinceTax.innerHTML = province + "'s total sales tax is 15%."
        }
        if (province == "Northwest Territories") {
            provinceName.innerHTML = "Your are currently in the province of " + province + ".";
            provincePrimier.innerHTML = "The premier of " + province + " is Caroline Cochrane.";
            provinceAttractions.innerHTML = "Popular attractions in " + province + " include the Nahanni National Park Reserve and the Wood Buffalo National Park.";
            provinceTax.innerHTML = province + "'s total sales tax is 5%."
        }
        if (province == "Yukon") {
            provinceName.innerHTML = "Your are currently in the province of " + province + ".";
            provincePrimier.innerHTML = "The premier of " + province + " is Sandy Silver.";
            provinceAttractions.innerHTML = "Popular attractions in " + province + " include the MacBride Museum and Emerald Lake.";
            provinceTax.innerHTML = province + "'s total sales tax is 5%."
        }
        if (province == "Nunavut") {
            provinceName.innerHTML = "Your are currently in the province of " + province + ".";
            provincePrimier.innerHTML = "The premier of " + province + " is P.J. Akeeagok.";
            provinceAttractions.innerHTML = "Popular attractions in " + province + " include Auyuittuq National Park and Quttinirpaaq National Park.";
            provinceTax.innerHTML = province + "'s total sales tax is 5%."
        }
    })
};