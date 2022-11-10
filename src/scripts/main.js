'use strict';

const fields = Array.from(document.querySelectorAll('input'));

fields.forEach(field => {
  const label = document.createElement('label');
  const names = field.getAttribute('name');

  label.className = 'field-label';

  label.for = field.getAttribute('id');
  label.textContent = addSpace(names);
  field.placeholder = names[0].toUpperCase() + names.slice(1);
  field.parentElement.append(label);
});

function addSpace(str) {
  let words = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] && str[i] === str[i].toUpperCase()) {
      words += ' ';
    }
    
    words += str[i];
  }

  return words;
}
