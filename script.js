`use strict`;

const body = document.querySelector('body');
// const p = document.getElementsByTagName('p');
const firstBtn = document.querySelector('.firstTheme');
const secondBtn = document.querySelector('.secondTheme');
const thirdBtn = document.querySelector('.thirdTheme');

const numberTab = document.querySelector('.numberTab');

const deleteBtn = document.querySelector('.delete');
const reset = document.querySelector('.reset');
const equals = document.querySelector('.equals');

const btn = document.querySelector('.btn');

const firstTheme = function() {
    body.style.background = 'hsl(222, 26%, 31%)';
    numberTab.style.background = 'hsl(223, 31%, 20%)';
    deleteBtn.style.background = 'hsl(225, 21%, 49%)';
    deleteBtn.style.boxShadow = '0 3px 4px hsl(224, 28%, 35%)';
    reset.style.background = 'hsl(225, 21%, 49%)';
    reset.style.boxShadow = '0 3px 4px hsl(224, 28%, 35%)';
};

const secondTheme = function() {
    body.style.background = 'hsl(0, 0%, 90%)';
    // text.style.color = 'hsl(60, 10%, 19%)';
    numberTab.style.background = 'hsl(0, 5%, 81%)';
    deleteBtn.style.background = 'hsl(185, 42%, 37%)';
    deleteBtn.style.boxShadow = '0 3px 4px hsl(185, 58%, 25%)';
    reset.style.background = 'hsl(185, 42%, 37%)';
    reset.style.boxShadow = '0 3px 4px hsl(185, 58%, 25%)';
};

const thirdTheme = function() {
    body.style.background = 'hsl(268, 75%, 9%)';
    numberTab.style.background = 'hsl(268, 71%, 12%)';
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



