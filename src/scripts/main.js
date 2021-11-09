'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].forEach(input => {
  const newName = () => {
    const transformName = input.name.split('');

    for (const key in transformName) {
      if (transformName[key] === transformName[key].toUpperCase()) {
        transformName.splice(key, 0, ' ');
        break;
      } else if (+key === 0) {
        transformName[key] = transformName[key].toUpperCase();
      }
    }

    return transformName.join('');
  };

  input.placeholder = newName();

  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = newName();

  input.parentElement.append(label);
});
