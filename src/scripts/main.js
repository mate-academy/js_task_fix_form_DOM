'use strict';

const inputsElem = Array.from(document.querySelectorAll('input'));

function initializ() {
  for (const input of inputsElem) {
    const atributeName = input.name
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase());

    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);
    label.textContent = atributeName;

    input.placeholder = atributeName;

    input.insertAdjacentElement('beforebegin', label);
  }
}

initializ();
