'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  input.parentElement.insertAdjacentHTML('beforeend', `
    <label class="field-label" for="#${input.id}">
      ${capitalizeName(input.name)}
    </label>
  `);

  input.placeholder = capitalizeName(input.name);
});

function capitalizeName(str) {
  const camelToTitle = str.replace(/([A-Z])/g, ' $1');
  const result = camelToTitle[0].toUpperCase() + camelToTitle.slice(1);

  return result;
}
