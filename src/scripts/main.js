'use strict';

const inputs = document.querySelectorAll('.field-text');

for (const input of inputs) {
  const label = document.createElement('label');

  label.classList.add('field-label');

  label.setAttribute('for', input.getAttribute('id'));

  let labelName = input.getAttribute('name');

  const indexLargeLetterLabel = Array.from(labelName).findIndex(
    letter => letter === letter.toUpperCase());

  if (indexLargeLetterLabel !== -1) {
    const partOfLabel = labelName.slice(0, indexLargeLetterLabel);
    const partOfLabel2 = labelName.slice(indexLargeLetterLabel);

    labelName = `${partOfLabel + ' ' + partOfLabel2}`;
  }

  label.textContent = labelName.toLowerCase();

  let placeholder = input.getAttribute('name');

  const indexLargeLetterPlaceholder = Array.from(placeholder).findIndex(
    letter => letter === letter.toUpperCase());

  if (indexLargeLetterPlaceholder !== -1) {
    const partOfPlaceholder = placeholder.slice(0, indexLargeLetterPlaceholder);
    const partOfPlaceholder2 = placeholder.slice(indexLargeLetterPlaceholder);

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
