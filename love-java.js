const heartBtn = document.querySelector('.heart-btn');
const container = document.querySelector('#heart-container');

let btnscore = 0;

heartBtn.addEventListener('click', createHeart);



function createHeart() {
    for (let i = 0; i < 1; i++) {
        const hearts = document.createElement('div');
        hearts.classList.add('heart');
        container.appendChild(hearts)
        btnscore ++;
        if (btnscore === 10){
            container.removeChild(container.firstElementChild);
            btnscore = 9;
        }
    } 
}
