const battleBackgroundImage = new Image();

battleBackgroundImage.src = './img/battleBackground.png';
const battleBackground = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    image: battleBackgroundImage
})


const draggle= new Sprite(monsters.Draggle);

const emby = new Sprite(monsters.Emby);

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

const button = document.createElement('button');
button.innerHTML = 'Fireball';
document.querySelector('#attacksBox').append(button);

const renderedSprites = [draggle, playerCharacter];



function animateBattle() {
    window.requestAnimationFrame(animateBattle);
    battleBackground.draw();

    renderedSprites.forEach(sprite => {
        sprite.draw();
    })
}

animateBattle();

const queue = [];

// Event listeners for attacks 
document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', (e) => {
        const selectedAttack = attacks[e.currentTarget.innerHTML]
        playerCharacter.attack({
            attack: selectedAttack,
            recipient: draggle,
            renderedSprites
        });
        queue.push(() => {
            draggle.attack({
                attack: attacks.Tackle,
                recipient: playerCharacter,
                renderedSprites
            }); 
        });

        queue.push(() => {
            draggle.attack({
                attack: attacks.Fireball,
                recipient: playerCharacter,
                renderedSprites
            }); 
        });
    });
});

document.querySelector('#dialogueBox').addEventListener('click', (e) => {
    if (queue.length > 0) {
        queue[0]();
        queue.shift();
    } else {
    e.currentTarget.style.display = 'none';

}});