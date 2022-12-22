'use strict';

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.setAttribute('textContent', input.name);
  input.parentElement.append(label);

  let capitalized = input.name.charAt(0).toUpperCase()
  + input.name.slice(1);

  if (capitalized.includes('Name')) {
    capitalized = capitalized.split('t').join('t ');
  }

  input.setAttribute('placeholder', capitalized);
}
