'use strict';

const forms = document.querySelectorAll('form');

function formatting(tag) {
  return tag.name[0].toUpperCase()
    + tag.name.substring(1).split(/(?=[A-Z])/).join(' ');
}

for (const form of forms) {
  const divInputs = form.querySelectorAll('div');

  for (const div of divInputs) {
    const input = div.querySelector('input');

    if (input) {
      const labelName = formatting(input);

      const label = `<label for="${input.id ? input.id : null}"
      class="field-label">
      ${labelName}
    </label>`;

      input.placeholder = labelName;

      div.innerHTML = label + input.outerHTML;
    }
  }
}
