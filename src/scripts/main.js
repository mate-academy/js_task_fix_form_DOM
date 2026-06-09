'use strict';

const inputElements = document.querySelectorAll('form input');

for (const element of inputElements) {
  const inputName = element.name;
  const capitalizedName = inputName[0].toUpperCase() + inputName.slice(1);

  element.placeholder = capitalizedName;

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.htmlFor = element.id;
  label.textContent = capitalizedName;
  element.parentElement.insertBefore(label, element);
}
