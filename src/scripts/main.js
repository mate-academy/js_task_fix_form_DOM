'use strict';

// write code here
const core = document.querySelector('.login-wrap');

const padding = core.querySelectorAll('.field');
const input = core.querySelectorAll('input');

for (const distance of padding) {
  distance.setAttribute('style', 'padding-top: 22px');
}

for (const text of input) {
  const word = text.name.split('');

  word[0] = word[0].toUpperCase();

  text.insertAdjacentHTML('beforebegin',
    `<h6 style="margin: 3px;">${word.join('').toUpperCase()}</h6>`);
  text.setAttribute('placeholder', word.join(''));
}