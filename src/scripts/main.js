'use strict';

const allInputs = document.querySelectorAll('input');
let i = 0;

for (const n of allInputs) {
  const item = document.createElement('label');

  item.className = 'field-label';

  item.htmlFor = n.id;
  item.textContent = n.id.split('-').splice(2, 2).join('').toUpperCase();

  const field = document.querySelectorAll('.field')[i];

  field.append(item);
  i++;
}

for (const item of allInputs) {
  const text = item.id.split('-').splice(2, 2).join('');
  const str = function capitalize(s) {
    return s[0].toUpperCase() + text.slice(1);
  };

  item.placeholder = str(text);
}
