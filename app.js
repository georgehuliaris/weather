$(document).ready(function() {

    function weather() {
        var URL = "api.openweathermap.org/data/2.5/weather?q={city name}&appid=7d110956aa512dec539ae86b6c7a578f";

        $.getJSON(URL, function(data) { 
            console.log(data)
            updateDOM(data);
        });
    }

    weather();

    function updateDOM(data) {

        var city = data.name;
        var temp = Math.round(data.main.temp);
        var desc = data.weather[0].description;

        $("#city").html(city)
        $("#temp").html(temp);
        $("#desc").html(desc)
        $("icon").attr("src", icon);
    }

});

