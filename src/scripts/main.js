'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    const inputs = form.querySelectorAll('input');

    inputs.forEach(input => {
      const inputName = input.getAttribute('name');
      const label = document.createElement('label');

      label.setAttribute('class', 'field-label');
      label.setAttribute('for', input.id);

      label.textContent
        = inputName.charAt(0).toUpperCase() + inputName.slice(1);

      input.setAttribute('placeholder',
        inputName
          .charAt(0)
          .toUpperCase() + inputName.slice(1));

      input.parentNode.insertBefore(label, input);
    });
  });
});
