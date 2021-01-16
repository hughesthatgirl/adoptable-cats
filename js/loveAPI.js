// 1    peanut butter jelly N
// 2    bird seed
// 3    bootcamp spot
// 4    a b

// Get DOM Variables

const userBox = document.querySelector('.user');            // heading and pet image  
const headline = document.querySelector('.headline');       // title
const firstInput = document.querySelector('.input-1');      // adoptee first name
const lastInput = document.querySelector('.input-2');       // pet name input
const tagline = document.querySelector('.tagline');         // page description
const submitButton = document.querySelector('.submitBtn');  // Results button
const inputBox = document.querySelector('.input-box');      // DIV that holds first name and pet name
const resultDiv = document.getElementById('results');       // DIV that holds results
const message = document.querySelector('.message-1');       // message heading
const formalMessage = document.querySelector('.message');   // message body
const userName = document.querySelector('.messageBody');


// Add event listener to the button for click and/or enter key
submitButton.addEventListener('click', fromUI);

document.addEventListener('keypress', function (e) {

    if (e.keyCode === 13) {
        fromUI();
    }
})

// fromUI function
function fromUI() {

    // get values
    const firstName = firstInput.value.toString();
    const petName = lastInput.value.toString();

    //hide values
    userBox.style.display = 'none';
    tagline.style.display = 'none';
    inputBox.style.display = 'none';
    resultDiv.style.display = 'block'

    //validation if not blank
    if (firstName !== '' && petName !== '') {

        dataAPI(firstName, petName);
    }
}

// API
function dataAPI(firstName, petName) {
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${firstName}&sname=${petName}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "love-calculator.p.rapidapi.com",
                "x-rapidapi-key": "e9ee3480abmsh8316a7d6c5faaa1p1e4cfejsnf1e116733a70"
            }
        })
        .then(response => {
            return response.json();
        }).then(result => {
            dataUI(result);
        })
        .catch(err => {
            showError(err);
        });
}

//Take data from UI to figure out percentages
function dataUI(result) {

    const percentage = result.percentage;


    if (percentage > 75) {
        message.textContent = `Hell Yeah!!!, ${result.fname}`;
        formalMessage.innerHTML = `${result.fname}, this pet ${result.sname} is a perfect match <span> ${result.percentage}% </span> This pet is meant to complete your life! Take it home!`;

    } else if (percentage > 40 && percentage <= 75) {
        message.textContent = `Worth Considering!`;
        formalMessage.innerHTML = `${result.sname} is a <span> ${result.percentage}% </span> match!. There is some serious potential in the works. You could rest easy knowing your love will smother a pet worthy of you.`;

    } else if (percentage > 25 && percentage <= 40) {
        message.textContent = `Well, we see a problem here.`;
        formalMessage.innerHTML = `${result.sname} is a <span> ${result.percentage}% </span> match.  What this means to you is, we have very little faith you will be happy. Although, we understand the choice is yours. There is a  potential for most severe unhappiness if you shall continue this process, with this animal. Don't say we did not warn you. Buyer beware!`;

    } else {
        message.textContent = `WATCH OUT!`;
        formalMessage.innerHTML = `${result.sname} is a  <span> ${result.percentage}% </span> match. Seriously ${result.fname}, this animal most definitely should not be your pet! We urge you to search again for happiness! Please forget ${result.sname} is up for adoption. Don't be sad, there is a someone out there for ${result.sname}. Thank you come again!`;
    }
    // creating a reset button
let resetButton = $("<button>")
resetButton.attr("id","resetBtn")
resetButton.text("RESET")

$(".message").append(resetButton)

$("#resetBtn").on("click", clearData)
    
}


//Entry error
function showError(error) {
    resultDiv.style.color = 'red';
    message.textContent = `Hey,${firstName.value}`;
    formalMessage.innerHTML = `You did something wrong.`;

    setTimeout(() => {
        clearData();
    }, 3000);
}

// Clears data

function clearData() {
    var img = document.querySelector(".pet_img");

    resultDiv.style.display = 'none';
    userBox.style.display = 'block';
    tagline.style.display = 'block';
    inputBox.style.display = 'block';
    img.src= "";
    img.style.display = 'none';
    firstInput.value = '';
    lastInput.value = '';
    message.textContent = ``;
    formalMessage.textContent = ``;
    resultDiv.style.color = '';
}