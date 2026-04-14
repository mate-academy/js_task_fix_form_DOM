'use strict';

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((item, index) => {
    const nameInput = item.getAttribute('name');

    if (!nameInput) {
      return;
    }

    let id = item.id;

    if (!id) {
      id = `generated-id-${index}`;
      item.id = id;
    }

    const label = document.createElement('label');

    const capitalize = nameInput[0].toLocaleUpperCase() + nameInput.slice(1);

    label.classList.add('field-label');
    item.setAttribute('placeholder', capitalize);
    label.setAttribute('for', id);
    label.textContent = capitalize;
    item.before(label);
  });
});
