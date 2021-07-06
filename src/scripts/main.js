'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');
  const field = input.parentElement;
  let title = input.name[0].toUpperCase() + input.name.slice(1);

  label.className = 'field-label';
  label.htmlFor = input.id;

  const bigLettersInTitle = title.match(/[A-Z]/g);

  if (bigLettersInTitle.length > 1) {
    title = title.split('');
    title.splice(title.indexOf(bigLettersInTitle[1]), 0, ' ');
    title = title.join('');
  }

  label.innerText = title;
  input.placeholder = title;

  field.prepend(label);
}
