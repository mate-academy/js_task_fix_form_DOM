'use strict';

const inputs = document.querySelectorAll('input');

const separatingWords = function(words) {
  const splited = words.split('');

  for (let i = 1; i < splited.length; i++) {
    if (splited[i] === splited[i].toUpperCase()) {
      splited[i] = ` ${splited[i].toLowerCase()}`;
    }
  }

  return splited.join('');
};

inputs.forEach(input => {
  input.placeholder = input.name[0].toUpperCase()
    + separatingWords(input.name.slice(1));

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = separatingWords(input.name);

  input.insertAdjacentElement('beforebegin', label);
});
