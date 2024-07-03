'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  input.setAttribute(
    'placeholder',
    input.getAttribute('name')[0].toUpperCase() +
      input.getAttribute('name').slice(1).toLowerCase(),
  );

  const lableElem = document.createElement('label');

  lableElem.setAttribute('class', 'field-label');
  lableElem.setAttribute('for', input.getAttribute('id'));
  lableElem.textContent = input.getAttribute('name');
  input.insertAdjacentElement('beforebegin', lableElem);
});
