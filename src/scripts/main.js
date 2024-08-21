'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);

  const denotations = input.name.split(/(?=[A-Z])/);

  const labelText = denotations
    .map(
      (denotation) => denotation.charAt(0).toUpperCase() + denotation.slice(1),
    )
    .join(' ');

  label.textContent = labelText;
  input.setAttribute('placeholder', label.textContent);
  input.parentNode.insertBefore(label, input);
});
