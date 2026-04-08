'use strict';
function capitalize(string) {
  return string[0].toUpperCase()
     + string.split(/(?=[A-Z])/).join(' ')
       .slice(1).toLowerCase();
}

const inputs = document.querySelectorAll('input');

[...inputs].forEach(input => {
  const label = document.createElement('label');

  label.className = `field-label`;
  label.htmlFor = input.id;
  label.textContent = capitalize(input.name);

  input.placeholder = capitalize(input.name);
  input.parentElement.append(label);
});
