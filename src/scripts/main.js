'use strict';

(() => {
  const inputs = document.querySelectorAll('.login-wrap input');

  inputs.forEach((input) => {
    const labelElement = document.createElement('label');

    labelElement.className = 'field-label';
    labelElement.htmlFor = input.id;
    labelElement.textContent = input.name;

    input.parentElement.append(labelElement);
    input.placeholder = input.name[0].toLocaleUpperCase() + input.name.slice(1);
  });
})();
