'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].map(inputElement => {
  const labels = document.createElement('label');

  labels.className = 'field-label';

  labels.setAttribute('for', inputElement.id);

  labels.textContent = inputElement.name;

  inputElement.setAttribute('placeholder',
    (inputElement.name).charAt(0).toUpperCase() + (inputElement.name).slice(1));
  inputElement.after(labels);
});
