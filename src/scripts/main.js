'use strict';

const parentInput = document.querySelectorAll('.field');

const capitalize = (string) => {
  const firstLetter = string.substr(0, 1).toLocaleUpperCase();
  const restLetter = string.substr(1, string.length);
  const newWord = firstLetter + restLetter;

  return newWord;
};

[...parentInput].forEach(element => {
  const input = element.querySelector('input');
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;
  input.placeholder = capitalize(input.name);
  element.append(label);

  return element;
});
