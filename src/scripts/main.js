'use strict';

const array = [...document.querySelectorAll('input')];

array.forEach((element) => {
  const label = document.createElement('label');
  const inputName =
    element.name.charAt(0).toUpperCase() + element.name.slice(1);

  label.classList.add('field-label');

  label.setAttribute('for', element.id);

  label.textContent = inputName;

  element.parentNode.insertBefore(label, element);

  element.setAttribute('placeholder', inputName);
});
