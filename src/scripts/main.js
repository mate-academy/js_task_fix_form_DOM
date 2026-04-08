'use strict';

const inputCollection = document.querySelectorAll('input');

inputCollection.forEach((input) => {
  const newLabel = document.createElement('label');

  newLabel.className = 'field-label';

  newLabel.textContent = input.name;

  newLabel.setAttribute('for', input.id);

  input.insertAdjacentElement('beforebegin', newLabel);

  newLabel.before(input);
});

inputCollection.forEach((input) => {
  input.setAttribute(
    'placeholder',
    input.name.slice(0, 1).toUpperCase() + input.name.slice(1),
  );
});
