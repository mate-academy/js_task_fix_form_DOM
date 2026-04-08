'use strict';

// write code here

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const name1 = input.name;

    if (!name1) {
      return;
    }

    const label = document.createElement('label');

    label.setAttribute('for', input.id);
    label.classList.add('field-label');
    label.textContent = name1;

    input.placeholder = name1.charAt(0).toUpperCase() + name1.slice(1);

    input.parentNode.insertBefore(label, input);
  });
});
