'use strict';

const fields = document.querySelectorAll('.field');
const fieldsArray = [ ...fields ];

function separateName(elem) {
  const array = elem.name.split('');
  let cutPart1;
  let cutPart2;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i].toUpperCase()) {
      cutPart1 = elem.name.slice(0, i);
      cutPart2 = elem.name.slice(i);

      return `${cutPart1} ${cutPart2}`;
    }
  }

  return elem.name;
}

for (const field of fieldsArray) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = separateName(field.children[0]);
  label.htmlFor = field.children[0].id;
  field.append(label);

  const nameFull = separateName(field.children[0]);
  const lower = nameFull.toLocaleLowerCase();
  const result = lower.charAt(0).toUpperCase() + lower.slice(1);

  field.children[0].placeholder = result;
}
