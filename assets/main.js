function initMap() {
    var location = {lat:-18.901014,lng:-48.262744}
    var map = new google.maps.Map(document.querySelector(".map"),{
        zoom: 3, center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

