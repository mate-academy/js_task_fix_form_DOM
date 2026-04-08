'use strict';

// write code here
const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const formInputs = Array.from(form.elements).filter(
    (input) => input.tagName !== 'BUTTON',
  );

  formInputs.forEach((input) => {
    input.setAttribute('placeholder', input.name);
  });

  formInputs.forEach((input) => {
    if (!input.id) {
      return;
    }

    const label = document.createElement('label');

    label.setAttribute('for', input.id);
    label.textContent = input.name || 'Label';

    input.parentNode.insertBefore(label, input);
  });
});
