const animalSelect = document.querySelector('.farm');

animalSelect.addEventListener('click', playSound);

function playSound(e){
  if(e.target.classList.contains('dog')){
    var audio = document.querySelector('#dog');
    audio.currentTime = 0;
    audio.play();
  } else if(e.target.classList.contains('cat')){
    var audio = document.querySelector('#cat');
    audio.currentTime = 0;
    audio.play();
  } else if(e.target.classList.contains('chicken')){
    var audio = document.querySelector('#chicken');
    audio.currentTime = 0;
    audio.play();
  } else if(e.target.classList.contains('cow')){
    var audio = document.querySelector('#cow');
    audio.currentTime = 0;
    audio.play();
  } else if(e.target.classList.contains('duck')){
    var audio = document.querySelector('#duck');
    audio.currentTime = 0;
    audio.play();
  } else if(e.target.classList.contains('goat')){
    var audio = document.querySelector('#goat');
    audio.currentTime = 0;
    audio.play();
  } else if(e.target.classList.contains('horse')){
    var audio = document.querySelector('#horse');
    audio.currentTime = 0;
    audio.play();
  } else if(e.target.classList.contains('pig')){
    var audio = document.querySelector('#pig');
    audio.currentTime = 0;
    audio.play();
  } else if(e.target.classList.contains('rooster')){
    var audio = document.querySelector('#rooster');
    audio.currentTime = 0;
    audio.play();
  } else if(e.target.classList.contains('sheep')){
    var audio = document.querySelector('#sheep');
    audio.currentTime = 0;
    audio.play();
  } 
};

// Animation on the images on click

document.body.addEventListener('click', addTransition);

function addTransition(e){
  if(e.target.classList.contains('animal')){
    e.target.classList.add('playing');
  }
};

const animals = document.querySelectorAll('.animal');
 animals.forEach(animal => animal.addEventListener('transitionend', removeTransition));

 function removeTransition(e){
   if(e.propertyName !== 'transform') return // skip it is not transform
   this.classList.remove('playing');
 }



   