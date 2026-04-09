'use strict';

const forms = [...document.querySelectorAll('form')];

forms.forEach((form) => {
  const inputs = [...form.querySelectorAll('input')];

  inputs.forEach((item) => {
    const label = document.createElement('label');
    const inputName = item.getAttribute('name').replaceAll(/[-_]/g, ' ');
    let labelName = '';

    inputName.split('').forEach((char) => {
      if (char === char.toUpperCase()) {
        labelName += ' ' + char;
      } else {
        labelName += char;
      }
    });

    labelName = labelName.charAt(0).toUpperCase() + labelName.slice(1);

    if (!item.id) {
      item.id = 'auto-id-' + labelName.toLowerCase().replaceAll(' ', '-');
    }

    const id = item.getAttribute('id');

    label.setAttribute('class', 'field-label');
    label.setAttribute('for', id);
    item.setAttribute('placeholder', labelName);
    label.textContent = labelName;
    item.parentElement.appendChild(label);
  });
});
