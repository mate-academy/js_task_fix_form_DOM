'use strict';

const inputs = [...document.querySelectorAll('.field')];

inputs.forEach(div => {
  div.insertAdjacentHTML('afterbegin', '<label></label>');

  div.children[0].className = 'field-label';
  div.children[0].htmlFor = div.children[1].id;
  div.children[0].textContent = div.children[1].name;

  div.children[1].placeholder = div.children[1].name[0].toUpperCase()
  + div.children[1].name.slice(1).replace(/Name/, ' Name');
});
