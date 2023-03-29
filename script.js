`use strict`;


const body = document.querySelector('body');
const logo = document.querySelector('h4');
const p = document.querySelectorAll('p');
const screenFig = document.querySelector('.screenFigure');
const firstBtn = document.querySelector('.firstTheme');
const secondBtn = document.querySelector('.secondTheme');
const thirdBtn = document.querySelector('.thirdTheme');

const numberTab = document.querySelector('.numberTab');
const toggleBar = document.querySelector('.toggle');
const screenBar = document.querySelector('.screen');

const deleteBtn = document.querySelector('.delete');
const reset = document.querySelector('.reset');
const equals = document.querySelector('.equals');

const btn = document.querySelectorAll('.btn');

//for toggling between themes

const firstTheme = function() {
    body.style.background = 'hsl(222, 26%, 31%)';
    numberTab.style.background = 'hsl(223, 31%, 20%)';
    deleteBtn.style.background = 'hsl(225, 21%, 49%)';
    deleteBtn.style.boxShadow = '0 3px 1px hsl(224, 28%, 35%)';
    reset.style.background = 'hsl(225, 21%, 49%)';
    reset.style.boxShadow = '0 3px 1px hsl(224, 28%, 35%)';
    equals.style.background = 'hsl(6, 63%, 50%)';
    equals.style.boxShadow = '0 3px 1px hsl(6, 70%, 34%)';
    btn.forEach(e => e.style.color = 'hsl(221, 14%, 31%)');
    btn.forEach(e => e.style.background = 'white');
    btn.forEach(e => e.classList.add('firstShadow'));
    btn.forEach(e => e.classList.remove('secondShadow'));
    btn.forEach(e => e.classList.remove('thirdShadow'));
    p.forEach(e => e.style.color = 'white');
    logo.style.color = 'white';
    firstBtn.style.background = 'hsl(6, 63%, 50%)';
    toggleBar.style.background = 'hsl(223, 31%, 20%)';
    screenBar.style.background = 'hsl(224, 36%, 15%)';
};

const secondTheme = function() {
    body.style.background = 'hsl(0, 0%, 90%)';
    numberTab.style.background = 'hsl(0, 5%, 81%)';
    deleteBtn.style.background = 'hsl(185, 42%, 37%)';
    deleteBtn.style.boxShadow = '0 3px 1px hsl(185, 58%, 25%)';
    reset.style.background = 'hsl(185, 42%, 37%)';
    reset.style.boxShadow = '0 3px 1px hsl(185, 58%, 25%)';
    equals.style.background = 'hsl(25, 98%, 40%)';
    equals.style.boxShadow = '0 3px 1px hsl(25, 99%, 27%)';
    btn.forEach(e => e.style.color = 'hsl(60, 10%, 19%)');
    btn.forEach(e => e.style.background = 'white');
    btn.forEach(e => e.classList.add('secondShadow'));
    btn.forEach(e => e.classList.remove('firstShadow'));
    btn.forEach(e => e.classList.remove('thirdShadow'));
    p.forEach(e => e.style.color = 'hsl(60, 10%, 19%)');
    logo.style.color = 'hsl(60, 10%, 19%)';
    secondBtn.style.background = 'hsl(25, 98%, 40%)';
    toggleBar.style.background = 'hsl(0, 5%, 81%)';
    screenBar.style.background = 'hsl(0, 0%, 93%)';
};

const thirdTheme = function() {
    body.style.background = 'hsl(268, 75%, 9%)';
    numberTab.style.background = 'hsl(268, 71%, 12%)';
    deleteBtn.style.background = 'hsl(281, 89%, 26%)';
    deleteBtn.style.boxShadow = '0 3px 1px hsl(285, 91%, 52%)';
    reset.style.background = 'hsl(281, 89%, 26%)';
    reset.style.boxShadow = '0 3px 1px hsl(285, 91%, 52%)';
    equals.style.background = 'hsl(176, 100%, 44%)';
    equals.style.boxShadow = '0 3px 1px hsl(177, 92%, 70%)';
    btn.forEach(e => e.style.background = 'hsl(268, 47%, 21%)');
    btn.forEach(e => e.style.color = 'hsl(52, 100%, 62%)');
    btn.forEach(e => e.classList.add('thirdShadow'));
    btn.forEach(e => e.classList.remove('secondShadow'));
    btn.forEach(e => e.classList.remove('firstShadow'));
    p.forEach(e => e.style.color = 'hsl(52, 100%, 62%)');
    logo.style.color = 'hsl(52, 100%, 62%)';
    thirdBtn.style.background = 'hsl(176, 100%, 44%)';
    toggleBar.style.background = 'hsl(268, 71%, 12%)';
    screenBar.style.background = 'hsl(268, 71%, 12%)';
};

firstBtn.addEventListener('click', function() {
    firstTheme();
    firstBtn.style.opacity = '1';
    secondBtn.style.opacity = '0';
    thirdBtn.style.opacity = '0';
});

secondBtn.addEventListener('click', function() {
    secondTheme();
    firstBtn.style.opacity = '0';
    secondBtn.style.opacity = '1';
    thirdBtn.style.opacity = '0';
});

thirdBtn.addEventListener('click', function() {
    thirdTheme();
    firstBtn.style.opacity = '0';
    secondBtn.style.opacity = '0';
    thirdBtn.style.opacity = '1';
});

//calculator functions
const calcBtn = Array.from(document.querySelectorAll('.btn'));
const oppBtn = Array.from(document.querySelectorAll('.oppBtn'));

calcBtn.map( button => {
    button.addEventListener('click', function(e) {

        switch(e.target.innerText) {
            default:
                screenFig.innerText += e.target.innerText;
        }
    });
});

oppBtn.map( button => {
    button.addEventListener('click', function(e) {

        switch(e.target.innerText) {
            case 'RESET': 
                  screenFig.innerText = ''; 
                  break;  
            case 'DEL':
                  if(screenFig.innerText) {
                    screenFig.innerText = screenFig.innerText.slice(0, -1);
                  };
                  break;
            case '=':
                try{
                    screenFig.innerText = eval(screenFig.innerText);
                } catch {
                    screenFig.innerText = 'Error!';
                }
                break;
        }
    });
});


// default state/theme

window.onload = function() {
    firstTheme();
};