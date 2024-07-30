'use strict';

// write code here

const inputs = document.body.querySelectorAll('input');

const createLabel = function(input) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.for = input.id;
  label.textContent = cpitalizeIt(input.name);

  input.parentElement.append(label);
  input.placeholder = cpitalizeIt(input.name);
};

function cpitalizeIt(text) {
  let result = text.slice(0, 1).toUpperCase();

  for (let i = 1; i < text.length; i++) {
    if (text[i] === text[i].toUpperCase()) {
      result += ' ' + text[i];
    } else {
      result += text[i];
    }
  }

  return result;
}

[...inputs].forEach(createLabel);
