'use strict';

const inputs = document.querySelectorAll('input');
const divs = document.querySelectorAll('.field');

for (let index = 0; index < inputs.length; index++) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', inputs[index].id);

  const labelName = inputs[index].name;

  inputs[index].style.textTransform = 'capitalize';
  label.textContent = labelName;

  inputs[index].setAttribute('placeholder', inputs[index].name);
  divs[index].append(label);
}
