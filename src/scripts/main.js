'use strict';

[...document.querySelectorAll('.field-text')]
  .map(input => {
    const lable = `
    <label class="field-label" for="${input.id}">
      ${separateWords(input.name)}
    </label>
    `;

    input.placeholder = `${separateWords(input.name)}`;
    input.insertAdjacentHTML('beforebegin', lable);
  });

function separateWords(string) {
  return string.replace(/([A-Z])/g, ' $1');
};
