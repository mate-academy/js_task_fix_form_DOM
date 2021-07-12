'use strict';

// write code here
const inputs = [...document.querySelectorAll('input')];
const stringToNewFormat = function(string) {
  const newWordIndex = [...string].findIndex(letter => {
    return letter === letter.toUpperCase();
  });
  let formatedString = string.charAt(0).toUpperCase() + string.slice(1);

  if (newWordIndex >= 0) {
    formatedString = formatedString.slice(0, newWordIndex)
    + ' ' + formatedString.slice(newWordIndex).toLowerCase();
  }

  return formatedString;
};

for (const input of inputs) {
  const label = document.createElement('label');
  const container = input.parentElement;

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = stringToNewFormat(input.name);
  input.placeholder = stringToNewFormat(input.name);

  container.append(label);
}
