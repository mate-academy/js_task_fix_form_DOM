'use strict';

const forms = document.querySelectorAll('form');

for (const form of forms) {
  const divInputs = form.querySelectorAll('div');

  for (const div of divInputs) {
    const input = div.querySelector('input');

    if (input) {
      const label = `<label for="${input.id ? input.id : null}"
      class="field-label">
      ${input.name}
    </label>`;

      input.placeholder = input.name[0].toUpperCase()
        + input.name.slice(1).toLowerCase();

      div.innerHTML = label + input.outerHTML;
    }
  }
}
