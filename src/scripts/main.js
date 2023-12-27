'use strict';

function splitStringPlaceholder(str) {
  let resStr = '';
  const chunks1 = str.split('').filter(item => item === item.toUpperCase());
  const chunks2 = str.replaceAll(/[A-Z]/g, ' ').slice(1).split(' ');

  for (let i = 0; i < chunks1.length; i++) {
    resStr += (chunks1[i] + chunks2[i]) + ' ';
  }

  return resStr.slice(0, resStr.length - 1);
}

const inputs = [...document.querySelectorAll('.field-text')];

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.htmlFor = inputs[i].id;

  label.textContent = splitStringPlaceholder(
    inputs[i].name.slice(0, 1).toUpperCase() + inputs[i].name.slice(1),
  );

  inputs[i].parentNode.appendChild(label);

  inputs[i].setAttribute(
    'placeholder',
    splitStringPlaceholder(
      inputs[i].name.slice(0, 1).toUpperCase() + inputs[i].name.slice(1),
    ),
  );
}
