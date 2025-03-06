'use strict';

// write code here
document.addEventListener('DOMContentLoaded', function () {
  const inputs = document.querySelectorAll('form input');

  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);

    label.textContent =
      input.name.charAt(0).toUpperCase() + input.name.slice(1);

    input.placeholder = label.textContent;

    input.parentElement.prepend(label);
  });
});
