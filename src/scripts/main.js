'use strict';

const inputs = document.querySelectorAll('input');

inputs[0].name = 'first Name';
inputs[1].name = 'last Name';

[...inputs].forEach(input => {
  const label = document.createElement('label');
  const capitalizedInputName = input.name.charAt(0).toUpperCase()
    + input.name.slice(1);

  label.textContent = capitalizedInputName;
  label.classList.add('field-label');
  label.htmlFor = input.id;
  input.parentNode.insertBefore(label, input.nextSibling);
  input.placeholder = capitalizedInputName;
});
