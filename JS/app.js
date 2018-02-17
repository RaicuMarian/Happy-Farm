const animalSelect = document.querySelector('.farm');

animalSelect.addEventListener('click', playSound);

function playSound(e){
  if(e.target.className === 'animal dog'){
    var audio = document.querySelector('#dog');
    audio.currentTime = 0;
    audio.play();

  } else if(e.target.className === 'animal cat'){
    var audio = document.querySelector('#cat');
    audio.currentTime = 0;
    audio.play();
  } 
  else if(e.target.className === 'animal chicken'){
    var audio = document.querySelector('#chicken');
    audio.currentTime = 0;
    audio.play();
  } else if(e.target.className === 'animal cow'){
    var audio = document.querySelector('#cow');
    audio.currentTime = 0;
    audio.play();
  } else if(e.target.className === 'animal duck'){
    var audio = document.querySelector('#duck');
    audio.currentTime = 0;
    audio.play();
  } else if(e.target.className === 'animal goat'){
    var audio = document.querySelector('#goat');
    audio.currentTime = 0;
    audio.play();
  } else if(e.target.className === 'animal horse'){
    var audio = document.querySelector('#horse');
    audio.currentTime = 0;
    audio.play();
  } else if(e.target.className === 'animal pig'){
    var audio = document.querySelector('#pig');
    audio.currentTime = 0;
    audio.play();
  } else if(e.target.className === 'animal rooster'){
    var audio = document.querySelector('#rooster');
    audio.currentTime = 0;
    audio.play();
  } else if(e.target.className === 'animal sheep'){
    var audio = document.querySelector('#sheep');
    audio.currentTime = 0;
    audio.play();
  } 



};