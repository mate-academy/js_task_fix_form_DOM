'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const labelName = document.createElement('label');

  labelName.className = `field-label`;
  labelName.setAttribute('for', input.getAttribute('id'));
  labelName.textContent = capitalizeName(input.getAttribute('name'));

  input.parentElement.append(labelName);
  input.placeholder = capitalizeName(input.getAttribute('name'));
});

function capitalizeName(str) {
  const separated = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  const lettersArray = separated.toLowerCase().split('');

  const first = lettersArray[0].toUpperCase();
  const others = lettersArray.slice(1);

  return first + others.join('');
}
