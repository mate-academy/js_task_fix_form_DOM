'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const inputName = `${input.getAttribute('name')}`;
  const placeholder = inputName.replace(
    inputName[0],
    inputName[0].toUpperCase(),
  );

  const creatLable = document.createElement('label');

  creatLable.classList.add('field-label');
  creatLable.setAttribute('for', `${input.getAttribute('id')}`);
  creatLable.textContent = `${input.getAttribute('name').toUpperCase()}`;

  input.setAttribute('placeholder', placeholder);
  input.before(creatLable);
});
