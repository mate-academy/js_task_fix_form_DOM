'use strict';

const formInputs = document.querySelectorAll('input');

formInputs.forEach((el) => {
  const labelForInput = document.createElement('label');

  labelForInput.className = 'field-label';
  labelForInput.htmlFor = el.id;
  labelForInput.innerText = el.name.toUpperCase();

  el.parentElement.insertBefore(labelForInput, el);

  el.placeholder =
    el.name.charAt(0).toUpperCase() + el.name.slice(1).toLowerCase();
});
