'use strict';

const inputs = document.querySelectorAll('.field-text');

[...inputs].forEach(input => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.name;

  input.parentElement.append(label);

  function spliter(x) {
    let word = '';
    const array = x.split('');

    for (let i = 0; i < array.length; i++) {
      if (array[i] === array[i].toLowerCase()) {
        word += array[i];
      } else {
        word += ' ' + array[i];
      }
    }

    word = word[0].toUpperCase()
    + word.slice(1);

    return word;
  };

  input.setAttribute('placeholder', spliter(input.name));
});
