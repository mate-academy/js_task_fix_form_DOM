'use strict';
// так би працювало якби в мене була одна форма
// так я б знайшов тільки одну форму та усі інпути в цій формі

// const upgradeForms = document.querySelector('form');
// const inputs = upgradeForms.querySelectorAll('input');

// беру усі форми input які знаходяться у  form
const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  label.setAttribute('for', input.id);
  label.textContent = input.name;

  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);

  input.parentNode.appendChild(label);
});
