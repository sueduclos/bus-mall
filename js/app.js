'use strict';
console.log('proof of life');
//DISPLAY THREE UNIQUE PRODUCTS BY CHANCE
//CREATE AN ALGORITHM RANDOMLY GENERATES THREE UNIQUE PRODUCT IMAGES
//ATTACH AN EVENT LISTENER TO THE SECTION OF THE HTML PAGE WHERE IMAGES ARE GOING TO BE DISPLAYED
//USER CLICKS A PRODUCT, GENERATE THREE NEW PRODUCTS FOR THE USER TO PICK FROM

/////////////GLOBAL VARIABLES///////////////////
var picOne = document.getElementById('pictureOne');
var picTwo = document.getElementById('pictureTwo');
var picThree = document.getElementById('pictureThree');

var picArray = [];
////////////DISPLAY 3 IMAGES TO THE PAGE////////
//image tag has three properties 'src', 'title, and 'alt'

// picOne.src = '../img/bag.jpg';
// picOne.title = 'Star Wars rolling suitcase';
// picOne.alt = 'Star Wars rolling suitcase';

// picTwo.src = '../img/banana.jpg';
// picTwo.title = 'Banana slicer';
// picTwo.alt = 'Banana slicer';

// picThree.src = '../img/bathroom.jpg';
// picThree.title = 'Bathroom iPad holder';
// picThree.alt = 'Bathroom iPad holder';


/////////////CONSTRUCTOR////////////////////////
function Picture(src, name) {
  this.src = `../img/${src}.jpg`;
  this.title = name;
  this.alt = name;

  picArray.push(this);
}
///////////HELPER FUNCTION//////////////////////
function randomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function generateImages() {
  var index = randomIndex(picArray.length - 1);
  var indexTwo = randomIndex(picArray.length - 1);
  console.log(index, indexTwo);
  
}









/////////////FUNCTIONS/METHODS//////////////////
function createOnPageLoad() {
  new Picture ('bag', 'Star Wars rolling suitcase');
  new Picture ('banana', 'Banana Slicer');
  new Picture ('bathroom', 'Bathroom iPad holder');
  new Picture ('boots', 'Rainboots');
  new Picture ('breakfast', 'Breakfast Machine');
  new Picture ('bubblegum', 'Meatball Bubblegum');
  new Picture ('chair', 'Red Chair');
  new Picture ('cthulhu', 'Cthulhu');
  new Picture ('dog-duck', 'Ducky Dog');
  new Picture ('dragon', 'Dragon Meat');
  new Picture ('pen', 'Utensil Pen');
  new Picture ('pet-sweep', 'Pet Sweep');
  new Picture ('scissors', 'Pizza Scissors');
  new Picture ('shark', 'Shark Sleeping Bag');
  new Picture ('sweep', 'Sweep Baby');
  new Picture ('tauntaun', 'Tauntaun Sleeping Bag');
  new Picture ('unicorn', 'Unicorn Meat');
  new Picture ('usb', 'Tentacle USB');
  new Picture ('water-can', 'Crooked Watering Can');
  new Picture ('wine-glass', 'Fancy Wine Glass');

}
createOnPageLoad();
generateImages();
console.table(picArray);












////////////INSTANTIATIONS//////////////////////
