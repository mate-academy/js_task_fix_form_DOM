'use strict';

// write code here
const separate = (n) => {
  if (n.toLowerCase() === 'firstname' || n.toLowerCase() === 'lastname') {
    return n.split('Name').join('') + ' Name';
  } else {
    return n;
  }
};

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((inp) => {
  inp.setAttribute(
    'placeholder',
    separate(
      inp.getAttribute('name').slice(0, 1).toUpperCase() +
        inp.getAttribute('name').slice(1),
    ),
  );

  const elem = document.createElement('label');

  elem.textContent = separate(inp.getAttribute('name'));
  elem.classList.add('field-label');
  elem.htmlFor = inp.getAttribute('id');

  inp.insertAdjacentElement('beforebegin', elem);
});
