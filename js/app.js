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

function hide(elem) {
  elem.style.display = 'none';
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
  previousPictures = currentPictures;
}

function handleClick(event) {
  var vote = event.target.title;
  for(var i = 0; i < picArray.length; i++) {
    if(vote === picArray[i].title) {
      picArray[i].clicked++;
    }
  }
  rounds--;
  heading.textContent = `Round ${rounds} left!`;
  generateImages();

  if(rounds === 0) {
    hide(picContainer);
    saveVote();
    graph();
  }
}

//////////////LOCAL STORAGE/////////////////
function saveVote () {
  var stringData = JSON.stringify(picArray);
  localStorage.setItem('item', stringData);
}

function retrieveVote() {
  var getData = localStorage.getItem('item');
  var parseData = JSON.parse(getData);
  if (parseData !== null) {
    for (var i = 0; i < picArray.length; i++) {
      picArray[i].clicked += parseData[i].clicked;
      picArray[i].viewed += parseData[i].viewed;
    }
  }
}


/////////////////GRAPH//////////////////////
//CREDIT TO Chart.Js

function createAxis() {
  for (var i = 0; i < picArray.length; i++) {
    titleArray.push(picArray[i].title);
    clickArray.push(picArray[i].clicked);
    viewArray.push(picArray[i].viewed);
  }
}

function graph() {
  createAxis();
  Chart.defaults.global.defaultFontColor = 'white';
  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: titleArray,
      datasets: [{
        label: 'Voted',
        backgroundColor: 'black',
        borderColor: 'black',
        data: clickArray,
      },
      {
        label: 'Viewed',
        backgroundColor: 'gray',
        borderColor: 'gray',
        data: viewArray,
      },
      ],
    },
    
  });
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
retrieveVote();
generateImages();
heading.textContent = `Round ${rounds} left!`;

