'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].forEach(inputElement => {
  const labels = document.createElement('label');

  labels.className = 'field-label';

  labels.setAttribute('for', inputElement.id);

  labels.textContent = (inputElement.name).replace('Name', ' Name');

  inputElement.setAttribute('placeholder',
    ((inputElement.name).charAt(0).toUpperCase() + (inputElement.name).slice(1)).replace('Name', ' Name'));
  inputElement.after(labels);
});
