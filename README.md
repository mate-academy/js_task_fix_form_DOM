1. Replace `<your_account>` with your Github username in the link
    - [DEMO LINK](https://liudmylailchenko.github.io/js_task_fix_form_DOM/)
2. Follow [this instructions](https://mate-academy.github.io/layout_task-guideline/)
    - There are no tests for this task so use `npm run lint` command instead of `npm test` 

### Task: Auth form fix

Look at this form... Looks like something is missing here. Labels? Placeholders? Yeah..

![Preview](./src/images/preview.png)

Your task is to make script, which is able to fix all problems in this form.
1) Add `<label>` for inputs.
2) Add placeholders for each input.

Both rely on the `name` of input.

You can read about placeholders and labels here:
- [MDN Placeholder attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#attr-placeholder)
- [MDN Label tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)

##### Steps to do this challenge:
1) Get all `inputs` from `form` tag on the page.
2) For each `input` element create element `label` with `class` `field-label` (it needs for correct style applying) and `for` attribute where set `id` of current input. Set `textContent` for label rely on `input` name.
3) For each `input` set `placeholder` rely on `input` name. Capitalize it.
4) Append `label` elements to the parent container of `input` (do not cover inputs by the label in this task)
5) Done.

Hints: p.2 and p.4 can be done in one loop circle

You no need to change styles or HTML layout in this task. Change only `main.js` file.

Expected result:

![Preview](./src/images/result.png)
