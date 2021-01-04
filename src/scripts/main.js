'use strict';

const wrapper = document.querySelectorAll('.field');

for (const item of wrapper) {
  const textPlaceholder = item
    .children[0]
    .name[0]
    .toUpperCase() + item.children[0].name.slice(1);

  const text = item.children[0].name;

  item.children[0].placeholder = textPlaceholder;

  item.insertAdjacentHTML('afterbegin', `
      <label class="field-label" for="${item.children[0].id}">
      ${text}
      </label>
      `);
}
