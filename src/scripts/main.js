'use strict';

const inputs = document.querySelectorAll('input');

for (const inp of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', inp.id);
  label.textContent = inp.name;
  inp.parentElement.append(label);
}

[ ...inputs ].map(el =>
  el.setAttribute('placeholder', el.name.slice(0, 1)
    .toUpperCase() + el.name.slice(1)));
