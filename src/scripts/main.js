'use strict';

const input = document.querySelectorAll('input');

input.forEach(item => {
  const label = document.createElement('label');

  label.setAttribute('for', item.id);
  label.textContent = item.name;

  label.className = 'field-label';

  item.placeholder = item.name[0].toUpperCase()
  + item.name.substring(1).split(/(?=[A-Z])/).join(' ');

  item.parentElement.append(label);
});
