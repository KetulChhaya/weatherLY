$(document).ready(function() {
    // alert("The Page has Loaded");
    $("#searchInput").on("keyup", function(e) {
        // console.log(e.target.value);
        let cityName = e.target.value;
        const apiKey = "bca9dee0f031789bea0b76d0992d0870";

        //make a request to the server
        $.ajax({
            url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`,

            
        }).done(function(weatherdata) {
            // console.log(weatherdata);

            $("#profile").html(`
            
            <div class="row"> 
                <div class="card" style="width: 18rem;">
                    <img src="http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png" class="card-img-top" alt="Weather_Icon">
                    <div class="card-body">
                        <h4 class="card-title ">${cityName.toUpperCase()}</h4>
                        <h5 class="card-title">${weatherdata.weather[0].description}</h5>
                        <p class="card-text">Temperature : <strong>${weatherdata.main.temp}&#8451</strong> </p>
                        <p class="card-text">Humidity : <strong>${weatherdata.main.humidity} %</strong></p>
                        <p class="card-text">Wind Speed : <strong>${weatherdata.wind.speed} m/s</strong></p>
                        <a href="https://www.google.com/search?q=${cityName}" class="btn btn-primary">Learn More about <strong>${cityName.toUpperCase()}</strong></a>
                    </div>
                </div>
            </div>
            
            `);
        });

    });
})