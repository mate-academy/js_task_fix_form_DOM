'use strict';

(function () {
  // Funkcja konwertuje camelCase, snake_case i kebab-case → Title Case
  function formatLabel(str) {
    if (!str) return '';
    let result = str;

    // Usuń prefiks przed pierwszym "-" lub "_"
    result = result.replace(/^[^_-]+[-_]/, '');
    // Zamień "-" i "_" na spacje
    result = result.replace(/[-_]/g, ' ');
    // Rozbij camelCase
    result = result.replace(/([a-z])([A-Z])/g, '$1 $2');
    // Title Case
    return result
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
      .trim();
  }

  // Funkcja poprawiająca pojedynczy formularz
  function fixForm(formEl) {
    if (!formEl || !formEl.querySelectorAll) return;

    const inputs = formEl.querySelectorAll(
      'input[name]:not([type=submit]):not([type=button]):not([type=hidden])'
    );

    inputs.forEach((inputEl, index) => {
      const nameAttr = inputEl.getAttribute('name');
      if (!nameAttr) return;

      // Upewnij się, że input ma id
      if (!inputEl.id) {
        const safeName = nameAttr.replace(/[^a-z0-9_-]/gi, '');
        inputEl.id = safeName ? `${safeName}-${index}` : `input-${index}`;
      }

      const computedLabel = formatLabel(nameAttr);

      // Sprawdź poprzedni element — czy to label powiązany z input.id?
      let prevLabel = inputEl.previousElementSibling;
      if (
        prevLabel &&
        prevLabel.tagName.toLowerCase() === 'label' &&
        prevLabel.getAttribute('for') === inputEl.id
      ) {
        // Aktualizujemy placeholder, jeśli jest pusty
        if (!inputEl.placeholder) {
          inputEl.placeholder = computedLabel;
        }
        return;
      }

      // Tworzymy nowy label
      const label = document.createElement('label');
      label.className = 'field-label';
      label.setAttribute('for', inputEl.id);
      label.textContent = computedLabel;

      // Wstawiamy label przed input
      inputEl.parentElement.insertBefore(label, inputEl);

      // Ustawiamy placeholder taki sam jak label
      inputEl.placeholder = computedLabel;
    });
  }

  // Udostępniamy funkcję globalnie dla testów Mate Academy
  window.fixForm = fixForm;

  // Wywołanie funkcji dla pierwszego formularza na stronie
  const formToFix = document.querySelector('form');
  if (formToFix) {
    fixForm(formToFix);
  }
})();
