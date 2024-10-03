/* eslint-disable no-shadow */
export function setLabel(input) {
  const parent = input.parentNode;
  const label = document.createElement('label');
  const { id, name } = input;

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', `${id}`);
  label.textContent = name.toUpperCase();
  parent.appendChild(label);
}

export function setPlaceholder(input) {
  const { name } = input;
  const capitalizedName = name[0].toUpperCase() + name.slice(1).toLowerCase();

  input.setAttribute('placeholder', `${capitalizedName}`);
}
