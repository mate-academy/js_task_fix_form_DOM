'use strict';

// write code here
const inputs = Array.from(document.querySelectorAll('form input'));

inputs.map((input) => {
  const label = document.createElement('label');
  let nameAttr = input.getAttribute('name');
  const idAttr = input.getAttribute('id');

  const idx = nameAttr.split('').indexOf('N');

  if (idx > 0) {
    nameAttr = nameAttr.substring(0, idx) + ' ' + nameAttr.substring(idx);
  }

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', idAttr);
  label.textContent = nameAttr.toUpperCase();

  input.setAttribute(
    'placeholder',
    nameAttr[0].toUpperCase() + nameAttr.substring(1).toLowerCase(),
  );
  input.parentNode.insertBefore(label, input);
});
