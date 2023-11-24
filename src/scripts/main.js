'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const normalizedName = normilizedText(input.name);

  input.placeholder = normalizedName;

  input.insertAdjacentHTML('beforebegin',
    `
      <label class="field-label" for="${input.id}">
        ${normalizedName}
      </label>
    `,
  );
});

function normilizedText(text) {
  const upperCaseLetter = text.match(/[A-Z]/g) || null;

  let newText = text[0].toUpperCase() + text.slice(1);

  if (upperCaseLetter) {
    const index = text.indexOf(upperCaseLetter);

    newText = newText.slice(0, index) + ' ' + newText.slice(index);
  }

  return newText;
};
