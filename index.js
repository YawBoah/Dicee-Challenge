//Randomizing of the first imaage
var randomNumber1 = Math.floor(Math.random()*6) + 1; //Randoming the numbers 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // Randoming the images

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

