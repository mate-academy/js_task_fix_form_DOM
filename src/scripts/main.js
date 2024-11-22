'use strict';

// write code here
document.addEventListener('DOMContentLoaded', function () {
  const inputs = document.querySelectorAll('form input');

  inputs.forEach((input) => {
    const closeParent = input.parentElement;
    const inputName = input.getAttribute('name');
    const formattedName = inputName.replace(/([a-z])([A-Z])/g, '$1 $2');
    const capitalizedInputName =
      formattedName.charAt(0).toUpperCase() + formattedName.slice(1);

    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);
    label.textContent = capitalizedInputName;

    input.setAttribute('placeholder', capitalizedInputName);

    closeParent.insertBefore(label, input);
  });
});
