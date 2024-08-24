'use strict';

const input = [...document.querySelectorAll('input')];

input.forEach((el) => {
  const label = document.createElement('label');
  const textContent = el.getAttribute('id').replace(/sign-up-|sign-in-/, '');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', el.getAttribute('id'));
  label.textContent = textContent;
  el.parentElement.prepend(label);

  el.placeholder = textContent
    .split('')
    .map((item, index) => (index === 0 ? item.toUpperCase() : item))
    .join('');
});
