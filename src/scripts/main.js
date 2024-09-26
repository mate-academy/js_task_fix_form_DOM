'use strict';

function fixForm() {
  const inputs = document.querySelectorAll('input');

  for (let i = 0; i < inputs.length; i++) {
    const label = document.createElement('label');
    let changedName = inputs[i].name[0].toUpperCase();

    for (let y = 1; y < inputs[i].name.length; y++) {
      if (inputs[i].name[y] !== inputs[i].name[y].toLowerCase()) {
        changedName += ' ';
      }
      changedName += inputs[i].name[y];
    }

    label.innerHTML = `
      <label class="field-label" for="${inputs[i].id}">
        ${changedName}
      </label>
    `;

    inputs[i].before(label);
    inputs[i].placeholder = changedName;
  }
}

fixForm();
