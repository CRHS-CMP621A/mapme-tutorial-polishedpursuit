
navigator.geolocation.getCurrentPosition(
    function (position) {
        console.log(position);
        // console.log(position);
        const latitude = position.coords.latitude;
        const longtitude = position.coords.longitude;
        console.log(`https://www.google.com/maps/@${latitude},${longtitude},15z`);
        const longitude = position.coords.longitude;
        const coords= [latitude, longitude]

        var map = L.map('map').setView(coords, 13);

        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker(coords).addTo(map)
            .bindPopup('A pretty CSS popup.<br> Easily customizable.')
            .openPopup();
    },
    function() {
        alert("Could not get postion.");
    }
)

