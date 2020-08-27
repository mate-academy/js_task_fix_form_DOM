'use strict';

[...document.querySelectorAll('.field-text')]
  .map(x => x.setAttribute('placeholder',
    `${sentence(x.name)}`));

const input = document.querySelectorAll('.field-text');

input.forEach(x => {
  const label = document.createElement('label');
  const box = x.parentElement;

  label.className = 'field-label';
  label.htmlFor = x.id;
  label.innerText = sentence(x.name).toUpperCase();

  box.prepend(label);
});

function sentence(str) {
  return str[0].toUpperCase()
    + str.substr(1).replace(/([A-Z])/, ' $1')
      .toLowerCase();
}
