'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach(input => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = splitCamelCase(input.name);

  input.setAttribute('placeholder', splitCamelCase(input.name));
  input.parentElement.append(label);
});

function splitCamelCase(camelWords) {
  const splited = camelWords.replace(/([a-z])([A-Z])/g, '$1 $2');

  return splited[0].toUpperCase() + splited.slice(1);
}
