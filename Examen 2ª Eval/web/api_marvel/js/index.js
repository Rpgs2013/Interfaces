//https://gateway.marvel.com/v1/public/comics

//PUBLIC KEY => 8beed1a6d64c8dc6a25b5574928bfa85

//PRIVATE KEY => e90ffb41beb176377263a0a122a1924725edff12

//<- HASH ->
//    1 + PUBLIC_KEY + PRIVATE_KEY GENERADA CON BLOWFISH:
//        $2y$10$UFVHdGwYp6DvbpVrnBAhvu6Y9/n5Ngzt3UkCr9/V4FLJv9KR6g592


//URL CON MI HASH
//https://gateway.marvel.com:443/v1/public/characters?name=thor&apikey=$2y$10$UFVHdGwYp6DvbpVrnBAhvu6Y9/n5Ngzt3UkCr9/V4FLJv9KR6g592

//MI CLAVE 1+PRIVATE_KEY+PUBLIC_KEY
//    1e90ffb41beb176377263a0a122a1924725edff128beed1a6d64c8dc6a25b5574928bfa85



$(function(){
var marvelAPI = 'https://gateway.marvel.com/v1/public/comics';
//var marvelAPI = 'https://gateway.marvel.com:443/v1/public/characters?name=thor&apikey=$2y$10$UFVHdGwYp6DvbpVrnBAhvu6Y9/n5Ngzt3UkCr9/V4FLJv9KR6g592';
$.getJSON( marvelAPI, {
    apikey: "a5837db97d72016c81a7a776f4240db9",
  ts: "1",
  hash: "56e8c7c3ce1e8b6fbf21380cb44d5e0d",
  })
    .done(function( response ) {
      var results = response.data.results;
      var resultsLen = results.length;
      var output = '<ul>'; 
      
      for(var i=0; i<resultsLen; i++){
        if(results[i].images.length > 0) {
          var imgPath = results[i].images[0].path + '/standard_xlarge.' + results[i].images[0].extension;
          output += '<li><img src="' + imgPath + '"><br>'+results[i].title+'</li>';
        }
      }  
      output += '</ul>'
      $('#results').append(output);
  });
   
});