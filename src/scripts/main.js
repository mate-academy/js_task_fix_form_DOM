'use strict';

// write code here
const inputs = [...document.querySelectorAll('input')];

inputs.forEach((element, i, arr) => {
  const label = document.createElement('label');
  label.className = 'field-label';
  label.setAttribute('for', arr[i].id);

  const inputName = element.getAttribute('name');
  label.textContent = inputName ? inputName : 'Label';

  element.parentNode.appendChild(label);

  if (inputName) {
    const capitalizedPlaceholder = inputName.charAt(0).toUpperCase() + inputName.slice(1);
    element.setAttribute('placeholder', capitalizedPlaceholder);
  }
});
