'use strict';

window.onload = function () {
  document.querySelectorAll('form').forEach((form) => {
    form.querySelectorAll('input').forEach((input) => {
      const label = document.createElement('label');

      label.classList.add('field-label');
      label.setAttribute('for', input.id);

      const labelText = input.name
        .split('')
        .map((char, index) => {
          if (char === char.toUpperCase() && index !== 0) {
            return ' ' + char;
          } else {
            return char;
          }
        })
        .join('');

      label.textContent = labelText.charAt(0).toUpperCase + labelText.slice(1);

      input.setAttribute('placeholder', label.textContent);

      input.parentNode.insertBefore(label, input);
    });
  });
};
