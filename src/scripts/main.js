'use strict';

// Get all inputs inside the form, excluding submit buttons
const inputs = document.querySelectorAll('form input:not([type="submit"])');

// Loop through each input to add label and placeholder
inputs.forEach(input => {
  // Capitalize first letter of input name for label and placeholder
  const labelText = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  // Create label element
  const label = document.createElement('label');
  label.className = 'field-label'; // for CSS styling
  label.setAttribute('for', input.id); // associate label with input
  label.textContent = labelText;

  // Set placeholder for input
  input.placeholder = labelText;

  // Insert label **before** the input
  input.parentNode.insertBefore(label, input);
});
