'use strict';

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.classList.add('field-label');

    const inputId = input.id || input.name;

    label.setAttribute('for', inputId);

    function formatLabelName(str) {
      return str
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/^[a-z]/, (match) => match.toUpperCase());
    }

    const inputFieldName = input.name;

    label.textContent = inputFieldName
      ? `${formatLabelName(inputFieldName)}`
      : 'Unnamed input';

    input.parentNode.insertBefore(label, input);

    const placeholderText = inputFieldName
      ? formatLabelName(inputFieldName)
      : '';

    input.placeholder = placeholderText;
  });
});
