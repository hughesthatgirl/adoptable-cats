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

    .then(function (filter) {
        $('.searchCriteria').on('click', appendPhoto);
        if(filter.data.animals[0].photos.length === 0) {
            alert('no photo')
        }
        function appendPhoto(){
            let petImg = $('<img>');
            let imgURL = filter.data.animals[0].photos[0].medium;
            console.log(imgURL);
            petImg.attr('src', imgURL);
            $('#photoGrid').append(petImg);
        }
        // Do something with `response.data.animals`
        console.log(filter.data.animals[0])
        console.log(filter);
        console.log(imgURl);
    })
    .catch(function (error) {
        // Handle the error
    });
}
// What do we want to search for? cats,dogs?
 animalSearch ({
    species: 'cat'  
})
// 