'use strict';

const forms = [...document.querySelectorAll('form')];
const inputs = forms.reduce((
  accum, item) => accum.concat([...item.querySelectorAll('input')]), []);

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.for = input.id;
  label.textContent = input.name;
  input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);
  input.parentElement.append(label);
}
