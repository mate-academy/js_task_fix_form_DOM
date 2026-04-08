"use strict";
document.querySelectorAll("input").forEach((el)=>{
    const label = document.createElement("label");
    label.className = "field-label";
    label.setAttribute("for", el.id);
    label.textContent = el.name;
    el.before(label);
    el.placeholder = el.name;
});

//# sourceMappingURL=index.f75de5e1.js.map
