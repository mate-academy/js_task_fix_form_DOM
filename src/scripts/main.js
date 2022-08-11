'use strict';

// write code here
const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const inputId = input.id; // get input id
  const textLabel = input.name; // get input name
  /* create element and add class, attr for,
    text, placeholder */
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', inputId);
  label.textContent = textLabel;

  const placeholderValue = capitalizeFirstLetter(input.name);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  input.before(label);
  input.setAttribute('placeholder', placeholderValue);
});
