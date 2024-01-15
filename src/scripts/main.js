'use strict';

const inputElements = document.getElementsByTagName('input');

[...inputElements].forEach((input) => {
  const { name: str } = input;

  input.placeholder = str.charAt(0).toUpperCase() + str.slice(1);

  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = str.toUpperCase();

  input.parentElement.append(label);
});
