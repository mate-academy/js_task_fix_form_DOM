'use strict';

// write code here
const form1 = document.querySelector('form:nth-of-type(1)');
const form2 = document.querySelector('form:nth-of-type(2)');
const inputs1 = form1.querySelectorAll('input');
const inputs2 = form2.querySelectorAll('input');

inputs1.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  const forAttr = input.getAttribute('id');

  label.htmlFor = forAttr;

  const nameAttr = input.getAttribute('name');

  label.textContent = nameAttr;

  input.placeholder = capitalize(nameAttr);

  input.before(label);
});

inputs2.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  const forAttr = input.getAttribute('id');

  label.htmlFor = forAttr;

  const nameAttr = input.getAttribute('name');

  label.textContent = nameAttr;

  input.placeholder = capitalize(nameAttr);

  input.before(label);
});

function capitalize(text) {
  const firstLetter = text[0].toUpperCase();

  const restLetters = text.slice(1);

  const result = firstLetter + restLetters;

  return result;
}
