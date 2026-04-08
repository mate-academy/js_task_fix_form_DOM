'use strict';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('input').forEach((input) => {
    const inputParent = input.parentNode;

    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);
    label.textContent = formatLabelText(input.name);

    input.placeholder = formatLabelText(input.name);

    inputParent.insertBefore(label, input);
  });
});

function formatLabelText(text) {
  const labels = {
    firstName: 'First Name',
    lastName: 'Last Name',
  };

  return labels[text] || text.charAt(0).toUpperCase() + text.slice(1);
}
