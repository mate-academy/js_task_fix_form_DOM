'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  let placeholder = input.name;

  for (let i = 0; i < placeholder.length; i++) {
    const lowerName = placeholder.toLocaleLowerCase();

    if (placeholder[i] !== lowerName[i]) {
      const adaptedPhrase = placeholder.substring(0, i) + ' '
        + placeholder.slice(i);

      placeholder = adaptedPhrase;
      i = i + 1;
    }
  }

  input.placeholder = placeholder[0].toLocaleUpperCase() + placeholder.slice(1);

  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;
  input.before(label);
});
