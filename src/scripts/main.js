'use strict';

const divideWords = string => {
  const words = [];
  let index = 0;

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (char === char.toUpperCase()) {
      const word = string.slice(index, i);

      words.push(word);
      index = i;
    }
  }

  words.push(string.slice(index));

  return words.join(' ');
};

document.querySelectorAll('input').forEach(input => {
  const inputId = input.id;
  const inputName = divideWords(input.name);
  const label = document.createElement('label');

  label.className = 'field-label';
  label.innerHTML = divideWords(inputName);
  label.htmlFor = inputId;

  input.placeholder = inputName[0].toUpperCase() + inputName.slice(1);

  input.parentElement.append(label);
});
