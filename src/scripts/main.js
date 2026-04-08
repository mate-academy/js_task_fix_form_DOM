'use strict';
// write code here

const forms = document.querySelectorAll('form');

const formsOfArray = [...forms];

for (let i = 0; i < formsOfArray.length; i++) {
  const divs = formsOfArray[i].querySelectorAll('div');
  const divsOfArray = [...divs];

  for (let j = 0; j < divsOfArray.length; j++) {
    const input = divsOfArray[j].querySelector('input');

    if (!input) {
      continue;
    }

    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);
    label.textContent = input.name.toUpperCase();
    input.insertAdjacentElement('beforebegin', label);

    input.setAttribute(
      'placeholder',
      input.name[0].toUpperCase() + input.name.slice(1),
    );
  }
}
