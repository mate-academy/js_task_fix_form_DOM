'use strict';

function decorateFormInputs() {
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    const inputs = form.querySelectorAll('input');

    inputs.forEach((input) => {
      const nameAttr = input.getAttribute('name');
      let idAttr = input.getAttribute('id');

      if (!nameAttr) {
        return;
      }

      if (!idAttr) {
        idAttr = nameAttr;
        input.setAttribute('id', idAttr);
      }

      const label = document.createElement('label');

      label.className = 'field-label';
      label.setAttribute('for', idAttr);
      label.textContent = nameAttr;

      const capitalized = nameAttr.charAt(0).toUpperCase() + nameAttr.slice(1);

      input.setAttribute('placeholder', capitalized);

      input.parentElement.insertBefore(label, input);
    });
  });
}

window.addEventListener('DOMContentLoaded', decorateFormInputs);
