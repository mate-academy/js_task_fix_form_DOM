// Отримати всі форми на сторінці
const forms = document.querySelectorAll('form');

// Проходимо по кожній формі
forms.forEach((form1) => {
  // Отримуємо всі input елементи всередині поточної форми
  const inputs = form1.querySelectorAll('input');

  // Проходимо по кожному input у формі
  inputs.forEach((input1) => {
    // 1. Створюємо label
    const label = document.createElement('label');

    label.classList.add('field-label'); // Додаємо клас 'field-label'

    // 2. Встановлюємо атрибут for для label і id для input
    const inputId = input1.id;

    input1.id = inputId; // Генеруємо id, якщо він відсутній
    label.setAttribute('for', inputId);

    // 3. Встановлюємо текст label на основі назви input
    const inputName = input1.name || 'Unnamed Input';

    label.textContent = inputName.charAt(0).toUpperCase() + inputName.slice(1);
    // Перша буква велика

    // 4. Встановлюємо placeholder для input
    input1.placeholder = inputName.charAt(0).toUpperCase() + inputName.slice(1);

    // 5. Додаємо label перед input в DOM
    input1.parentElement.insertBefore(label, input1);
  });
});
