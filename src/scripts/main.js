'use strict';

const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');

for (const input of inputs) {

const label = document.createElement('label');
label.classList.add('field-label');
const base = (input.name || 'field').toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
const id = `${base}-${Date.now()}`;
if (!input.id) {
  input.id = id;
}
label.htmlFor = input.id;

function capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}
input.parentElement.insertBefore(label, input);
label.textContent = capitalize(input.name);
input.placeholder = capitalize(input.name);
}




