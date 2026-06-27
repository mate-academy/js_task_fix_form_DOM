'use strict';

const elementForm = document.querySelectorAll('form input');

elementForm.forEach((element) => {
  const label = document.createElement('label');
  const { id, name: textContent } = element;

  const formattedName =
    textContent.charAt(0).toUpperCase() + textContent.slice(1);

  element.placeholder = formattedName;

  label.textContent = textContent;
  label.setAttribute('for', id);
  label.classList.add('field-label');

  element.before(label);
});
