'use strict';

const camelToString = function(camelCase) {
  let string = camelCase.replace(/([A-Z])/g, ' $1');

  string = string[0].toUpperCase() + string.substring(1);

  return string;
};

const fields = document.querySelectorAll('.field');

for (let i = 0; i < fields.length; i++) {
  const input = fields[i].querySelector('.field-text');
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = `${input.id}`;
  label.textContent = camelToString(input.name);

  fields[i].prepend(label);

  input.placeholder = camelToString(input.name);
}
