'use strict';

 const inputs = document.querySelectorAll('.field-text');

inputs.forEach(input => {
  const plcName = input.name.split(/(?=[A-Z])/).join(' ');

  input.insertAdjacentHTML('beforebegin',
    `<label for="${input.id}" class="field-label">
        ${input.name}
    </label>`
  );

  input.placeholder = `${plcName[0].toUpperCase() + plcName.slice(1)}`;
});