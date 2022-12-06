// AIzaSyC2YOvSd_wMDbhhOx05e7P_jbtgXoPsZIU

var userLat;
var userLon;
var lat;
var lon;

function getLocation() {
    const message = document.querySelector("#message");
    // check if the Geolocation API is supported
    if (!navigator.geolocation) {
        // message.textContent = `Your browser doesn't support Geolocation`;
        // message.classList.add('error');
        return null;
    }
    // get the current position
    navigator.geolocation.getCurrentPosition((pos)=>{
        console.log(pos)
        lat = pos.coords.latitude;
        lon = pos.coords.longitude;
    });
    console.log(lat)
    console.log(lon)

    //click event
    const btn = document.querySelector('#ip-btn');
    btn.addEventListener('click', function () {
        // latitude and longitude chosen by user
        lat = +document.querySelector("#lat").value;
        lon = +document.querySelector("#lon").value;
        initMap()
    });
}

function initMap() {
    var location = {lat: lat,lng: lon}
    var map = new google.maps.Map(document.querySelector("#map"),{
        zoom: 15, center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

const ipRef = document.querySelector("#ipAdress");
const locationRef = document.querySelector("#location");
const timezoneRef = document.querySelector("#timezone");
const ispRef = document.querySelector("#isp");

fetch('http://ip-api.com/json/?fields=61439')
    .then((res) => res.json())
        .then((res) => {
            ipRef.textContent = res.query;
            locationRef.textContent = res.city +", "+ res.region +", "+ res.zip;
            timezoneRef.textContent = res.timezone;
            ispRef.textContent = res.isp;
        });



getLocation();
