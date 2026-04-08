'use strict';

// Get all input elements on the page
const inputs = document.querySelectorAll('form input');

// Capitalize first letter of a string
function capitalize(str) {
  if (!str) {
    return '';
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Loop through each input
inputs.forEach((input) => {
  const parentEl = input.parentElement;

  if (!parentEl) {
    return;
  } // Skip if no parent container

  // Ensure input has an id to associate with label
  if (!input.id) {
    input.id = `input-${Math.random().toString(36).slice(2, 9)}`;
  }

  // Create label
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);

  label.textContent = capitalize(input.name || '');
  // fallback to empty if no name

  // Set placeholder
  // input.placeholder = capitalize(input.name
  // || '');
  input.setAttribute('placeholder', capitalize(input.name || ''));

  // Append label to parent container
  parentEl.appendChild(label);
});
