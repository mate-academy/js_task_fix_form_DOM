'use strict';

const inputs = document.querySelectorAll('input');

const separateString = (word) => {
  const result = [];

  for (let i of word) {
    if (i === i.toUpperCase()) {
      result.push(' ');
      i = i.toLowerCase();
    }
    result.push(i);
  }

  return result.join('');
};

const addLabels = () => {
  inputs.forEach(input => {
    const label = document.createElement('label');

    label.className = 'field-label';
    label.setAttribute('for', input.id);
    label.textContent = separateString(input.name).toUpperCase();

    input.placeholder = input.name.charAt(0).toUpperCase()
     + separateString(input.name.slice(1));
    input.parentElement.prepend(label);
  });
};

addLabels();
