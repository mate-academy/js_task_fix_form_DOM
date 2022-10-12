'use strict';

const separatingWords = function(s) {
  const splited = s.split('');

  for (let i = 0; i < splited.length; i++) {
    if (splited[i] === 'N') {
      splited[i] = ' N';
    }
  }

  return splited.join('');
};

const forms = document.querySelectorAll('form');
const inputs = [...forms].map(form =>
  [...form.querySelectorAll('div')].map(el => el.querySelector('input')));

const inputWithEmtyEl = [...inputs[0], ...inputs[1]];
const input = inputWithEmtyEl.filter(el => el != null);

for (let i = 0; i < input.length; i++) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = input[i].name;
  label.htmlFor = input[i].id;

  input[i].before(label);

  const placeholder = input[i].name[0].toUpperCase();

  input[i].placeholder = separatingWords(placeholder + input[i].name.slice(1));
}
