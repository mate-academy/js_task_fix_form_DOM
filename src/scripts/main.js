'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].forEach(i => {
  i.setAttribute('placeholder', decamelize(i.name));

  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = i.getAttribute('placeholder').toUpperCase();
  label.setAttribute('for', i.id);

  i.insertAdjacentElement('beforebegin', label);
});

function decamelize(str) {
  return str.split(/(?=[A-Z])/)
    .join(' ')[0]
    .toUpperCase()
     + str.slice(1);
}
