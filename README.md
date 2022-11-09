1. Replace <your_account> with your Github username in the link
    - [DEMO LINK](https://gord-oleg.github.io/js_task_fix_form_DOM/)
2. Follow [this instructions](https://mate-academy.github.io/layout_task-guideline/)
    - Run `npm run test` command to test your code;
    - Run `npm run test:only -- -n` to run fast test ignoring linter;
    - Run `npm run test:only -- -l` to run fast test with additional info in console ignoring linter.

### Task: Auth form fix

Look at this form... Looks like something is missing here. Labels? Placeholders? Yeah..

![Preview](./src/images/preview.png)

Your task is to make script, which fixes problems in this form.
1) Add `<label>` for inputs.
2) Add placeholders for each input.

Rely on the `name` of the input when writing your script.

You can read about placeholders and labels here:
- [MDN Placeholder attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#attr-placeholder)
- [MDN Label tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)

##### Steps to do this challenge:
1) Get all `inputs` from `form` tag on the page.
2) For each `input` element create element `label` with `class` `field-label` (it is needed to apply css styles) and `for` attribute where set `id` of current input. Set `textContent` for label rely on `input` name.
3) For each `input` set `placeholder` based on `input` name. Capitalize it.
4) Append `label` elements to the parent container of `input` (do not wrap inputs into the label in this task)
5) Done.

Hints: p.2 and p.4 can be done in one loop

Do not change styles or HTML layout in this task. Change only `main.js` file.

Expected result:

![Preview](./src/images/result.png)

Подивіться на цю форму... Здається, тут чогось не вистачає. Мітки? Заповнювачі? так..

![Попередній перегляд](./src/images/preview.png)

Ваше завдання - зробити скрипт, який виправляє проблеми в цій формі.
1) Додайте `<label>` для вводів.
2) Додайте заповнювачі для кожного введення.

Під час написання сценарію покладайтеся на `ім’я` вхідних даних.

Ви можете прочитати про заповнювачі та мітки тут:
- [Атрибут заповнювача MDN] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#attr-placeholder)
- [тег мітки MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)

##### Кроки для виконання цього завдання:
1) Отримати всі `вхідні дані` з тегу `form` на сторінці.
2) Для кожного елемента `input` створіть елемент `label` з `class` `field-label` (він потрібен для застосування стилів CSS) і атрибут `for`, де встановіть `id` поточного введення. Установіть `textContent` для мітки, спираючись на назву `введення`.
3) Для кожного `input` встановіть `placeholder` на основі імені `input`. Напишіть це з великої літери.
4) Додайте елементи `label` до батьківського контейнера `input` (не загортайте вхідні дані в мітку в цьому завданні)
5) Готово.

Підказки: п.2 і п.4 можна виконувати в одній петлі

Не змінюйте стилі чи макет HTML у цьому завданні. Змінити лише файл `main.js`.
