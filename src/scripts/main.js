'use strict';

const inputs = document.querySelectorAll('.field-text');
const parents = document.querySelectorAll('.field');

for (let input = 0; input < inputs.length; input++) {
  const label = document.createElement('label');

  const id = inputs[input].getAttribute('id');

  const newContent = inputs[input].getAttribute('name');

  label.setAttribute('class', 'field-label');

  label.setAttribute('for', `${id}`);

  label.textContent = newContent;

  const placeholder = inputs[input].getAttribute('name');

  const newPlhl = placeholder.charAt(0).toUpperCase()
  + placeholder.slice(1).toLowerCase();

  inputs[input].setAttribute('placeholder', newPlhl);

  parents[input].appendChild(label, inputs[input]);
}
