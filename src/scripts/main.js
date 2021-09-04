'use strict';

// write code here

const inputs = document.querySelectorAll('input');
const divs = document.querySelectorAll('.field');

for (let i = 0; i < inputs.length; i++) {
  const newlabel = document.createElement('Label');

  const capitalize = inputs[i].name[0].toUpperCase() + inputs[i].name.slice(1);

  inputs[i].setAttribute('placeholder', capitalize);

  newlabel.className = 'field-label';
  newlabel.setAttribute('for', inputs[i].id);
  newlabel.textContent = inputs[i].name;
  divs[i].append(newlabel);
}
