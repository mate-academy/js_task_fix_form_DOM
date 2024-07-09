'use strict';

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const label = document.createElement('label');
    const nameUpCh = input.name.charAt(0).toUpperCase() + input.name.slice(1);

    label.classList.add('field-label');
    label.setAttribute('for', input.id);
    label.textContent = nameUpCh;
    input.setAttribute('placeholder', nameUpCh);

    input.parentNode.insertBefore(label, input);
  });
});
