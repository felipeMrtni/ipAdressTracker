let info = [];
const ipAPI = 'http://ip-api.com/json/?fields=61439';
getInformation();
getLocation();

async function getInformation() {
    const res = await fetch(ipAPI)
    info = await res.json()
    showInfo(info)
}
// ----------- SHOW INFO -------------------------
const ipRef = document.querySelector("#ipAdress");
const locationRef = document.querySelector("#location");
const timezoneRef = document.querySelector("#timezone");
const ispRef = document.querySelector("#isp");

function showInfo(info){
    ipRef.textContent = res.query;
    locationRef.textContent = res.city +", "+ res.region +", "+ res.zip;
    timezoneRef.textContent = res.timezone;
    ispRef.textContent = res.isp;
}

// ---------------------- initMap google -------------------------
function initMap() {

    if(lat == "" || lon == "") {
        return;
    }
    var location = {lat: lat,lng: lon}
    var map = new google.maps.Map(document.querySelector("#map"),{
        zoom: 18, center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

// ---------------------------GEOLOCATION-----------------------------------------

var lat;
var lon;
function getLocation() {
    // const message = document.querySelector("#message");
    // check if the Geolocation API is supported
    if (!navigator.geolocation) {
        // message.textContent = `Your browser doesn't support Geolocation`;
        // message.classList.add('error');
        return null;
    }
    // get the current position
    navigator.geolocation.getCurrentPosition((pos)=>{
        console.log(pos);
        lat = +pos.coords.latitude;
        lon = +pos.coords.longitude;
        console.log("latitude -> "+lat);
        console.log("longitude -> "+lon);
    });
}

//--------------------------------------------------------------------------