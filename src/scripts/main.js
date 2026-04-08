'use strict';

// write code here
const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  for (const element of form.elements) {
    if (
      !element.name ||
      element.type ===
        !['INPUT', 'TEXTAREA', 'SELECT'].includes(element.tagName)
    ) {
      continue;
    }

    const id = element.id || element.name;

    element.id = id;

    const hasLabel = document.querySelector(`label[for="${id}"]`);

    if (hasLabel) {
      continue;
    }

    const label = document.createElement('label');

    label.setAttribute('for', id);

    const labelText = element.name
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase());

    label.textContent = `${labelText}:`;

    const placeholder = label.textContent;

    element.placeholder = placeholder.replace(/:\s*$/, '');
    element.parentNode.insertBefore(label, element);
  }
});
