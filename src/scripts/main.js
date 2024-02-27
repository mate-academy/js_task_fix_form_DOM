'use strict';

const inputs = document.querySelectorAll('.field-text');
const parents = document.querySelectorAll('.field');

for (let input = 0; input < inputs.length; input++) {
  const label = document.createElement('label');

  const id = inputs[input].getAttribute('id');

  const newContent = inputs[input].getAttribute('name');

  const firstCharUp = newContent[0].toUpperCase();

  let restOfString = '';

  for (let i = 1; i < newContent.length; i++) {
    if (newContent[i] === newContent[i].toUpperCase()) {
      restOfString += ' ';
    }

    restOfString += newContent[i];
  }

  const finalString = `${firstCharUp}${restOfString}`;

  label.setAttribute('class', 'field-label');

  label.setAttribute('for', `${id}`);

  label.textContent = finalString;

  inputs[input].setAttribute('placeholder', finalString);

  parents[input].appendChild(label, inputs[input]);
}
