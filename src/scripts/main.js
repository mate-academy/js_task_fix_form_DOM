'use strict';

const inputs = document.querySelectorAll('.field-text');

inputs.forEach(item => {
  item.insertAdjacentHTML('beforebegin', `
    <label class="field-label" for="${item.id}">
      ${item.name.replace(/Name/, ' Name')}
    </label>
  `);

  item.placeholder = (item.name[0].toUpperCase() + item.name.slice(1))
    .replace(/Name/, ' Name');
});
