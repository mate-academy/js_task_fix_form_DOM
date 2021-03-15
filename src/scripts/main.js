'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((input, i) => {
  const htmlInnerValue = `
    <label class="field-label" for="${input.id}">
      ${input.name.replace(/Name/, ' Name')}
    </label>
  `;

  inputs[i].insertAdjacentHTML('beforebegin', htmlInnerValue);

  inputs[i].placeholder = formatWord(i, 'Name');
});

function formatWord(i, pattern) {
  return inputs[i].name[0].toUpperCase() + inputs[i].name
    .slice(1).replace(pattern, ` ${pattern}`);
}
