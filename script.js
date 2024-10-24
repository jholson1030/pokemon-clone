const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;
c.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.src = './img/Pellet Town.png';

const playerImage = new Image();
playerImage.src = './img/playerDown.png';


image.onload = () => {
    c.drawImage(image, -760, -585);

}


playerImage.onload = () => {
    c.drawImage(
        playerImage,
        0,
        0,
        playerImage.width / 4,
        playerImage.height, 
        canvas.width / 2 - playerImage.width / 4, 
        canvas.height / 2 - playerImage.height / 2,
        playerImage.width / 4,
        playerImage.height
    );
}


window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w' :
            console.log('pressed w key');
            break;
        
        case 'a' :
            console.log('pressed a key');
            break;

        case 's' :
            console.log('pressed s key');
            break;
                
        case 'd' :
        console.log('pressed d key');
        break;
    }
});