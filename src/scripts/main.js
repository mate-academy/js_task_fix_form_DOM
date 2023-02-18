'use strict';

const inputs = [...document.querySelectorAll('.field')];

inputs.forEach(inputWraper => {
  const input = inputWraper.children[0];
  const placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  input.setAttribute('placeholder', placeholder);

  inputWraper.insertAdjacentHTML('afterbegin',
    `<label for="${input.id}" class=field-label>
      ${input.name}
    </label>`
  );
});
