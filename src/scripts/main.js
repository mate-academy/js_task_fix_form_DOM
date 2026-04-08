document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('form input');

  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.className = 'field-label';
    label.htmlFor = input.id;

    const inputName = input.name;

    const words = inputName.replace(/([A-Z])/g, ' $1').split(' ');

    const titleCaseText = words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    label.textContent = titleCaseText.toUpperCase();
    input.placeholder = titleCaseText;

    input.insertAdjacentElement('beforebegin', label);
  });
});
