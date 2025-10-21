'use strict';

function initLoginForm() {
  const formWrap = document.querySelector('.login-wrap');

  if (!formWrap) {
    return;
  }

  const inputs = formWrap.querySelectorAll('input');

  function capitalize(inputName) {
    if (inputName) {
      return inputName[0].toUpperCase() + inputName.slice(1);
    }

    return '';
  }

  inputs.forEach((input, index) => {
    const label = document.createElement('label');

    if (!input.id) {
      input.id = 'field-' + index;
    }

    label.className = 'field-label';
    label.setAttribute('for', input.id);
    label.textContent = capitalize(input.name);
    input.placeholder = capitalize(input.name);
    input.parentNode.insertBefore(label, input);
  });
}

initLoginForm();
