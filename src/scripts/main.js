'use strict';

const inputs = document.querySelectorAll('input');

const toSentenceCase = (camel) => {
  const camelCase = camel.replace(/([a-z])([A-Z])/g, '$1 $2');

  return camelCase[0].toUpperCase() + camelCase.slice(1);
};

inputs.forEach(input => {
  const inputName = toSentenceCase(input.name);
  const label = `
    <label class="field-label" for="${input.id}">
      ${inputName}
    </label>
  `;

  input.placeholder = inputName;
  input.closest('.field').innerHTML += label;
});
