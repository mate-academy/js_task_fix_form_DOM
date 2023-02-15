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

  const elementInDiv = document.createElement('label');

  elementInDiv.className = 'field-label';
  elementInDiv.htmlFor = index.id;
  elementInDiv.textContent = (separateAndCapitalize(index.name).toUpperCase());
  index.parentElement.append(elementInDiv);
}
