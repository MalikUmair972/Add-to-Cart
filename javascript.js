let plus = document.querySelector('.plus');
let number = document.querySelector('.num');
let minus = document.querySelector('.minus');
let button = document.getElementById('btn');
let thks = document.getElementById('thks');
let customAlert = document.getElementById('customAlert');
let closeAlert = document.getElementById('closeAlert');

let a = 1;
plus.addEventListener('click', () => {
    a++;
    a = (a < 10) ? "0" + a : a;
    number.innerText = a;
});

minus.addEventListener('click', () => {
    if (a > 1) {
        a--;
        a = (a < 10) ? "0" + a : a;
        number.innerText = a;
    }
});

button.addEventListener('click', () => {
   thks.classList.add('thanks');
   customAlert.style.display = 'flex';  
});

closeAlert.addEventListener('click', () => {
    customAlert.style.display = 'none'; 
});



