'use strict';

// write code here
const allInputs = document.querySelectorAll('form input');

allInputs.forEach((input, index) => {
  if (!input.id) {
    input.id = input.name + '-' + index;
  }

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.htmlFor = input.id;

  let text = input.name;

  text = text.replace(/[-_]/g, ' ');
  text = text.charAt(0).toUpperCase() + text.slice(1);

  label.textContent = text;
  input.placeholder = text;

  input.parentElement.insertBefore(label, input);
});
