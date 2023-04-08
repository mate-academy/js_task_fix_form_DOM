'use strict';

const inputs = [...document.querySelectorAll('div.field')];

inputs.map(input => {
  const inp = input.children[0];
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', inp.name);
  label.textContent = inp.name.toUpperCase();

  inp.setAttribute(
    'placeholder', inp.name.charAt(0).toUpperCase() + inp.name.slice(1)
  );

  input.prepend(label);
});
