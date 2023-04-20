'use strict';

const inputContainers = [...document.querySelectorAll('.field')];

inputContainers.forEach((el) => {
  const input = el.querySelector('input');
  const label = document.createElement('LABEL');

  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);
  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.innerText = input.name;
  el.insertAdjacentElement('afterbegin', label);
});
