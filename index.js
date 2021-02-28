let blueBall = document.getElementById('blueBall');

let redBall = document.getElementById('redBall');

let greenBall = document.getElementById('greenBall');

let yellowBall = document.getElementById('yellowBall');


let up = () => {
    blueBall.style.bottom = '657px';
    redBall.style.bottom = '657px';
    greenBall.style.bottom = '657px';
    yellowBall.style.bottom = '657px';
}

let ballDown = () => {
   if(event.key === 'b') {
        blueBall.style.bottom = '100px';
    }
    if(event.key === 'r') {
        redBall.style.bottom = '100px';
   }
    if(event.key === 'g') {
        greenBall.style.bottom = '100px';
    }
    if(event.key === 'y') {
        yellowBall.style.bottom = '100px';
    }
}  

document.onkeydown = ballDown;

document.onkeyup = up;

