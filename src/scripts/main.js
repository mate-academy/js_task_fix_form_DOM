'use strict';

const inputs = [...document.querySelectorAll('input')];

const space = text => {
  return text.split(/(?=[A-Z])/g).join(' ');
};

inputs.forEach(el => {
  const item = document.createElement('label');

  item.className = 'field-label';
  item.htmlFor = `${el.id}`;
  item.textContent = `${space(el.name)}`;

  el.parentElement.append(item);
});

inputs.forEach(el => {
  const value = el.name.charAt(0).toUpperCase() + el.name.slice(1);

  el.setAttribute('placeholder', space(value));
});
