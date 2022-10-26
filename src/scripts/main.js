'use strict';

const forms = document.querySelectorAll('form');

for (const form of forms) {
  const divInputs = form.querySelectorAll('div');

  for (const div of divInputs) {
    const input = div.querySelector('input');

    if (input) {
      let labelName = input.name[0].toUpperCase()
       + input.name.slice(1).toLowerCase();

      if (labelName === 'Firstname') {
        labelName = 'First Name';
      } else if (labelName === 'Lastname') {
        labelName = 'Last Name';
      }

      const label = `<label for="${input.id ? input.id : null}"
      class="field-label">
      ${labelName}
    </label>`;

      input.placeholder = labelName;

      div.innerHTML = label + input.outerHTML;
    }
  }
}
