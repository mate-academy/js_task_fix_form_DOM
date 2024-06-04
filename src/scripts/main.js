'use strict';

// write code here
const inputs = [...document.querySelectorAll('input')];

// const labels = inputs.map((inp) => inp.dataset.name);

inputs.forEach((inp) => {
  inp.setAttribute(
    'placeholder',
    inp.getAttribute('name').slice(0, 1).toUpperCase() +
      inp.getAttribute('name').slice(1),
  );

  const elem = document.createElement('label');

  elem.textContent = inp.getAttribute('name');
  elem.classList.add('field-label');
  elem.htmlFor = inp.getAttribute('id');

  inp.insertAdjacentElement('beforebegin', elem);
});
