'use strict';

const separatingWords = function(s) {
  const splited = s.split('');

  for (let i = 1; i < splited.length; i++) {
    if (splited[i] === splited[i].toUpperCase()) {
      splited[i] = ` ${splited[i]}`;
    }
  }

  return splited.join('');
};

const forms = document.querySelectorAll('form');
const inputs = [...forms].map(form =>
  [...form.querySelectorAll('div')].map(el => el.querySelector('input')));

const inputWithEmptyEl = [...inputs[0], ...inputs[1]];
const input = inputWithEmptyEl.filter(el => el !== null);

for (let i = 0; i < input.length; i++) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = separatingWords(input[i].name);
  label.htmlFor = input[i].id;

  input[i].before(label);

  const placeholder = input[i].name[0].toUpperCase();

  input[i].placeholder = separatingWords(placeholder + input[i].name.slice(1));
}
