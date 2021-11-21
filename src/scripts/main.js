'use strict';

const inputs = document.querySelectorAll('input');

for (const i of inputs) {
  let text = i.name.split(/(?=[A-Z])/gs).join(' ');

  text = text[0].toUpperCase() + text.slice(1);

  i.placeholder = text;

  i.parentElement.insertAdjacentHTML('afterbegin', `
    <label class="field-label">
      ${text}
    </label>
  `);
}
