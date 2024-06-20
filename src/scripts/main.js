'use strict';

const inputs = document.querySelectorAll('input');

function splitCamelCase(string) {
  const spacedString = string.replace(/([a-z])([A-Z])/g, '$1 $2');

  return spacedString.charAt(0).toUpperCase() + spacedString.slice(1);
}

inputs.forEach((item) => {
  const labelName = splitCamelCase(item.name);

  const label = `<label for="${item.id}" class="field-label">${labelName}</label>`;

  item.insertAdjacentHTML('beforebegin', label);

  item.placeholder = labelName;
});
