'use strict';

// Get all input elements inside the form
const formInputs = document.querySelectorAll('form input');

// Loop through each input to apply the fixes
formInputs.forEach((input) => {
  const inputName = input.name;

  if (inputName) {
    const capitalizedName =
      inputName.charAt(0).toUpperCase() + inputName.slice(1);

    // Set the placeholder for the input field
    input.placeholder = capitalizedName;

    // Create the label element
    const label = document.createElement('label');

    label.classList.add('field-label');

    label.setAttribute('for', input.id);

    label.textContent = capitalizedName;

    // Append the label to the input's parent container
    input.parentElement.insertBefore(label, input);
  }
});
