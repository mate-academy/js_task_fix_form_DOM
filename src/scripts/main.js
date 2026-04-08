/* eslint-disable no-shadow */
/* eslint-disable max-len */
/* eslint-disable spaced-comment */
/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach(input => {
  const label = document.createElement('label');
  label.classList.add('field-label');

  const id = input.id;
  label.setAttribute('for', id);

  //label.htmlFor = id;

  input.placeholder = label.textContent = input.name[0].toUpperCase() + input.name.slice(1);

  const parent = input.parentElement;
  parent.prepend(label);

});

