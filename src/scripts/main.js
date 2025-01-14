'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.map((input) => {
  const elem2 = document.createElement('label');

  elem2.innerHTML = input.name;
  elem2.classList.add('field-label');
  input.insertAdjacentElement('beforebegin', elem2);
  input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);
});
