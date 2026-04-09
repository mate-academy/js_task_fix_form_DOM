'use strict';

const inputs = [...document.getElementsByClassName('field-text')];

for (const input of inputs) {
  const nodeValue = input.attributes.name.nodeValue;

  input.placeholder = nodeValue.charAt(0).toUpperCase() + nodeValue.slice(1);

  input.insertAdjacentHTML(
    'beforebegin',
    `<label class='field-label'>
    ${input.placeholder}</label>`,
  );
}
