'use strict';

function setLabelAndPlaceholderByName(node) {
  const label = document.createElement('span');

  label.classList.add('field-label');
  label.setAttribute('for', node.id);
  label.textContent = capitalizedString(node.name);

  node.parentNode.prepend(label);
  node.placeholder = capitalizedString(node.name);
}

function capitalizedString(string) {
  let modifiedString = '';

  for (const i of string) {
    if (i === i.toUpperCase()) {
      modifiedString += ' ';
    }

    modifiedString += i;
  }

  modifiedString = modifiedString.trim();

  return (
    modifiedString.charAt(0).toUpperCase() +
    modifiedString.slice(1).toLowerCase()
  );
}

function proccessAllInputs() {
  const inputElements = document.getElementsByTagName('input');

  for (const element of inputElements) {
    setLabelAndPlaceholderByName(element);
  }
}

proccessAllInputs();
