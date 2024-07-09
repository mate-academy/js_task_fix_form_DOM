'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((el) => {
  el.setAttribute('placeholder', el.name);

  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', el.id);
  label.textContent = el.name;

  const inputParent = el.closest('div');

  inputParent.append(label);
});

// write code here
