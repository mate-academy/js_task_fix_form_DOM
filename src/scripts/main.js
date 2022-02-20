'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const placeholder = input.name.charAt(0).toUpperCase() 
  + input.name.slice(1).replace(/([A-Z])/g, ' $1');

  input.insertAdjacentHTML('beforebegin',
  `<label class = 'field-label' for=${input.id}>
  ${placeholder};
  <label/>`
  )
  input.placeholder = placeholder;
}

// write code here
