'use strict';

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.setAttribute('class', 'field-label');
    label.setAttribute('for', input.id);

    let spaseText = '';

    for (let i = 0; i < input.name.length; i++) {
      if (input.name[i] === input.name[i].toUpperCase() && i !== 0) {
        spaseText += ' ';
      }

      spaseText += input.name[i];
    }
    label.textContent = spaseText;

    input.setAttribute(
      'placeholder',
      spaseText.charAt(0).toUpperCase() + spaseText.slice(1),
    );

    input.insertAdjacentElement('beforebegin', label);
  });
});
