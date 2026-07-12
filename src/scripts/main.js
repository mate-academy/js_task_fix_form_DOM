'use strict';

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  form.querySelectorAll('input').forEach((input) => {
    const label = document.createElement('label');

    label.className = 'field-label';

    const forAttribute = document.createAttribute('for');

    input.placeholder =
      input.name.charAt(0).toUpperCase() + input.name.slice(1);

    label.textContent = input.name;
    forAttribute.value = input.id;
    label.setAttributeNode(forAttribute);

    input.parentElement.appendChild(label);
  });
});
