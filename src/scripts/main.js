'use strict';

const listInput = document.querySelectorAll('input');

for (let i = 0; i < listInput.length; i++) {
  const label = document.createElement('label');
  label.className = 'field-label';
  const newName = listInput[i].name.split('').map(letter =>
    /[A-Z]/.test(letter) ? ' ' + letter : letter).join('');

  label.textContent = newName;
  label.htmlFor = listInput[i].id;

  const specialName = newName[0].toUpperCase()
  + newName.slice(1);

  listInput[i].placeholder = specialName;
  listInput[i].parentElement.append(label);
}
