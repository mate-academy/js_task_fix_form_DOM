'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach(item => {
  const label = document.createElement('label');

  label.htmlFor = item.id;
  label.classList.add('field-label');
  label.innerText = separateWords(item.name);
  item.parentElement.appendChild(label);
  item.placeholder = separateWords(item.name);
});

function separateWords(item) {
  const word = item.split(/(?=[A-Z])/).join(' ');

  return word[0].toUpperCase() + word.slice(1);
}
