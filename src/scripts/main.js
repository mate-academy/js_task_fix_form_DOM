'use strict';

document.addEventListener("DOMContentLoaded", () => {
  // 1) Get all inputs from the form
  const inputs = document.querySelectorAll("form input");

  inputs.forEach((input) => {
    const name = input.getAttribute("name");
    if (!name) return; // skip if input has no name

    // 2) Ensure the input has an id (needed for label "for")
    if (!input.id) {
      input.id = name;
    }

    // 3) Create label
    const label = document.createElement("label");
    label.classList.add("field-label");
    label.setAttribute("for", input.id);
    // Capitalize first letter of name for label text
    label.textContent = name.charAt(0).toUpperCase() + name.slice(1);

    // 4) Add placeholder (capitalize too)
    input.placeholder = name.charAt(0).toUpperCase() + name.slice(1);

    // 5) Insert label *before* the input inside its parent
    input.parentNode.insertBefore(label, input);
  });
});
