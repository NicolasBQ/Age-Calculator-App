import { invalidUI } from "./invalidUI.js";

const februaryValidation = () => {
    const inputMonth = document.querySelector('[data-input-month]');
    if(!inputMonth.value || inputMonth.value != 2) return;

    const inputDay = document.querySelector('[data-input-day]');
    let invalid = false;
    if(leapYear()) {
        if(inputDay.value > 29) {
            invalidUI(inputDay, true, 'Must be a valid date');
            invalid = true;
        } else {
            invalidUI(inputDay, false, '');
            invalid = false;
        }
    } else {
        if(inputDay.value > 28) {
            invalidUI(inputDay, true, 'Must be a valid date');
            invalid = true; 
        } else {
            invalidUI(inputDay, false, '');
            invalid = false;
        }
    }

    return invalid;
}


const leapYear = () => {
    const inputYear = document.querySelector('[data-input-year]');
    return inputYear.value % 4 == 0;
}

export { februaryValidation }