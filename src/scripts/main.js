'use strict';

const fields = [...document.querySelectorAll('.field')];

fields.map(function(element) {
  const label = document.createElement('label');

  label.className = 'field-label';

  const input = element.querySelector('input');

  // eslint-disable-next-line no-shadow
  const name = input.getAttribute('name').split(/(?=[A-Z])/).join(' ');
  const id = input.getAttribute('id');

  label.setAttribute('for', id);
  label.innerText = name;
  input.placeholder = name.toUpperCase();
  element.append(label);
});
