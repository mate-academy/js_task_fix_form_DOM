'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((element) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', element.id);

  label.textContent =
    element.name.charAt(0).toUpperCase() + element.name.slice(1);

  element.placeholder =
    element.name.charAt(0).toUpperCase() + element.name.slice(1);
  element.parentElement.append(label);
});
