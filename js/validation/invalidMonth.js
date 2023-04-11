import { invalidUI } from "./invalidUI.js";

const invalidMonth = () => {
    const inputMonth = document.querySelector('[data-input-month]');
    if(!inputMonth.value) return;
    let invalid = false;

    if(inputMonth.value < 1 || inputMonth.value > 12) {
        invalidUI(inputMonth, true, 'Must be a valid month');
        invalid = true;
        return invalid;
    } else {
        invalidUI(inputMonth, false, '');
        return invalid;
    }
}

export { invalidMonth }