'use strict';

const inputs = [...document.querySelectorAll('input')];
const fields = [...document.querySelectorAll('.field')];

function cappitalizeFirtLetter(word) {
  return word.slice(0, 1).toUpperCase() + word.slice(1, word.length);
}

function splitByUppercase(word) {
  const parts = [];
  let lastindex = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      if (lastindex !== i) {
        parts.push(word.slice(lastindex, i));
      }
      lastindex = i;
    }
  }
  parts.push(word.slice(lastindex));

  return parts.map((part) => cappitalizeFirtLetter(part));
}

fields.forEach((field, index) => {
  const label = document.createElement('label');

  label.setAttribute('for', inputs[index].id);
  label.className = 'field-label';
  label.textContent = splitByUppercase(inputs[index].name).join(' ');

  field.prepend(label);
});

inputs.forEach((input) => {
  const inputName = input.name;
  const res = splitByUppercase(inputName).join(' ');

  input.placeholder = res;
});
