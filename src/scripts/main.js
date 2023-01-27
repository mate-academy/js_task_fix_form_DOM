'use strict';

const inputs = document.querySelectorAll('.field-text');

for (const input of inputs) {
  const label = document.createElement('label');

  label.classList.add('field-label');

  label.setAttribute('for', input.getAttribute('id'));

  label.textContent = input.getAttribute('name');

  let placeholder = input.getAttribute('name');

  const indexLargeLetter = Array.from(placeholder).findIndex(
    letter => letter === letter.toUpperCase());

  if (indexLargeLetter !== -1) {
    const partOfPlaceholder = placeholder.slice(0, indexLargeLetter);
    const partOfPlaceholder2 = placeholder.slice(indexLargeLetter);

    placeholder = `${partOfPlaceholder[0].toUpperCase()
    + partOfPlaceholder.slice(1)}` + ' '
    + `${partOfPlaceholder2[0].toUpperCase() + partOfPlaceholder2.slice(1)}`;
  } else {
    placeholder = input.getAttribute('name')[0].toUpperCase()
    + input.getAttribute('name').slice(1);
  }

  input.setAttribute('placeholder', placeholder);

  const parentOfInput = input.parentElement;

  parentOfInput.append(label);
}
