const animalSelect = document.querySelector('.farm');

animalSelect.addEventListener('click', playSound);

function playSound(e){
  if(e.target.className === 'animal'){
    console.log('click');
  }
}
