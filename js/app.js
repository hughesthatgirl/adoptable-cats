// What is first?

// Declare Variables
var pfApiKey = 'hoxfe17CJiTbWmobl1EoByfn5PBmuon4tnV2xHc2sKXahYP3FG'
var pfSecretApiKey = '9MQ1EbHmO4Ew0mh9DbQduwBqONHPw610qvzwEWBd'

// Geolocation search box
// Need a function grab/store user input value; and return the value
    // input button
    //Add click event to button to:
        //update response URL with new location information
        //update sidebar images with new images

//SIDE BAR TASKS
// "catSideBar", Petfinder API
// "dogSideBar", Petfinder API
// Make API Call (Ajax)
// Log the response data
// Get Pet Images based on GeoLocation
// Display Pet Images in each sidebar
    //Create and append img tags for each image
    //Create and append any other tags for showing like age, breed, etc

//RANDOM PHOTO TASKS
// Random Pet Image, ????? API
// Make API Call (Ajax)
// Log response data
// Display random image inside of #randomPhoto div
// Add click event listener to button to run function to display and append the random image


var catUrl = "https://api.petfinder.com/v2/animals"
let result;
// var catUrl = 'https://api.petfinder.com/pet.getRandom'

var pf = new petfinder.Client({apiKey: pfApiKey, secret: pfSecretApiKey});

function animalSearch(filter) {

pf.animal.search(filter)

    .then(function (response) {
        // Do something with `response.data.animals`
        console.log(response.data.animals)
        result= response.data.animals
    })
    .catch(function (error) {
        // Handle the error
    });
}
// What do we want to search for? cats,dogs?
 animalSearch ({
    breed: 'Domestic Short Hair',
    size: 'large'
    
})
// $.ajax({
//     url: catUrl,
//     method: "GET",
//     headers: {"Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJob3hmZTE3Q0ppVGJXbW9ibDFFb0J5Zm41UEJtdW9uNHRuVjJ4SGMyc0tYYWhZUDNGRyIsImp0aSI6IjViMzcxMDA5YjQyNjI4Y2NkYjIwMThhOGUzN2RmZjFkMGFhNjM4NGU0NzdiNDMzMGIzMTU0YTgzZjYyOTc0YWRkOGVjYjU3NWIxOTMzMGNmIiwiaWF0IjoxNjEwMjExNzQwLCJuYmYiOjE2MTAyMTE3NDAsImV4cCI6MTYxMDIxNTM0MCwic3ViIjoiIiwic2NvcGVzIjpbXX0.ZwufbzPACyoPK_p7RVqrCnh6JYRlW-HN0IJiEyxcntnDEhaWo7DIITYdyKcyOhjZ5lYcpgD9mOoCRM8sR7ECLLsPEiI5lGlDZ5yLD5vLaZyCdfVNXAQgMBp3R_48HGJstymubpjhKlGsNB-0LGqa7VhEvArTgcQXB99SlkUSSuWSghYm0Bcf9QJwsLVjmuumwO8xiRwGkifHvhFdzZWpZVKtyfarimCQ9bznXNc5HzbfQLnDlgWgAWZQCgWJAO_S6Xs1ZLBt1myQdW9yYH4ZmAT62L-00LpkyeAJT149yLq5EO4II_k60lhWCmelNo3V1Xvz6ydyPwM2bQwd4Yo1EA"}
//   })

//   .then(function(response){
//       console.log(response)
//   })

  
// $.ajax({
//     url: catUrl,
//     jsonp: "callback",
//     dataType: "jsonp",
//     data: {
//         key: pfApiKey,
//         animal: 'cat',
//         'location': 44060,
//         output: 'basic',
//         format: 'json'
//     }
//   })

//   .then(function(response){
//       console.log(response)
//   })