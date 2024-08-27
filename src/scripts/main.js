'use strict';

const inputsElem = Array.from(document.querySelectorAll('input'));

function initializ() {
  for (const input of inputsElem) {
    const atributeName =
      input.name.charAt(0).toUpperCase() + input.name.slice(1);

    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);
    label.textContent = atributeName;

    input.placeholder = atributeName;

    input.insertAdjacentElement('beforebegin', label);
  }
}

initializ();
