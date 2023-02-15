'use strict';

const inputRows = document.querySelectorAll('input');

function separateAndCapitalize(str) {
  return str.split(/(?=[A-Z])/).join(' ').replace(/(^|\s)\S/g,
    function(a) {
      return a.toUpperCase();
    }
  );
}

for (const index of inputRows) {
  index.placeholder = separateAndCapitalize(index.name);

  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = index.id;
  label.textContent = (separateAndCapitalize(index.name).toUpperCase());
  index.parentElement.append(label);
}
