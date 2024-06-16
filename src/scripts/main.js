'use strict';

const formInputs = document.querySelectorAll('input');

formInputs.forEach((el) => {
  const labelForInput = document.createElement('label');
  const elementName =
    el.name === 'firstName' || el.name === 'lastName'
      ? el.name.charAt(0).toUpperCase() +
        el.name.slice(1, -4) +
        ' ' +
        el.name.slice(-4).toLowerCase()
      : el.name.charAt(0).toUpperCase() + el.name.slice(1).toLowerCase();

  labelForInput.className = 'field-label';
  labelForInput.htmlFor = el.id;
  labelForInput.innerText = elementName.toUpperCase();

  el.parentElement.insertBefore(labelForInput, el);

  el.placeholder = elementName;
});
