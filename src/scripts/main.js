document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('form input');

  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.className = 'field-label';
    label.htmlFor = input.id;

    const inputName = input.name;

    const capitalizedInputName =
      inputName.charAt(0).toUpperCase() + inputName.slice(1);

    label.textContent = inputName.toUpperCase();
    input.placeholder = capitalizedInputName;

    input.insertAdjacentElement('beforebegin', label);
  });
});
