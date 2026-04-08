const inputs = document.querySelectorAll('form input');

function capitalize(text) {
  return text[0].toUpperCase() + text.slice(1);
}

inputs.forEach((input) => {
  const label = document.createElement('label');
  const capitalizedName = capitalize(input.name);

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = capitalizedName;

  input.placeholder = capitalizedName;
  input.parentElement.prepend(label);
});
