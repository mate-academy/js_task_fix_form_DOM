'use strict';

const listInput = document.querySelectorAll('input');

for (let i = 0; i < listInput.length; i++) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = listInput[i].name;
  label.htmlFor = listInput[i].id;

  const specialName = listInput[i].name[0].toUpperCase()
  + listInput[i].name.slice(1);

  listInput[i].placeholder = specialName;
  listInput[i].parentElement.append(label);
}
