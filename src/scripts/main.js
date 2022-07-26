'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(element => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = element.id;
  label.textContent = element.name;

  element.placeholder = element.name[0].toUpperCase()
  + element.name.substring(1).split('Name').join(' Name');
  element.parentElement.append(label);
});
