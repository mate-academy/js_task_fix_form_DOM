'use strict';

const inputs = [...document.querySelectorAll('.field-text')];

for (let i = 0; i < inputs.length; i++) {
  const newlabel = document.createElement('label');

  newlabel.textContent = `${inputs[i].name}`;
  newlabel.setAttribute('for', inputs[i].id);
  inputs[i].appendChild(newlabel);

  inputs[i].setAttribute('placeholder', `${inputs[i].name[0].toUpperCase()
    + inputs[i].name.slice(1)}`);
}
