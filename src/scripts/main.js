/* eslint-disable no-shadow */
// main.js
document.addEventListener('DOMContentLoaded', () => {
  fixAllInputs();
});

/**
 * Обробляє ВСІ input на сторінці:
 * - placeholder = Capitalize(name)
 * - label.field-label з textContent = name (нижній регістр як у name)
 * - label[for] = існуючий id інпута (id НЕ змінюємо)
 * - вставляє label ПЕРЕД інпутом у його батьківський контейнер
 */
function fixAllInputs() {
  const inputs = document.querySelectorAll('input');

  inputs.forEach((input) => {
    const name = (input.getAttribute('name') || '').trim();
    // eslint-disable-next-line padding-line-between-statements, curly
    if (!name) return;
    // eslint-disable-next-line curly
    if (['submit', 'reset', 'button', 'file'].includes(input.type)) return;

    // 1) placeholder з великої літери, строго з name
    const placeholder = name.charAt(0).toUpperCase() + name.slice(1);
    // eslint-disable-next-line padding-line-between-statements
    input.setAttribute('placeholder', placeholder);

    // 2) label.field-label у тому самому контейнері, перед input
    const parent = input.parentElement || input;
    // eslint-disable-next-line prettier/prettier
    let label = parent.querySelector(`label.field-label[for="${CSS.escape(input.id || '')}"]`);

    if (!label) {
      label = document.createElement('label');
      label.className = 'field-label';

      // ВАЖЛИВО: використовуємо існуючий id інпута (нічого не генеруємо)
      if (input.id) {
        label.setAttribute('for', input.id);
      }

      parent.insertBefore(label, input);
    }

    // текст лейблу — ТІЛЬКИ name (без капіталізації)
    label.textContent = name;
  });
}
