'use strict';

const inputs = document.querySelectorAll('.field-text');

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');
  const inputName = camelToSeparate(inputs[i].getAttribute('name'));
  let placeholder = inputName[0].toUpperCase() + inputName.substring(1);



  label.setAttribute('for', inputs[i].getAttribute('id'));
  label.className = 'field-label';
  label.textContent = inputName;
  inputs[i].after(label);

  inputs[i].setAttribute('placeholder', placeholder);
}

function camelToSeparate(word) {
  if (word.length === 0) {
    return '';
  }

  let wordArr = word.split('');

  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i].toUpperCase() === wordArr[i]) {
      wordArr.splice(i, 0, ' ');
      i++;
    }
  }

  return wordArr.join('');
}
