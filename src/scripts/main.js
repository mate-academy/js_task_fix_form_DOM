'use strict';

// write code here
document.querySelectorAll('form').forEach(form => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach(input => {
    const labelText = input.dataset.label;
    const id = input.id;

    if (!labelText || !id) return;

    const label = document.createElement('label');
    label.classList.add('field-label');
    label.setAttribute('for', id);
    label.textContent = labelText;

    input.placeholder = labelText.charAt(0).toUpperCase() + labelText.slice(1);

    const inputContainer = input.parentElement; 
    inputContainer.insertBefore(label, input);
  });
});


