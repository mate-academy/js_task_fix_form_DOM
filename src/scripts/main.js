'use strict';

[...document.querySelectorAll('.field-text')]
  .map(x => x.setAttribute('placeholder', `${x.name}`));

const input = document.querySelectorAll('.field-text');

input.forEach(x => {
  const label = document.createElement('label');
  const box = x.parentElement;

  label.className = 'field-label';
  label.htmlFor = x.id;
  label.innerText = x.name.toUpperCase();

  box.prepend(label);
});
