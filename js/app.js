var pfApiKey = 'hoxfe17CJiTbWmobl1EoByfn5PBmuon4tnV2xHc2sKXahYP3FG' 
var pfSecretApiKey = '9MQ1EbHmO4Ew0mh9DbQduwBqONHPw610qvzwEWBd'

let result;

var pf = new petfinder.Client({apiKey: pfApiKey, secret: pfSecretApiKey});

function animalSearch(filter) {

pf.animal.search(filter)

    .then(function (response) {
        let Newvar = response.data.animals.filter(animal => {
           return animal.photos.length > 0
        });
        $('#photoGrid').empty();
        for(var i = 0; i < 5; i++){
            console.log(Newvar)
            let animalDiv = $('<div>');
            animalDiv.attr('id', 'animalDiv' + [i]);
            animalDiv.addClass('animal-div');
            $('#photoGrid').append(animalDiv);

            let animalImg = $('<img>');
            animalImg.addClass('animal-img');
            animalImg.attr('id', 'animal' + [i]);
            animalImg.attr('src', Newvar[i].photos[0].small);

            let animalName = $('<p>');
            animalName.addClass('animal-info animal-name');
            animalName.text('Name: ' + Newvar[i].name);

            let animalAge = $('<p>');
            animalAge.addClass('animal-info  animal-age');
            animalAge.text('Age: ' + Newvar[i].age);

            let contactInfo = $('<div>');
            contactInfo.addClass('contact-info');
            contactInfo.attr('id', 'contactDiv' + [i]);
            
            let phoneNumber = $('<p>');
            phoneNumber.addClass('animal-info  phone-number');
            phoneNumber.text(Newvar[i].contact.phone);

            let email = $('<p>');
            email.addClass('animal-info  email');
            email.text(Newvar[i].contact.email);

            $('#animalDiv' + [i]).append(animalImg, animalName, animalAge, contactInfo);
            $('#contactDiv' + [i]).append(phoneNumber, email);
        }
 
        if(Newvar.length > 0) {
         //appendPhoto(Newvar[Math.floor(Math.random() * 10)].photos[0].large);
        } else {
            alert('no photo');
        }
        // Do something with `response.data.animals`
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