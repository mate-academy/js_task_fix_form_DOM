'use strict';

const containerForm = document.querySelector('.login-wrap');

const list = [...containerForm.querySelectorAll('input')];

function addLableInput(obj) {
  const lable = document.createElement('label', { for: `${obj.id}` });
  const lableContainer = document.createElement('label');
  const element = obj.parentElement;

  lable.textContent = obj.name;

  lable.classList.add('field-label');

  obj.placeholder = `${obj.name}`.replace(/([A-Z])/g, ' $1');

  return (
    obj.insertAdjacentElement('beforebegin', lable),
    element.insertAdjacentElement('beforebegin', lableContainer)
  );
}

list.forEach((elem) => {
  addLableInput(elem);
  elem.style.textTransform = 'capitalize';
});
