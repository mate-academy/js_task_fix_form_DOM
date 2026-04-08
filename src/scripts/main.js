'use strict';

  const form = document.body.querySelector('form');
  const inputs = form.querySelectorAll('input');

  inputs.forEach(element => {
    const nameValue = element.getAttribute('name');
    element.id = nameValue;

    const label = document.createElement('label');
    label.classList.add('field-label');
    label.setAttribute('for', element.id);
    label.textContent = nameValue[0].toUpperCase() + nameValue.slice(1);

    element.parentElement.appendChild(label);
    element.placeholder = nameValue[0].toUpperCase() + nameValue.slice(1);
  });
