const hintBtn = document.querySelector('#hintID');
const hint = document.querySelector('#hint');

let click = 0;

hintBtn.addEventListener('click', () => {
    click++
    console.log(click)
    if (click === 1) {
        hint.textContent = 'What is my nickname for Jennu?'
    } else if (click === 2) {
        hint.textContent = 'How much do i love you?'
    } else if (click === 3){
        hint.textContent = ''
        return click = 0;
    }
});