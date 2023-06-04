'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);

  const indexName = input.name.toLowerCase().indexOf('name');

  label.textContent = indexName !== -1
    ? input.name.slice(0, indexName)
      + ' ' + input.name.slice(indexName)
    : input.name;

  const placeholderText
  = label.textContent[0].toUpperCase()
  + label.textContent.slice(1);

  input.setAttribute('placeholder', placeholderText);

  input.before(label);
});
