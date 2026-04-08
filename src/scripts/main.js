'use strict';

const firstForm = document.querySelector('.login-wrap').firstElementChild;
const secondForm = document.querySelector('.login-wrap').lastElementChild;

function makeFormLabels(form) {
  const inputsFromFirstForm = form.querySelectorAll('input');

  for (const el of inputsFromFirstForm) {
    const labelElement = document.createElement('label');

    labelElement.textContent = `${el.getAttribute('name')}`;
    labelElement.classList.add('field-label');
    labelElement.setAttribute('for', `${el.getAttribute('name')}`);

    el.before(labelElement);
  }
}

makeFormLabels(firstForm);
makeFormLabels(secondForm);
