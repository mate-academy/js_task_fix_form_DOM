'use strict';

const inputsArr = Array.from(document.querySelectorAll('input'));

inputsArr.forEach((input) => {
  const label = document.createElement('label');

  label.textContent = input.name;
  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  input.before(label);

  input.setAttribute(
    'placeholder',
    input.name.charAt(0).toUpperCase() + input.name.slice(1),
  );
});
