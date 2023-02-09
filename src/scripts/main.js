'use strict';

const fields = [...document.querySelectorAll('.field')];

const separateCamelCase = (text, caseType) => {
  const separatedWords = text.split(/(?=[A-Z])/).join(' ');

  switch (caseType) {
    case 'uppercase':
      return separatedWords.toUpperCase();
    case 'capitalize':
      const first = separatedWords.toLowerCase().slice(0, 1).toUpperCase();
      const rest = separatedWords.toLowerCase().slice(1);

      return first + rest;
  }
};

for (let i = 0; i < fields.length; i++) {
  const field = fields[i];
  const label = document.createElement('label');
  let input = field.children[0];
  const textOfInput = input.getAttribute('name');
  const idOfInput = input.getAttribute('id');

  field.style.paddingTop = '20px';
  label.setAttribute('for', idOfInput);
  label.innerHTML = separateCamelCase(textOfInput, 'uppercase');
  input.before(label);

  input = fields[i].children[1];

  input.setAttribute('placeholder',
    separateCamelCase(textOfInput, 'capitalize'));
}
