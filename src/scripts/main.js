'use strict';

// write code here
const formInputs = document.body.querySelectorAll('.field-text');

formInputs.forEach(input => {
  input.insertAdjacentHTML('beforebegin',
    `<label
        class="field-label"
        for="${input.id}"
     >
      ${input.name}
     </label>`);
  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);
});
