const heartBtn = document.querySelector('.heart-btn');
const container = document.querySelector('#heart-container');

let btnscore = 0;

heartBtn.addEventListener('click', createHeart);



function createHeart() {
    for (let i = 0; i < 1; i++) {
        const hearts = document.createElement('div');
        hearts.classList.add('heart');
        container.appendChild(hearts)
        btnscore++;
        if (btnscore === 10) {
            container.removeChild(container.firstElementChild);
            btnscore = 9;
        }
    }
}

const dString = "August, 24, 2019";

let d1 = new Date(dString);
let d2 = new Date();

function inSeconds(d1, d2) {
    let t2 = d2.getTime();
    let t1 = d1.getTime();
    let result = parseInt((t2 - t1) / 1000);
    let resultDisplay = document.getElementById('seconds');
    resultDisplay.textContent = result;
}

function inMinutes(d1, d2) {
    let t2 = d2.getTime();
    let t1 = d1.getTime();
    let result = parseInt((t2 - t1) / (1000 * 60));
    let resultDisplay = document.getElementById('minutes');
    resultDisplay.textContent = result;
}

function inHours(d1, d2) {
    let t2 = d2.getTime();
    let t1 = d1.getTime();
    let result = parseInt((t2 - t1) / (1000 * 60 * 60));
    let resultDisplay = document.getElementById('hours');
    resultDisplay.textContent = result;
}

function inDays(d1, d2) {
    let t2 = d2.getTime();
    let t1 = d1.getTime();
    let result = parseInt((t2 - t1) / (24 * 3600 * 1000));
    let resultDisplay = document.getElementById('days');
    resultDisplay.textContent = result;
}

function inWeeks(d1, d2) {
    let t2 = d2.getTime();
    let t1 = d1.getTime();
    let result = parseInt((t2 - t1) / (24 * 3600 * 1000 * 7));
    let resultDisplay = document.getElementById('weeks');
    resultDisplay.textContent = result;
}

function inMonths(d1, d2) {
    let d1Y = d1.getFullYear();
    let d2Y = d2.getFullYear();
    let d1M = d1.getMonth();
    let d2M = d2.getMonth();
    let result = (d2M + 12 * d2Y) - (d1M + 12 * d1Y);
    let resultDisplay = document.getElementById('months');
    resultDisplay.textContent = result; 
}

function inYears(d1, d2) {
    let result = d2.getFullYear() - d1.getFullYear();
    let resultDisplay = document.getElementById('years');
    resultDisplay.textContent = result;
}

inSeconds(d1, d2);
inMinutes(d1, d2);
inHours(d1, d2);
inDays(d1, d2);
inWeeks(d1, d2);
inMonths(d1, d2);
inYears(d1, d2);
