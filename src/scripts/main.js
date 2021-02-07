'use strict';

const inputs = document.querySelectorAll('input');
const fields = document.querySelectorAll('.field');

inputs.forEach((element, index) => {
  const label = document.createElement('label');

  label.setAttribute('for', element.name);
  label.className = 'field-label';
  label.textContent = element.name.toUpperCase();

  element.setAttribute('placeholder', element.name);
  fields[index].insertBefore(label, element);
});
