'use strict';

const inputs = document.querySelectorAll('input');

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

[...inputs].forEach(input => {
  input.setAttribute('placeholder', divideWords(input.name)[0]
    .toUpperCase() + divideWords(input.name).slice(1));
});

[...inputs].forEach(label => {
  label.insertAdjacentHTML(
    'beforebegin', `
    <label for="${label.id}" class="field-label">
      ${divideWords(label.name)[0]
    .toUpperCase() + divideWords(label.name).slice(1)}
    </label>`
  );
});
