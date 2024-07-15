// 'use strict';

const allFields = document.querySelectorAll('input');

function makeSpace(text) {
  const result = text.charAt(0).toUpperCase() + text.slice(1);

  return result.replace(/([A-Z])/g, ' $1').trim();
}

allFields.forEach((inputs, index) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  label.setAttribute('for', inputs.id);

  inputs.placeholder = makeSpace(inputs.name);

  label.textContent = makeSpace(inputs.name).toUpperCase();

  inputs.parentNode.insertBefore(label, inputs);
});
