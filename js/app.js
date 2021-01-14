// What is first?
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

// Declare Variables
var pfApiKey = 'hoxfe17CJiTbWmobl1EoByfn5PBmuon4tnV2xHc2sKXahYP3FG' 
var pfSecretApiKey = '9MQ1EbHmO4Ew0mh9DbQduwBqONHPw610qvzwEWBd'

let result;

var pf = new petfinder.Client({apiKey: pfApiKey, secret: pfSecretApiKey});

function animalSearch(filter) {

pf.animal.search(filter)

    .then(function (response) {
        let Newvar = response.data.animals.filter(animal => {
           return animal.photos.length > 0;
        });

        //Get the animal.photos array
        //Loop through the array
        //Create a div for each item
        //Create an img tag for each item
        //append img tag to the div for each item

        Newvar.forEach(function(index){
            var grid = document.querySelector('#photoGrid');
            var div = document.createElement('div');
            var img = document.createElement('img');
            var info = document.createElement('div');

            div.id = 'column' + index;
            img.id = 'photo' + index;
            img.setAttribute('src', '')//whatever the URL is

            div.appendChild(img, info);
            grid.appendChild(div);

        })

        if(Newvar.length > 0) {
         appendPhoto(Newvar[Math.floor(Math.random() * 10)].photos[0].large);
        } else {
            alert('no photo');
        }
        // Do something with `response.data.animals`
        //console.log(Newvar);
        //console.log(response.data.animals);
        //console.log(imgURl);

        // Pet information
    })
    .catch(function (error) {
        // Handle the error
    });
}
function randomCat(){
    let ranCat = Math.floor(Math.random() * 10);
    console.log(ranCat);
}
randomCat();
// What do we want to search for? cats,dogs?
$('#showCriteria').on('click', function(){
    animalSearch ({
        type: 'cat', 
        limit: 50
    })
})
function appendPhoto(imgURL){
    $('#photoGrid').empty();
    let petImg = $('<img>');
    //console.log(imgURL);
    petImg.attr('src', imgURL);
    $('#photoGrid').append(petImg);
}

// 