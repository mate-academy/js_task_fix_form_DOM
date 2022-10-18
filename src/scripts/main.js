/* eslint-disable no-console */
'use strict';

const allInputs = document.getElementsByClassName('field-text');

[...allInputs].forEach((el) => {
  const newLabel = document.createElement('lable');

  newLabel.className = 'field-label';
  newLabel.setAttribute('for', `${el.id}`);
  newLabel.textContent = `${el.name}`;
  el.before(newLabel);

  const placeholderText = el.getAttribute('name');

  el.setAttribute('placeholder',
    `${placeholderText[0].toUpperCase() + placeholderText.slice(1)}`);
});
