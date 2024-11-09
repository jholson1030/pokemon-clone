const embyImage = new Image();
embyImage.src = './img/embySprite.png';

const draggleImage = new Image();
draggleImage.src = './img/draggleSprite.png';

const monsters = {
    Emby: {
        
            position: {
                x: 275,
                y: 330
            },
            image: embyImage,
            frames: {
                max: 4,
                hold: 30
            },
            animate: true,
            spriteName: 'Emby',
            attacks: [attacks.Tackle, attacks.Fireball]
    },

    Draggle: {
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
        spriteName: 'Draggle',
        attacks: [attacks.Tackle]
    }
}