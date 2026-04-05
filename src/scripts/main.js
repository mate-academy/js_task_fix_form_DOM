'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    const inputs = form.querySelectorAll('input');

    inputs.forEach((input) => {
      const wrapper = input.parentElement;

      const label = document.createElement('label');

      label.classList.add('field-label');
      label.setAttribute('for', input.id);

      const labelText =
        input.name.charAt(0).toUpperCase() + input.name.slice(1);

      label.textContent = labelText;

      wrapper.insertBefore(label, input);

      input.setAttribute('placeholder', labelText);
    });
  });
});
