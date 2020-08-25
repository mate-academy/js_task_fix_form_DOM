'use strict';

[...document.querySelectorAll('.field-text')]
  .map(x => x.setAttribute('placeholder',
    `${x.name[0]
      .toUpperCase()}${x.name.substr(1).toLowerCase().split('t').join('t ')}`));

const input = document.querySelectorAll('.field-text');

input.forEach(x => {
  const label = document.createElement('label');
  const box = x.parentElement;

  label.className = 'field-label';
  label.htmlFor = x.id;
  label.innerText = x.name.split('t').join('t ').toUpperCase();

  box.prepend(label);
});
