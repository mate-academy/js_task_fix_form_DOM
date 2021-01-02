'use strict';

const allInputs = document.querySelectorAll('input');

for (const input of allInputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.innerHTML = unstickWords(input.name);

  input.placeholder = unstickWords(input.name);
  input.parentElement.append(label);
}

function unstickWords(string) {
  return ((string[0].toUpperCase() + string.slice(1))
    .replace(/([A-Z])/g, ' $1')).slice(1);
}
