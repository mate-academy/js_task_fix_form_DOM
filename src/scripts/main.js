'use strict';

const input = document.querySelectorAll('input');

function formatting(str) {
  return str.name[0].toUpperCase()
    + str.name.substring(1).split(/(?=[A-Z])/).join(' ');
}

[...input].forEach(el => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = formatting(el);
  label.setAttribute('for', el.id);
  el.placeholder = formatting(el);
  el.parentElement.append(label);
});
