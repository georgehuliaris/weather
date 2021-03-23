$(document).ready(function() {

    // get location of user 
    navigator.geolocation.getCurrentPosition(success, error);
// if user location is accessed
    function success(pos) {
        var lat = pos.coords.latitude;
        var long = pos.coords.longitude;
        weather(lat, long)
    }
// if user location unsuccessful
    function error() {
        console.log("error");
    }

    function weather(lat, long) {
        var URL = "https://api.openweathermap.org/data/2.5/weather?q=houston&appid=7d110956aa512dec539ae86b6c7a578f";

        $.getJSON(URL, function(data) { 
            console.log(data)
            updateDOM(data);
        });
    }

    function updateDOM(data) {

        var city = data.name;
        var temp = Math.round(data.main.temp);
        var desc = data.weather[0].description;
        var icon = data.weather[0].icon;

        $("#city").html(city)
        $("#temp").html(temp);
        $("#desc").html(desc); 
        $("icon").attr("src", icon);
    }

});
