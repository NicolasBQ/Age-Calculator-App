import { invalidUI } from "./invalidUI.js";

const invalidDay = () => {
    const inputDay = document.querySelector('[data-input-day]');
    if(!inputDay.value) return;
    let invalid = false;

    if(inputDay.value < 1 || inputDay.value > 31) {
        invalidUI(inputDay, true, 'Must be a valid day');
        invalid = true;
        return invalid;
    } else {
        invalidUI(inputDay, false, '');
        return invalid;
    }
}

export { invalidDay }