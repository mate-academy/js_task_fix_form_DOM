'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((elem) => {
  const label = document.createElement('label');
  const inputName = elem.getAttribute('name');

  label.setAttribute('for', elem.id);
  label.className = 'field-label';
  label.textContent = `${inputName}`;

  elem.parentNode.insertBefore(label, elem);

  elem.setAttribute(
    'placeholder',
    inputName.slice(0, 1).toUpperCase() + inputName.slice(1),
  );
});
