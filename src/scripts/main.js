'use strict';

const inputContainers = [...document.querySelectorAll('.field')];

inputContainers.forEach((el, i) => {
  const input = el.querySelector('input');
  const label = document.createElement('LABEL');
  let nameText = input.name[0];

  for (let j = 1; j < input.name.length; j++) {
    if (input.name[j] === input.name[j].toUpperCase()) {
      nameText += ` ${input.name[j]}`;
    } else {
      nameText += input.name[j];
    }
  }

  input.placeholder = nameText[0].toUpperCase() + nameText.slice(1);
  label.innerText = nameText;
  label.className = 'field-label';
  label.setAttribute('for', input.id);
  el.insertAdjacentElement('afterbegin', label);
});
