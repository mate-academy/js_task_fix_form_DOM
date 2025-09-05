'use strict';

/**
 * Fixes form on pages as per task description
 *
 * @param {string} formSelector
 */
function fixForm(formSelector) {
  if (!formSelector || typeof formSelector !== 'string') {
    throw new Error('Invalid form selector');
  }

  const forms = document.querySelectorAll(formSelector);
  const inputSelector = 'input';

  for (const form of forms) {
    const inputs = form.querySelectorAll(inputSelector);

    for (const input of inputs) {
      const labelText =
        input.name.charAt(0).toUpperCase() + input.name.slice(1).toLowerCase();

      // handling missed id for input
      if (!input.id) {
        input.id = input.name + crypto.randomUUID();
      }

      input.insertAdjacentHTML(
        'beforebegin',
        '<label class="field-label" for="' +
          input.id +
          '">' +
          labelText +
          '</label>',
      );

      input.setAttribute('placeholder', labelText);
    }
  }
}

fixForm('form'); // use html tag as selector
