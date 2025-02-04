'use strict';

// write code here
const inputs = [...document.querySelectorAll('input')];

inputs.forEach((element, i, arr) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', arr[i].id);
  label.textContent = element.name || 'Label';

  element.parentNode.appendChild(label);

  const capitalizedPlaceholder =
    element.name.charAt(0).toUpperCase() + element.name.slice(1);

  element.setAttribute('placeholder', capitalizedPlaceholder);
});
