var app = document.getElementById('JSON');



// Create a request object with JavaScript native XMLHttpRequest Object
var request = new XMLHttpRequest();

// make the new connection, using the GET Request on the URL Endpoint
request.open('GET' , 'https://jsonplaceholder.typicode.com/posts', true);

// Accept response from the API
request.onload = function(){
  
  // Parse the JSON String to a JavaScript Object
  var posts = JSON.parse(this.response);
  
  // Ittrate through first 9 posts 
  posts.forEach(function(post , i){
    if(i<9)
      displayPost(post);  // display the post
  });  
}

// Send request
request.open('GET' , 'https://jsonplaceholder.typicode.com/posts', true);
request.send();




function displayPost(post){
  
  // create a HTML "div" Element and add Card class to it
  var card = document.createElement('div');
  card.classList.add('card');
  
  // Create h2 tag and set it's text content to the post's title
  var title = document.createElement('h2');
  title.textContent = post.title.substring(0, 50).concat('...');
  
  // create p tag and set it's text content to the post's body;
  var body = document.createElement('p');
  body.textContent = post.body.substring(0, 200).concat('...');
  var boton=document.createElement('button');
    boton.textContent="Ver mas informacion";
  // append the title and body to card
  card.append(title);
  card.append(body);
  card.append(boton);
  
  // Display the card by appending it to our app element
  app.append(card);
  
}
