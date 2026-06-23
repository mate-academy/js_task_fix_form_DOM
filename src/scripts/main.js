const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');
  const text = input.name[0].toUpperCase() + input.name.slice(1);

  label.classList.add('field-label');
  label.htmlFor = input.id;
  label.textContent = text;

  input.placeholder = text;

  input.parentElement.prepend(label);
});
