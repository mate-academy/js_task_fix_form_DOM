'use strict';

const inputs = [...document.getElementsByClassName('field-text')];

inputs.forEach((item) => {
  item.setAttribute(
    'placeholder',
    `${item.getAttribute('name').toUpperCase()}`);

  const label = document.createElement('label');

  label.innerHTML = item.getAttribute('name');
  label.className = 'field-label';
  label.setAttribute('for', `${item.id}`);

  item.before(label);
});

// Have a good day! :3
