/* eslint-disable no-shadow */
export function setLabel(input) {
  const parent = input.parentNode;
  const label = document.createElement('label');
  const { id, name } = input;

  const normalName = camelToUpper(name);

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', `${id}`);
  label.textContent = normalName;
  parent.appendChild(label);
}

export function setPlaceholder(input) {
  const { name } = input;
  const capitalizedName = camelToNormal(name);

  input.setAttribute('placeholder', `${capitalizedName}`);
}

function camelToNormal(word) {
  return word
    .replace(/([A-Z])/g, ' $1')
    .toLowerCase()
    .replace(/^./, (str) => str.toUpperCase());
}

function camelToUpper(word) {
  return word.replace(/([A-Z])/g, ' $1').toUpperCase();
}
