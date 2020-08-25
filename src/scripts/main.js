'use strict';

const inputs = [...document.querySelectorAll('.field-text')];
const fields = [...document.querySelectorAll('.field')];

inputs
  .map(input => input
    .setAttribute(
      'placeholder',
      `${input.name[0].toUpperCase()}${input.name.slice(1)}`
    )
  );

fields
  .map(field => field
    .insertAdjacentHTML(
      'afterbegin',
      `
        <label
          for="${field.lastElementChild.id}"
          class="field-label"
        >${field.lastElementChild.name.toUpperCase()}

        </label>
      `
    )
  );
