'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const label = document.createElement('label');
  label.for = input.id;
  label.class = `field-label`;
  label.textContent = input.name.toUpperCase();

  input.placeholder = input.name.replace(/([A-Z])/g, ' $1')
  // please help to come up with easier solution to turn camelCase into Camel case
  .replace(/^./, function(str){ return str.toUpperCase(); });

  input.textContent = input.name;

  input.parentElement.insertAdjacentElement('afterbegin', label);

  console.log(input.parentElement.innerHTML)
})