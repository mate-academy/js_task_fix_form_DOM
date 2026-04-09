'use strict';

const inputFields = document.querySelectorAll('.field-text');

function convertCamelCaseToWords(camelCaseString) {
  return camelCaseString
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
    .replace(/^./, match => match.toUpperCase());
}

// Loop through each input element
inputFields.forEach(inputElement => {
  // Retrieve the 'name' and 'id' attributes of the input
  const inputName = inputElement.getAttribute('name');
  const inputId = inputElement.getAttribute('id');

  // Create a label element
  const inputLabel = document.createElement('label');
  const labelForAttribute = inputId;

  // Set attributes and text content for the label
  inputLabel.className = 'field-label';
  inputLabel.setAttribute('for', labelForAttribute);
  inputLabel.textContent = inputName;

  // Insert the label after the input element
  inputElement.after(inputLabel);

  inputElement.placeholder = convertCamelCaseToWords(inputName);
});
