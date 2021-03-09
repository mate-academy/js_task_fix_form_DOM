'use strict';

function replacePlaceHolder(
  placeholder, charIndexFrom, charIndexTo = placeholder.length
) {
  return placeholder[0]
    .toUpperCase() + placeholder.slice(charIndexFrom, charIndexTo);
}

function formatingWord(indexOfUpperSymbol, placeholderValue) {
  let newWord = '';

  const firstPart = replacePlaceHolder(
    placeholderValue, 1, indexOfUpperSymbol
  );

  const secondPart = replacePlaceHolder(
    placeholderValue, indexOfUpperSymbol, placeholderValue.length
  );

  newWord = `${firstPart} ${secondPart}`;

  return newWord;
}

const dataInputs = document.querySelectorAll('.field-text');

for (let i = 0; i < dataInputs.length; i++) {
  let placeholderValue = dataInputs[i].name;

  const inputParent = dataInputs[i].parentElement;

  const indexOfUpperSymbol = placeholderValue
    .indexOf(placeholderValue.match(/[A-Z]/g));

  if (indexOfUpperSymbol > 0) {
    placeholderValue = formatingWord(indexOfUpperSymbol, placeholderValue);
  } else {
    placeholderValue = replacePlaceHolder(placeholderValue, 1);
  }

  const label = document.createElement('label');

  inputParent.prepend(label);
  label.htmlFor = dataInputs[i].id;
  label.className = 'field-label';
  label.innerText = placeholderValue;

  dataInputs[i].placeholder = `${placeholderValue}`;
}
