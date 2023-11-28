'use strict';

const forms = document.querySelectorAll('form');

forms.forEach(form => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach(input => {
    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);

    label.textContent = input.name
      .replace(/([A-Z])/g, ' $1').trim().toUpperCase();

    input.placeholder = input.name
      .replace(/([A-Z])/g, ' $1').trim()
      .split(' ').map(word => word.charAt(0)
        .toUpperCase() + word.slice(1)
        .toLowerCase()).join(' ');

    input.parentElement.appendChild(label);
  });
});
