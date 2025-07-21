'use strict';

const formatLabel = (str) => {
  str
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .split(' ')
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(' ');

  return str;
};

const enhanceFormInputs = () => {
  const inputs = document.querySelectorAll('form input');

  inputs.forEach((input) => {
    // eslint-disable-next-line no-shadow
    const { name, id, parentElement } = input;

    // eslint-disable-next-line curly
    if (!name || !parentElement) return;

    const labelText = formatLabel(name);
    const inputId = id || `input-${name}`;
    const label = document.createElement('label');

    label.className = 'field-label';
    label.htmlFor = inputId;
    label.textContent = labelText;

    input.id ||= inputId;
    input.placeholder = labelText;

    parentElement.insertBefore(label, input);
  });
};

enhanceFormInputs();
