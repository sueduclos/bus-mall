'use strict';

/////////////GLOBAL VARIABLES///////////////////
var picOne = document.getElementById('pictureOne');
var picTwo = document.getElementById('pictureTwo');
var picThree = document.getElementById('pictureThree');
var heading = document.getElementById('round');
var picContainer = document.getElementById('image-container');
var picArray = [];
var picArrayContainer  = [picOne, picTwo, picThree];
var previousPictures = [];
var rounds = 25;
var titleArray =[];
var clickArray = [];
var viewArray = [];

/////////////CONSTRUCTOR////////////////////////
function Picture(src, name) {
  this.src = `../img/${src}.jpg`;
  this.title = name;
  this.alt = name;
  this.clicked = 0;
  this.viewed = 0;

  picArray.push(this);
}
///////////HELPER FUNCTION//////////////////////
function randomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

///////////THIS CAN BE DRYER////////////////////
function generateImages() {
  var currentPictures = [];
  for(var i = 0; i < picArrayContainer.length; i++) {
    var newIndex = randomIndex(picArray.length);
    while(currentPictures.includes(newIndex) || previousPictures.includes(newIndex)) {
      newIndex = randomIndex(picArray.length);
    }
    currentPictures.push(newIndex);

    picArrayContainer[i].src = picArray[newIndex].src;
    picArrayContainer[i].title = picArray[newIndex].title;
    picArrayContainer[i].alt = picArray[newIndex].alt;

    picArray[newIndex].viewed++;
  }
}

function handleClick(event) {
  var vote = event.target.title;
  console.log(vote, 'was clicked');
  for(var i = 0; i < picArray.length; i++) {
    if(vote === picArray[i].title) {
      picArray[i].clicked++;
    }
  }
  rounds--;


  generateImages();
}
//////////////Instantiations///////////////////////
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
picContainer.addEventListener('click', handleClick);
generateImages();
console.table(picArray);
