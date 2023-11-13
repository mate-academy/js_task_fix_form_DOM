'use strict';

const inputs = document.querySelectorAll('.field-text');

const capitalizeCamelCase = (string) => {
  if (!string) {
    return;
  }

  return string[0].toUpperCase()
        + string.slice(1).replace(/([a-z])([A-Z])/g, '$1 $2');
};

for (const input of inputs) {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.htmlFor = input.id;
  label.innerText = capitalizeCamelCase(input.name);
  input.before(label);
  input.placeholder = capitalizeCamelCase(input.name);
}
