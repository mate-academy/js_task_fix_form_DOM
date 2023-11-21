'use strict';

const inputElemnts = Array.from(document.querySelectorAll('input[name]'));

for (const inputElement of inputElemnts) {
  const attributeNameValue = inputElement.getAttribute('name');

  const label = `
    <label class="field-label" for="${inputElement.getAttribute('id')}">
      ${attributeNameValue}
    </label>
  `;

  inputElement.setAttribute('placeholder', attributeNameValue.toUpperCase());
  inputElement.insertAdjacentHTML('beforebegin', label);
}
