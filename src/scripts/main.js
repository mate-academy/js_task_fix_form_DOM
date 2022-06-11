'use strict';

const i = document.querySelectorAll('input');

i.forEach(el => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = el.id;
  label.textContent = el.name.toLowerCase().split('name').join(' Name');
  el.parentElement.prepend(label);
  el.placeholder = el.name[0].toUpperCase() + el.name.slice(1);
  el.placeholder = el.placeholder.split('Name').join(' Name');
});
