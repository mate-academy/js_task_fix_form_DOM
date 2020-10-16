'use strict';

const allInputs = [...document.querySelectorAll('.field-text')];

allInputs.forEach(element => {
  const label = document.createElement('label');
  const inputId = element.id;
  const inputName = element.name;

  label.className = 'field-label';

  label.htmlFor = inputId;

  label.textContent = inputName;

  element.placeholder = inputName.replace(/([A-Z])/g, ' $1');

  element.placeholder = (element.placeholder[0].toUpperCase()
    + element.placeholder.slice(1));

  element.parentElement.append(label);
});
