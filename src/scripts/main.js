'use strict';

// write code here
const $inputElements = document.querySelectorAll('input');

$inputElements.forEach((element) => {
  const inputName = element.getAttribute('name');
  const capitalizedName = `${inputName[0].toLocaleUpperCase() + inputName.slice(1)}`;

  element.setAttribute('placeholder', capitalizedName);

  const inputLabel = document.createElement('label');

  inputLabel.textContent = capitalizedName;
  inputLabel.htmlFor = element.getAttribute('id');
  inputLabel.className = 'field-label';

  element.parentElement.prepend(inputLabel);
});
