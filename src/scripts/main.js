'use strict';

// write code here
const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const label = `
    <label
      class="field-label"
      for=${input.id}
    >
    ${input.name.includes('Name')
    ? input.name.split('N').join(' n')
    : input.name}
    </label>
  `;

  input.insertAdjacentHTML('beforebegin', label);
};

for (const input of inputs) {
  let placeholder = input.name;

  if (placeholder.includes('Name')) {
    placeholder = placeholder.split('N').join(' n');
    input.placeholder = placeholder[0].toUpperCase() + placeholder.slice(1);
  } else {
    input.placeholder = placeholder[0].toUpperCase() + placeholder.slice(1);
  }
}
