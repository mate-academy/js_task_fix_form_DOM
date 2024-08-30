'use strict';

const fieldElements = document.querySelectorAll('.field');
const inputElements = document.querySelectorAll('input');

function setName(element) {
  let itemName = '';

  for (let i = 0; i < element.name.length; i++) {
    if (i === 0) {
      itemName += element.name[i].toUpperCase();
      continue;
    }

    if (element.name[i] !== element.name[i].toLowerCase()) {
      itemName += ' ' + element.name[i];
    } else {
      itemName += element.name[i];
    }
  }

  return itemName;
}

fieldElements.forEach((field) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', field.firstElementChild.id);

  label.textContent = setName(field.firstElementChild);
  field.prepend(label);
});

inputElements.forEach((input) => {
  input.placeholder = setName(input);
});

[...fieldElements].slice(0, 2).forEach((field) => {
  // eslint-disable-next-line no-console
  console.log(field.firstElementChild.textContent);
});
