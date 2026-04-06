'use strict';

const loginWrap = document.querySelector('.login-wrap');

[...loginWrap.querySelectorAll('.field-text')].forEach((input) => {
  const fragment = new DocumentFragment();
  const label = document.createElement('label');
  const inputId = input.getAttribute('id') ?? '';
  const inputName = input.getAttribute('name') ?? '';

  input.setAttribute('placeholder', inputName.toUpperCase());
  label.className = 'field-label';
  label.setAttribute('for', inputId);
  label.innerText = inputName;
  fragment.append(label);
  input.parentNode.append(fragment);
});
