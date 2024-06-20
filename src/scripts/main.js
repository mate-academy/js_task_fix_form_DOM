'use strict';

const inputs = [...document.querySelectorAll('input.field-text')];

inputs.forEach((input) => {
  const label = document.createElement('label');
  const placeholderContent = transformString(input.name);

  input.setAttribute('placeholder', placeholderContent);
  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = transformString(input.name);
  input.before(label);
});

function transformString(string) {
  if (string.toLowerCase() !== string) {
    return (
      string[0].toUpperCase() +
      string
        .slice(1)
        .split(/(?=[A-Z])/)
        .join(' ')
    );
  }

  return string[0].toUpperCase() + string.slice(1);
}
