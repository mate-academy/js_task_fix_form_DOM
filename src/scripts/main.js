'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const label = document.createElement('label');

  label.className = 'field-label';

  label.htmlFor = input.id;

  const textName = input.getAttribute('name').split('N').join(' N');

  label.textContent = textName;

  input.setAttribute('placeholder', textName[0].toUpperCase()
   + textName.slice(1));

  input.parentElement.append(label);
});
