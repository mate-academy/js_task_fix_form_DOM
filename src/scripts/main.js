'use strict';

document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll("form input");

  inputs.forEach((input) => {
    // Create label element
    const label = document.createElement("label");
    label.classList.add("field-label");
    label.setAttribute("for", input.id);
    label.textContent = input.name.charAt(0).toUpperCase() + input.name.slice(1);

    // Set placeholder
    input.setAttribute("placeholder", label.textContent);

    // Insert label before input
    input.parentNode.insertBefore(label, input);
  });
});
