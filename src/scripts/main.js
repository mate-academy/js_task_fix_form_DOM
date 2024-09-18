'use strict';

document.querySelectorAll('form').forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.className = 'field-label';

    label.htmlFor = input.id;

    const formattedText = input.name.replace(/([a-z])([A-Z])/g, '$1 $2');

    const formattedLabel =
      formattedText.charAt(0).toUpperCase() + formattedText.slice(1);

    label.textContent = formattedLabel;

    input.placeholder = formattedLabel;

    input.parentNode.insertBefore(label, input);
  });
});
