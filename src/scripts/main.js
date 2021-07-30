'use strict';

// write code here
const inputs = document.querySelectorAll('input');

for (const el of inputs) {
  const label = document.createElement('label');

  el.parentElement.prepend(label);
  label.className = 'field-label';
  label.innerText = el.name;
  label.htmlFor = el.id;
  el.setAttribute('placeholder', el.name[0].toUpperCase() + el.name.slice(1));
}
