var ctx = document.getElementById('myChart').getContext('2d');

var request = new XMLHttpRequest();

// make the new connection, using the GET Request on the URL Endpoint
request.open('GET' , 'https://jsonplaceholder.typicode.com/posts', true);

var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['User 1', 'User 2', 'User 3', 'User 4', 'User 5', 'User 6', 'User 7','User 8','User 9','User 10'],
        datasets: [{
            label: 'Grafica estadística de cuantos cards tiene cada usuario',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [1, 2, 3, 4, 5, 6,7,8,9,10]
        }]
    },

    // Configuration options go here
    options: {}
});