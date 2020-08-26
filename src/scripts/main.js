'use strict';

const inputs = [...document.querySelectorAll('.field-text')];
const fields = [...document.querySelectorAll('.field')];

fields
  .map(field => field
    .insertAdjacentHTML(
      'afterbegin', `
        <label
          for="${field.lastElementChild.id}"
          class="field-label"
        >${field.lastElementChild.name.replace(/[A-Z]/g, ' $&')}

        </label>
      `
    )
  );

inputs
  .map(input => input
    .setAttribute(
      'placeholder',
      `${input.name[0].toUpperCase()}`
      + `${input.name.slice(1).replace(/[A-Z]/g, ' $&')}`
    )
  );
