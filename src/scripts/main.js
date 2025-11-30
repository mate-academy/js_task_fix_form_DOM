'use strict';

document.querySelectorAll('form input').forEach((input) => {
  const labelText = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  input.placeholder = labelText;

  const label = document.createElement('label');

  label.textContent = labelText;
  label.classList.add('field-label');
  label.setAttribute('for', input.id);

  input.parentElement.append(label);
  
});
