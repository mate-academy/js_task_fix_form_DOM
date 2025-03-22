'use strict';

// Get all inputs from the forms
const inputs = document.querySelectorAll('form input');

// Process each input
inputs.forEach((input) => {
  // Create label element
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.name;

  // Set placeholder (capitalized)
  input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  // Add label before input in its parent container
  input.parentElement.insertBefore(label, input);
});
