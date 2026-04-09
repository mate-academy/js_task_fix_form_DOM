'use strict';

document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll("form input");

  inputs.forEach(input => {
    const inputName = input.getAttribute("name");
    if (!inputName) return; // Skip if input has no name

    const label = document.createElement("label");
    label.classList.add("field-label");
    label.setAttribute("for", input.id);
    label.textContent = capitalize(inputName);

    input.setAttribute("placeholder", capitalize(inputName));
    input.parentNode.insertBefore(label, input);
  });
});

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

