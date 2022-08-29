'use strict';

const inputs = [...document.getElementsByClassName('field-text')];

inputs.forEach((item) => {
  const attribute = item.getAttribute('name');

  item.setAttribute(
    'placeholder',
    `${item.getAttribute('name').toUpperCase()}`);

  const label = document.createElement('label');

  label.innerHTML = item.getAttribute('name');
  label.className = 'field-label';
  label.setAttribute('for', `${item.id}`);

  for (let i = 0; i < attribute.length; i++) {
    if (attribute[i] === 'N') {
      item.setAttribute(
        'placeholder',
        `${attribute.split('Name').join(' Name').toUpperCase()}`
      );

      label.innerHTML = `
        ${attribute.split('Name').join(' Name').toUpperCase()}
      `;
    }
  }

  item.before(label);
});

// Have a good day! :3
