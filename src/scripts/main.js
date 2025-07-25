'use strict';

const inputs = [...document.querySelectorAll('input')];

for (const i of inputs) {
  const nname = i.getAttribute('name');
  const iid = i.id;
  const llabel = document.createElement('label');

  llabel.classList.add('field-label');
  llabel.setAttribute('for', iid);
  llabel.innerText = nname;

  i.setAttribute('placeholder', nname.toUpperCase());
  i.parentNode.append(llabel);
}
