'use strict';

const fields = document.getElementsByClassName('field');

for (const field of fields) {
  const fieldText = field.querySelector('.field-text');
  const fieldName = fieldText.name;

  field.insertAdjacentHTML('afterbegin',
    `<label class="field-label" for="${fieldText.id}">
            ${fieldName.toUpperCase()}
    </label>`
  );

  fieldText.placeholder = fieldName[0].toUpperCase() + fieldName.slice(1);
};
