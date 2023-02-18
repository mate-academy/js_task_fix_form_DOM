'use strict';

const inputs = [...document.querySelectorAll('.field')];

inputs.forEach(inputWraper => {
  const input = inputWraper.children[0];

  input.setAttribute('placeholder', input.name);

  inputWraper.insertAdjacentHTML('afterbegin',
    `<label for="${input.id}" class=field-label>
      ${input.name}
    </label>`
  );
});
