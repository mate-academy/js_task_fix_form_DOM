'use strict';

const inputs = document.querySelectorAll('.field-text');

inputs.forEach(input => {
  const hldrName = input.name.split(/(?=[A-Z])/).join(' ');

  input.insertAdjacentHTML('beforebegin',
    `<label for="${input.id}" class="field-label">
        ${input.name}
    </label>`
  );

  input.placeholder = `${hldrName[0].toUpperCase() + hldrName.slice(1)}`;
});
