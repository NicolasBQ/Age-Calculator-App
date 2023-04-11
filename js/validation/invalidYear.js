import { invalidUI } from "./invalidUI.js";

const invalidYear = () => {
    const inputYear = document.querySelector('[data-input-year]');
    if(!inputYear.value) return;
    let invalid = false;

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    if(inputYear.value > currentYear) {
        invalidUI(inputYear, true, 'Must be in the past');
        invalid = true;
        return invalid;
    } else {
        invalidUI(inputYear, false, '');
        return invalid;
    }

}

export { invalidYear }