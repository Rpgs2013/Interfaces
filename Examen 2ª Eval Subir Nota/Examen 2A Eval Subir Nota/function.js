// A $( document ).ready() block.
$(document).ready(function () {
    $('#menu_on').click(function () {
        $('body').toggleClass('visible_menu');
    })
});

function mostrarAyuda() {
    document.getElementById('ayuda').style.visibility = "visible";
}

function ocultarAyuda() {
    document.getElementById('ayuda').style.visibility = "hidden";
}




var app = document.getElementById('app');

var request = new XMLHttpRequest();

request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

request.onload = function () {

    var posts = JSON.parse(this.response);

    posts.forEach(function (post, i) {
        if (i < 9)
            displayPost(post);
    });
}

request.send();




function displayPost(post) {

    var card = document.createElement('div');
    card.classList.add('card');

    var title = document.createElement('h3');
    title.textContent = post.title.substring(0, 50).concat('...');

    var body = document.createElement('p');
    body.textContent = post.body.substring(0, 200).concat('...');

    var imagen = document.createElement('img');
    imagen.src = "media/run.jpg";
    imagen.id = "img_uno";

    card.appendChild(imagen);
    card.append(title);
    card.append(body);

    app.append(card);

}


