'use strict';

const inputElements = document.querySelectorAll('.field-text');

inputElements.forEach((elem) => {
  let nameLabel = '';

  for (const ch of elem.name) {
    if (ch === ch.toLowerCase()) {
      nameLabel += ch;
    } else {
      nameLabel += ' ' + ch;
    }
  }

  elem.insertAdjacentHTML(
    'beforebegin',
    `
    <label for=${elem.id} class=field-label>${nameLabel}</label>
  `,
  );

  const namePlaceholder =
    nameLabel.charAt(0).toUpperCase() + nameLabel.slice(1);

  elem.placeholder = namePlaceholder;
});
