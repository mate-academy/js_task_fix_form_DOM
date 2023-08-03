'use strict';

function fixForm() {
  const forms = document.querySelectorAll('form');

  for (const form of forms) {
    const inputs = form.querySelectorAll('input');

    for (const input of inputs) {
      const label = document.createElement('label');

      label.htmlFor = input.id;
      label.className = 'field-label';

      const inputName = input.name;

      const formattedName = inputName.replace(/([A-Z])/g, ' $1');

      const placeholderFormatted = formattedName
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      label.textContent = placeholderFormatted;
      input.placeholder = placeholderFormatted;

      input.parentNode.appendChild(label);
    }
  }
}

fixForm();
