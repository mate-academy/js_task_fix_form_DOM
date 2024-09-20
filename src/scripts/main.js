'use strict';

// write code here
// Select all the input elements inside the form tags
const formInputs = document.querySelectorAll('.login-wrap form input');

// Loop over each input element
formInputs.forEach((input) => {
  // Create a label element
  const label = document.createElement('label');

  // Set the class of the label to 'field-label'
  label.className = 'field-label';

  // Set the 'for' attribute to match the input's id
  label.setAttribute('for', input.id);

  // Capitalize the input's name and set it as the label textContent
  label.textContent = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  // Set the placeholder of the input based on its name (capitalized)
  input.placeholder = label.textContent;

  // Append the label to the parent container of the input
  input.parentNode.insertBefore(label, input);
});
