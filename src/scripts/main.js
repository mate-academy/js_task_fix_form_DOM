'use strict';

const inputs = document
  .querySelectorAll('input');

[
  ...inputs]
  .map(input => {
    const label = document.createElement('label');

    label.setAttribute('class', 'field-label');
    label.setAttribute('for', input.id);
    label.innerText = input.name;

    input
      .parentElement
      .insertAdjacentElement('afterbegin', label);

    input
      .setAttribute('placeholder',
        input.name[0].toUpperCase() + input.name.slice(1));
  });
