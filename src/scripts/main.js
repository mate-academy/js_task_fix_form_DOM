'use strict';

const items = document.querySelectorAll('.field-text');

for (const node of [...items]) {
  const item = document.createElement('label');

  item.className = 'field-label';
  item.textContent = `${node.name}`;
  item.setAttribute('for', `${node.id}`);
  node.parentElement.insertBefore(item, node);

  switch (node.name) {
    case 'firstName':
      node.placeholder = 'firstName'.toUpperCase();
      break;
    case 'lastName':
      node.placeholder = 'lastName'.toUpperCase();
      break;
    case 'email':
      node.placeholder = 'email'.toUpperCase();
      break;
    case 'password':
      node.placeholder = 'password'.toUpperCase();
      break;
  }
}
