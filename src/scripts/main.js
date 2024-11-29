'use strict';

const divElement = document.getElementsByClassName('field');

for (let i = 0; i < divElement.length; i++) {
  const labName = divElement[i].firstElementChild.getAttribute('name');

  const nameArray = labName.split('');

  nameArray[0] = nameArray[0].toUpperCase();

  const str = nameArray.join('');

  divElement[i].firstElementChild.setAttribute('placeholder', str);

  const lab = document.createElement('label');

  lab.innerHTML = labName.toUpperCase();
  lab.setAttribute('for', labName);

  divElement[i].prepend(lab);
}
