'use strict';

// Select all forms on the page
const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    // Create label
    const label = document.createElement('label');

    label.className = 'field-label';
    label.setAttribute('for', input.id);

    // Capitalize input name for label text
    const labelText = input.name
      ? input.name.charAt(0).toUpperCase() + input.name.slice(1)
      : 'Field';

    label.textContent = labelText;

    // Set placeholder
    input.placeholder = labelText;

    // Insert label before input
    input.parentElement.insertBefore(label, input);
  });
});
