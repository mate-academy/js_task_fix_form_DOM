'use strict';

const elements = document.querySelectorAll('input');

for (let i = 0; i < elements.length; i++) {
  elements[i].placeholder = elements[i]
    .name[0].toUpperCase() + elements[i].name.slice(1);

  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = elements[i].id;
  label.textContent = elements[i].name;
  elements[i].parentElement.append(label);
}
