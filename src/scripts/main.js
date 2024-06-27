'use strict';

const forms = document.getElementsByTagName('form');

for (let i = 0; i < forms.length; i++) {
  Array.from(forms[i].getElementsByTagName('input')).map((input) => {
    const labelElement = document.createElement('label');

    labelElement.classList.add('field-label');
    labelElement.setAttribute('for', input.id);
    labelElement.textContent = input.name;

    input.parentNode.insertBefore(labelElement, input);

    input.setAttribute(
      'placeholder',
      input.name.slice(0, 1).toUpperCase() + input.name.slice(1),
    );
  });
}
