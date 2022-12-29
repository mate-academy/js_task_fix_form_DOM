'use strict';

const input = document.querySelectorAll('input');

input.forEach(key => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = key.id;
  label.textContent = key.name.replace('N', ' N');

  key.placeholder = ((key.name.slice(0, 1)).toLocaleUpperCase()
   + key.name.slice(1)).replace('N', ' N');

  key.before(label);
}
);
