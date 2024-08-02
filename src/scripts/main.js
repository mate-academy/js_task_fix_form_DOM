'use strict';

const input = document.querySelectorAll('input');

input.forEach((element) => {
  const label = document.createElement('label');
  const labelName = element.getAttribute('name');
  const labelText = (labelName.charAt(0).toUpperCase() + labelName.slice(1)).split(/(?=[A-Z])/)
  .join(' ');
  const placeholder = labelText;

  label.textContent = labelText;
  label.classList.add('field-label');
  label.setAttribute('for', element.id);
  element.parentElement.insertBefore(label, element);
  element.setAttribute('placeholder', placeholder);
});
