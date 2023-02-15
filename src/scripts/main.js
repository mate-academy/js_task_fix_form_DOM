'use strict';

const inputRows = document.querySelectorAll('input');

function separateAndCapitalize(str) {
  return str.split(/(?=[A-Z])/).join(' ').replace(/(^|\s)\S/g,
    function(a) {
      return a.toUpperCase();
    }
  );
}

for (const input of inputRows) {
  input.placeholder = separateAndCapitalize(input.name);

  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = (separateAndCapitalize(input.name).toUpperCase());
  input.parentElement.append(label);
}
