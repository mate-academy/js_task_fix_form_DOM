'use strict';

const body = document.body;
const allInputs = body.querySelectorAll('input')
const arrayInputs = [...allInputs];
const fielD body.querySelectorAll('.field');

arrayInputs.forEach((item) => {
  item.setAttribute('placeholder', item.getAttribute('name').toUpperCase());
});

