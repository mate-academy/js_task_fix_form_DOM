'use strict';

const input = [...document.querySelectorAll('input')];

function changeWordOnSpace(x) {
  for (let i = 0; i < x.length; i++) {
    if (x[i] === x[i].toUpperCase()) {
      return x.slice(0, i) + ' ' + x.slice(i).toLowerCase();
    }
  }

  return x;
}

for (let i = 0; i < input.length; i++) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input[i].id;
  label.textContent = changeWordOnSpace(input[i].name);
  input[i].parentElement.append(label);
}

input.map(x => {
  const word = changeWordOnSpace(x.name);

  x.placeholder = word[0].toUpperCase() + word.slice(1).toLowerCase();
});
