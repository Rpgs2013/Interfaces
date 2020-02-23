function pintarMapa(){
  navigator.geolocation.getCurrentPosition(function(location) {
      var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
    
      var mymap = L.map('mapid').setView(latlng, 13)
      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiYmJyb29rMTU0IiwiYSI6ImNpcXN3dnJrdDAwMGNmd250bjhvZXpnbWsifQ.Nf9Zkfchos577IanoKMoYQ'
      }).addTo(mymap);
    
      var marker = L.marker(latlng).addTo(mymap);

      mymap.on('click', function(e) {
        marker.setLatLng(e.latlng);
        leerTiempo(e.latlng.lat, e.latlng.lng);
      })
    });
  }

  function leerTiempo(lat, lon){
    var url = 'http://api.openweathermap.org/data/2.5/forecast?lat='+lat+ "&lon="+lon+'&units=metric&appid=a4558e6546b015124e216b2e35b48824';
    
    fetch(url)
        .then(function(response){
        return response.json();
    
    })
    
    .then(function (myJson){
        console.log(myJson);
         //alert(myJson.cnt);
        // alert(myJson.list[0].dt_txt+"  "+myJson.list[1].main.temp)
       // jsonp = Json.parse(myJson);
        var iconPhat = "http://openweathermap.org/img/wn/";
        var datos= [];
        var etiquetas =[];
    
        iconos.innerHTML ="";
        for(var i = 0; i< myJson.cnt ; i++){
           
            datos.push(myJson.list[i].main.temp);
            etiquetas.push(myJson.list[i].dt_txt);
            iconos.innerHTML += "<img src= '" + iconPhat + myJson.list[i].weather[0].icon + ".png' />"
        }
    
    
    
        //grafico crear charjs
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: etiquetas,
            datasets: [{
                label: 'Temperatura ºC',
                data: datos,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    });
    
    }