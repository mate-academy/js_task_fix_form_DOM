'use strict';

const collectionInput = [...document.querySelectorAll('input')];

collectionInput.forEach((input) => {
  const label = document.createElement('label');
  const capitalizedName = input.name[0].toUpperCase() + input.name.slice(1);

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;
  input.placeholder = capitalizedName;
  input.parentElement.append(label);
});
