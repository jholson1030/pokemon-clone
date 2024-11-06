const battleBackgroundImage = new Image();

battleBackgroundImage.src = './img/battleBackground.png';
const battleBackground = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    image: battleBackgroundImage
})

const draggleImage = new Image();
draggleImage.src = './img/draggleSprite.png';
const draggle= new Sprite({
    position: {
        x: 800,
        y: 100
    },
    image: draggleImage,
    frames: {
        max: 4,
        hold: 30
    },
    animate: true,
    isEnemy: true,
    spriteName: 'Draggle'
});

const embyImage = new Image();
embyImage.src = './img/embySprite.png';
const playerCharacter = new Sprite({
    position: {
        x: 275,
        y: 330
    },
    image: player.sprites.up,
    frames: {
        max: 4,
        hold: 30
    },
    animate: true,
    spriteName: 'PlayerCharacter'

});

const renderedSprites = [draggle, playerCharacter];

function animateBattle() {
    window.requestAnimationFrame(animateBattle);
    battleBackground.draw();

    renderedSprites.forEach(sprite => {
        sprite.draw();
    })
}

animateBattle();

// Event listeners for attacks 
document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', (e) => {
        const selectedAttack = attacks[e.currentTarget.innerHTML]
        playerCharacter.attack({
            attack: selectedAttack,
            recipient: draggle,
            renderedSprites
        }) 
    });
});

const dialougeBox = document.querySelector('#dialougeBox');
if (dialougeBox) {
    dialougeBox.addEventListener('click', () => {
        console.log('clicked dialouge');
    });
} else {
    console.log('dialouge not found');
}