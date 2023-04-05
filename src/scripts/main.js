'use strict';

function fixForm() {
  const inputs = document.querySelectorAll('input');

  for (let i = 0; i < inputs.length; i++) {
    const label = document.createElement('label');

    label.innerHTML = `
      <label class="field-label" for="${inputs[i].id}">
        ${inputs[i].name}
      </label>
    `;

    inputs[i].before(label);

    inputs[i].placeholder = inputs[i].name[0].toUpperCase()
      + inputs[i].name.slice(1);
  }
}

fixForm();
