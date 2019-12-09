'use strict';

/////////////GLOBAL VARIABLES///////////////////
var picOne = document.getElementById('pictureOne');
var picTwo = document.getElementById('pictureTwo');
var picThree = document.getElementById('pictureThree');
var picContainer = document.getElementById('image-container');
var picArray = [];
var tallyOfVotes = 0;

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
  var index = randomIndex(picArray.length);
  picOne.src = picArray[index].src;
  picOne.title = picArray[index].title;
  picOne.alt = picArray[index].alt;
  picArray[index].viewed++;

  var indexTwo = randomIndex(picArray.length);
  while(indexTwo === index) {
    indexTwo = randomIndex(picArray.length);
  }
  picTwo.src = picArray[indexTwo].src;
  picTwo.title = picArray[indexTwo].title;
  picTwo.alt = picArray[indexTwo].alt;
  picArray[index].viewed++;

  var indexThree = randomIndex(picArray.length);
  while(indexThree === indexTwo || indexThree === index) {
    indexThree = randomIndex(picArray.length);
  }
  picThree.src = picArray[indexThree].src;
  picThree.title = picArray[indexThree].title;
  picThree.alt = picArray[indexThree].alt;
  picArray[index].viewed++;

  console.table(picArray);
}

function handleClick(event) {
  var vote = event.target.title;
  console.log(vote, 'was clicked');
  for(var i = 0; i < picArray.length; i++) {
    if(vote === picArray[i].title) {
      picArray[i].clicked++;
      tallyOfVotes++;
    }
  }

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
