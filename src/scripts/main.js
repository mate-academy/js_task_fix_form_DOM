'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((element) => {
  const label = document.createElement('label');
  label.className = 'field-label';
  label.setAttribute('for', element.id);

  const labelText = element.name.toUpperCase();
  label.textContent = labelText;
  element.setAttribute('placeholder', labelText);
  element.parentNode.insertBefore(label, element);
});
