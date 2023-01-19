'use strict';

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const inputName = input.getAttribute('name');
  const splitInput = inputName.split('N');
  const joinedInput = splitInput.join(' N');

  input.insertAdjacentHTML('afterend', `
    <label class="field-label">
      ${joinedInput}
    </label>
  `);

  input.placeholder = (joinedInput[0].toUpperCase() + joinedInput.slice(1));
}
