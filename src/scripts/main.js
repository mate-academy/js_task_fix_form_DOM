'use strict';

// write code here
document.querySelectorAll('form').forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach(input => {
    const label = document.createElement('label');
    label.classList.add('field-label');
    label.textContent = input.name;
    label.htmlFor = input.id;

    input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);

    input.parentElement.prepend(label);
  })
})
