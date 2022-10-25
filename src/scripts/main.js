'use strict';

const input = document.querySelectorAll('input');

[...input].forEach(el => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = el.name;
  label.setAttribute('for', el.id);
  el.placeholder = el.name[0].toUpperCase() 
  + el.name.substring(1).split(/(?=[A-Z])/).join(' ');
  el.append(label);

  el.parentElement.append(label);
});
