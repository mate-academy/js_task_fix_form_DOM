function camelCaseToText(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/^\w/, (c) => c.toUpperCase());
}

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);
    label.textContent = camelCaseToText(input.name);

    input.setAttribute('placeholder', camelCaseToText(input.name));
    input.parentNode.insertBefore(label, input);
  });
});
