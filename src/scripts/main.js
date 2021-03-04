'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((element) => {
  const field = document.createElement('label');

  field.htmlFor = element.id;
  field.className = 'field-label';
  field.textContent = capitalize(element.name);
  element.parentElement.append(field);
  element.placeholder = capitalize(element.name);
});

function capitalize(string) {
  const words = string.split('');

  words.forEach((element, index) => {
    if (index === 0) {
      words[index] = words[index].toUpperCase();
    }

    if (words[index].charCodeAt(0) < 91 && words[index].charCodeAt(0) > 64) {
      words[index] = ' ' + words[index].toUpperCase();
    }
  });

  return words.join('').trim();
}

capitalize('nextTask');
