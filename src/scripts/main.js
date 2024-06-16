document.addEventListener('DOMContentLoaded', () => {
  function camelCaseToTitleCase(camelCaseText) {
    const words = camelCaseText.replace(/([A-Z])/g, ' $1').split(' ');

    const titleCaseText = words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return titleCaseText.join(' ');
  }

  const inputs = document.querySelectorAll('form input');

  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.className = 'field-label';
    label.htmlFor = input.id;

    const inputName = input.name;

    const capitalizedInputName = camelCaseToTitleCase(inputName);

    label.textContent = capitalizedInputName.toUpperCase();
    input.placeholder = capitalizedInputName;

    input.insertAdjacentElement('beforebegin', label);
  });
});
