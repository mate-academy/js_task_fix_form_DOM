'use strict';

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((item) => {
    if (item.tagName === 'INPUT') {
      const idInput = item.getAttribute('id');
      const nameInput = item.getAttribute('name');
      const label = document.createElement('label');

      const capitalize = nameInput[0].toLocaleUpperCase() + nameInput.slice(1);

      label.classList.add('field-label');
      item.setAttribute('placeholder', capitalize);
      label.setAttribute('for', idInput);
      label.textContent = nameInput;
      item.before(label);
    }
  });
});
