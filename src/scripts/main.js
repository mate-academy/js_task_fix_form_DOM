'use strict';

// Function to add labels and placeholders to form inputs
function fixForm() {
  // Get all input elements from the form
  const inputs = document.querySelectorAll('form input');

  // Loop through each input element
  inputs.forEach((input) => {
    // Create a label element
    const label = document.createElement('label');

    label.classList.add('field-label'); // Add class to label

    // Capitalize the first letter of the input name
    const inputName = input.name.charAt(0).toUpperCase() + input.name.slice(1);

    // Set the textContent of the label based on the input name
    label.textContent = inputName;
    // Set the for attribute for accessibility

    label.setAttribute('for', input.id);
    // Set placeholder for the input
    input.setAttribute('placeholder', inputName);

    // Append the label to the input's parent container
    input.parentElement.insertBefore(label, input);
  });
}

// Call the function to fix the form
fixForm();
