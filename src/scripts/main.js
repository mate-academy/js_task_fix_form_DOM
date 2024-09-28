'use strict';

const inputElements = document.querySelectorAll('input');

function capitalizeText(currText) {
  let resultText = currText.slice(0, 1).toUpperCase();

  for (let i = 1; i < currText.length; i++) {
    if (currText[i] === currText[i].toUpperCase()) {
      resultText += ' ' + currText[i].toLowerCase();
      i++;
    }
    resultText += currText[i];
  }

  return resultText;
}

for (const inputElement of inputElements) {
  const elementName = capitalizeText(inputElement.name);

  inputElement.placeholder = elementName;

  inputElement.insertAdjacentHTML('beforebegin', `
  <label class="field-label" for="${inputElement.id}">
  ${elementName.toUpperCase()}
  </label>
`);
}
