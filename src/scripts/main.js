'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((input) => {
  const inputName = input.getAttribute('name');
  const inputId = input.getAttribute('id');

  input.insertAdjacentHTML(
    'beforebegin',
    `<label class='field-label' for=${inputId}>
      ${formatString(inputName)}
    </label>`,
  );

  input.setAttribute('placeholder', formatString(inputName));
});

function formatString(str) {
  if (!str) {
    return '';
  }

  const spacedString = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  return spacedString.charAt(0).toUpperCase() + spacedString.slice(1);
}
