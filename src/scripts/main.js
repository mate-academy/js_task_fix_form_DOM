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

function formatAllText(placeholder) {
  let newText = '';
  const indexOfUpperSymbol = placeholder
    .indexOf(placeholder.match(/[A-Z]/g));

  if (indexOfUpperSymbol > 0) {
    newText = formatingWord(indexOfUpperSymbol, placeholder);
  } else {
    newText = replacePlaceHolder(placeholder, 1);
  }

  return newText;
}

const dataInputs = document.querySelectorAll('.field-text');

for (let i = 0; i < dataInputs.length; i++) {
  const placeholderValue = dataInputs[i].name;

  const inputParent = dataInputs[i].parentElement;

  const label = document.createElement('label');

  inputParent.prepend(label);
  label.htmlFor = dataInputs[i].id;
  label.className = 'field-label';
  label.innerText = formatAllText(placeholderValue);

  dataInputs[i].placeholder = `${formatAllText(placeholderValue)}`;
}
