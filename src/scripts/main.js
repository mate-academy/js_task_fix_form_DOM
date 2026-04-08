'use strict';

  let inputElements = document.querySelectorAll('form .field .field-text');

  let m = Array.from(inputElements);

  m.forEach((el) => {
    let inputName = el.getAttribute('name');
    let inputId = el.getAttribute('id');

    inputName = inputName[0].toUpperCase() + inputName.slice(1);
    el.setAttribute('placeholder', inputName);
    const label = document.createElement('label');
    label.className = 'field-label';
    label.htmlFor = inputId;
    label.textContent = inputName;

    el.before(label);
  });
