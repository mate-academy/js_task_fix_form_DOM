'use strict';

// write code here
const fields = document.querySelectorAll('.login-wrap input');

function finishTagInputs(inputs) {
  for (const input of [...inputs]) {
    const parentEl = input.parentElement;
    const maskLabel = `<label class="field-label" for="${input.id}">
      ${input.name}
    </label>`;

    input.setAttribute('placeholder', `${input.name}`);
    parentEl.insertAdjacentHTML('afterbegin', maskLabel);
  }
}

finishTagInputs(fields);
