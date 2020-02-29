$(function(){
    var ts=new Date().getTime();
    var hash = CryptoJS.MD5(ts+"0ed6aae8f9095417157a13d271849a26fda646bb"+"3f55c3cd73fb374bc7de9841751db044");

    
    $.getJSON( 'https://gateway.marvel.com:443/v1/public/characters?name=thor&ts='+ts+'&apikey=3f55c3cd73fb374bc7de9841751db044&hash='+hash)
    .done(function( response ) {
        var results = response.data.results[0];
        var t="<h1>"+results.name+"</h1>";
        t+= "<img src="+results.thumbnail.path+"."+results.thumbnail.extension+" alt='imagen de'"+results.name+">";
        t+="<p>"+results.description+"</p>"
        $(".info").html(t);
        t="";
        $(".comics").html("<h2>Comics de "+results.name+"</h2>");
        for(var i=0;i<results.comics.items.length;i++){
            
            $.getJSON( results.comics.items[i].resourceURI+'?&ts='+ts+'&apikey=3f55c3cd73fb374bc7de9841751db044&hash='+hash)
            .done(function( response2 ) {
                var results2 = response2.data.results[0];
                t+="<h3>"+results2.title+"</h3>";
                t+= "<img src="+results2.thumbnail.path+"."+results.thumbnail.extension+" alt='imagen de'"+results2.title+">";
                $(".comics").html(t);
            });
        }
    });

    });
