/* eslint-disable no-console */

'use strict';

// write code here
const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
  input.setAttribute("placeholder", capitalize(input.name));

  const label = document.createElement("label");

  label.textContent = input.name;
  label.classList.add("field-label");
  label.setAttribute("for", input.id);

  const parentElement = input.parentElement;

  parentElement.appendChild(label);
});

function capitalize (namePlaceholder) {
  const firstLetter = namePlaceholder.charAt(0).toUpperCase();
  const restOfName = namePlaceholder.slice(1);

  const newName = firstLetter + restOfName;

  return newName;
}
