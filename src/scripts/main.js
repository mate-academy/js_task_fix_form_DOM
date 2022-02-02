'use strict';

const inputs = document.querySelectorAll('input');

for (const l of inputs) {
  const label = document.createElement('label');

  let nameOfInput = '';

  for (let i = 0; i < l.name.length; i++) {
    if (l.name[i] === l.name[i].toLocaleUpperCase()) {
      nameOfInput = nameOfInput + ' ' + l.name[i];
    } else {
      nameOfInput = nameOfInput + l.name[i];
    };
  };

  label.className = 'field-label';
  label.textContent = nameOfInput[0].toUpperCase() + nameOfInput.slice(1);
  label.setAttribute('for', l.id);

  l.setAttribute('placeholder',
    nameOfInput[0].toUpperCase() + nameOfInput.slice(1));

  l.parentNode.append(label);
};
