'use strict';

// write code here
// Get all input elements within the form
const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  // Create a label
  const label = document.createElement('label');

  const labelName = input.name;

  label.className = 'field-label'; // Assign class for CSS styling

  label.htmlFor = input.id; // Link label to the input

  label.textContent = input.name.toUpperCase();

  // Set the input's placeholder
  input.placeholder =
    labelName.charAt(0).toUpperCase() + labelName.slice(1).toLowerCase();

  // Append the label to the same parent container as the input
  input.parentNode.insertBefore(label, input);
});
