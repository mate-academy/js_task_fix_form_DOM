'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(function(input) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = transformToCase(input.name, 'upperCase');
  input.placeholder = transformToCase(input.name, 'camelCase');

  input.after(label);
});

function transformToCase(word, condition) {
  const result = [];
  let oneWord = true;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      oneWord = false;
      result.push(word.slice(0, i));
      result.push(word.slice(i));
    }
  }

  if (condition === 'upperCase') {
    if (oneWord) {
      return word.toUpperCase();
    }

    return result.join(' ').toUpperCase();
  }

  if (condition === 'camelCase') {
    if (oneWord) {
      const temp = word.split('');

      temp[0] = temp[0].toUpperCase();

      return temp.join('');
    }

    for (let i = 0; i < result.length; i++) {
      const temp = result[i].split('');

      temp[0] = temp[0].toUpperCase();
      result[i] = temp.join('');
    }

    return result.join(' ');
  }
}
