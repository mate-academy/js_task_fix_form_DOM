'use strict';

const formList = document.querySelectorAll('form input');

formList.forEach((input) => {
  const nameAttr = input.getAttribute('name');
  const label = document.createElement('label');

  function camelCaseToWords(camelCase) {
    return camelCase
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase())
      .toLowerCase()
      .replace(/^./, (str) => str.toUpperCase());
  }

  const placeholderName = camelCaseToWords(nameAttr);

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = placeholderName;

  input.parentNode.insertBefore(label, input);
  input.setAttribute('placeholder', placeholderName);
});
