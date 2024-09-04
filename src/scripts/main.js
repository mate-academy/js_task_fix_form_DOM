const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const nameofInput = `${input.getAttribute('name')}`.replace('N', ' N');

  const placeholder = nameofInput.replace(
    nameofInput[0],
    nameofInput[0].toUpperCase(),
  );

  const newLable = document.createElement('label');

  newLable.classList.add('field-label');
  newLable.setAttribute('for', `${input.getAttribute('id')}`);

  newLable.textContent = `${nameofInput.toUpperCase()}`;

  input.setAttribute('placeholder', placeholder);
  input.before(newLable);
});
