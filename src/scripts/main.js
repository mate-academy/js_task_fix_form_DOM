'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach(el => {
  const item = document.createElement('label');

  item.className = 'field-label';
  item.htmlFor = `${el.id}`;
  item.textContent = `${el.name}`;

  const par = el.parentElement;

  par.append(item);
});

inputs.forEach(el => {
  const value = el.name.charAt(0).toUpperCase() + el.name.slice(1);

  el.setAttribute('placeholder', value);
});
