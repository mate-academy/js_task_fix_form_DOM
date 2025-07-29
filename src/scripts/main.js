document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const inputs = form.querySelectorAll('input');

  inputs.forEach(input => {
    const inputName = input.name;
    const inputId = input.id;

    if (!inputName || !inputId) return;

    const existingLabel = form.querySelector(`label[for="${inputId}"]`);
    if (existingLabel) return;

    const label = document.createElement('label');
    label.className = 'field-label';
    label.setAttribute('for', inputId);
    label.textContent = inputName.charAt(0).toUpperCase() + inputName.slice(1);

    input.placeholder = inputName.charAt(0).toUpperCase() + inputName.slice(1);

    input.parentNode.insertBefore(label, input);
  });
});
