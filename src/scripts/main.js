'use strict';

const inputs = [...document.querySelectorAll('input')];

const labels = inputs.map(input => {
  input.name = input.name
    .split('')
    .map(wordName => {
      if (wordName === wordName.toLocaleUpperCase()) {
        return ` ${wordName}`;
      }

      return wordName;
    })
    .join('')
    .trim();

  input.placeholder = input.name[0].toLocaleUpperCase() + input.name.slice(1);

  return `<label 
    class="field-label"
    for="${input.id}"
  >
    ${input.name}
  </label>
  `;
}
);

for (let i = 0; i < inputs.length; i++) {
  inputs[i].insertAdjacentHTML('beforebegin', labels[i]);
}
