function playAudio(e){
    const pressedKey = document.querySelector(`div[data-key=${e.code}]`); 
    const pressedKeyAudio = document.querySelector(`audio[data-key=${e.code}]`); 
    if(!pressedKeyAudio){
        return
    }else{
        pressedKey.classList.add('playing');
        pressedKeyAudio.currentTime = 0;
        pressedKeyAudio.play();
    }   
}

function removeClass(e){
    if(e.propertyName !== 'transform') return;    
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key'); 

keys.forEach(function(key){      
    key.addEventListener('transitionend', removeClass);
});

document.addEventListener('keydown', playAudio);