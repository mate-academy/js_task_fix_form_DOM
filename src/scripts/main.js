'use strict';

(function() {
  const inputAll = document.querySelectorAll('input');

  [...inputAll].forEach(input => {
    const label = document.createElement('label');
    const namePlaceholder = input.name
      .replace(/([A-Z][a-z]+)/g, ' $1 ')
      .toLowerCase()
      .trim();

    input.placeholder = (namePlaceholder.replace(
      namePlaceholder[0], namePlaceholder[0].toUpperCase()
    ));

    label.className = 'field-label';
    label.htmlFor = input.id;
    label.textContent = namePlaceholder;
    input.parentElement.append(label);
  });
}());
