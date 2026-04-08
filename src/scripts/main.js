document.addEventListener('DOMContentLoaded', function () {
  // Get all input elements from the forms
  const inputs = document.querySelectorAll('form input');

  // Loop through each input element
  inputs.forEach(function (input) {
    // Get the name attribute of the input
    const inputName = input.getAttribute('name');

    if (inputName) {
      // Create a label element
      const label = document.createElement('label');

      label.classList.add('field-label');
      label.setAttribute('for', input.id);

      label.textContent =
        inputName.charAt(0).toUpperCase() + inputName.slice(1);

      // Set the placeholder attribute of the input
      input.setAttribute('placeholder', label.textContent);

      // Insert the label element before the input
      input.parentElement.insertBefore(label, input);
    }
  });
});
