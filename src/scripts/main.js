'use strict';

const inputs = document.querySelectorAll('input');

for (const element of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', element.id);
  label.textContent = element.name;
  element.setAttribute('placeholder', element.name);
  element.parentElement.append(label);

  const placeholderText = element.name;
  let firstPart = '';
  let index = 0;

  for (let i = 0; i < placeholderText.length; i++) {
    if (placeholderText[i] !== placeholderText[i].toUpperCase()) {
      firstPart += placeholderText[i];
      index++;
    } else {
      break;
    }
  }

  const textWithCapital = firstPart.replace(
    firstPart[0],
    firstPart[0].toUpperCase()
  );
  const secondPart = placeholderText.slice(index, placeholderText.length);

  element.placeholder = secondPart.length ? textWithCapital
    + ' '
    + secondPart : textWithCapital;
}
