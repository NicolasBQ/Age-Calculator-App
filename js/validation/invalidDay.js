import { invalidUI } from "./invalidUI.js";

const invalidDay = () => {
    const inputDay = document.querySelector('[data-input-day]');
    if(!inputDay.value) return;
    let invalid = false;

    if(inputDay.value < 1 || inputDay.value > 31) {
        invalidUI(inputDay, true, 'Must be a valid day');
        invalid = true;
    } else {
        invalidUI(inputDay, false, '');
        invalid = false;
    }

    return invalid;
}

const dayByMonth = () => {
    const inputMonth = document.querySelector('[data-input-month]');
    if(!inputMonth.value) return;
    let invalid = false;

    if(inputMonth.value == 2) {
        return invalid;
    }

    if(inputMonth.value < 8 ){
        invalid = firstSevenMonths(inputMonth.value);
    } else {
        invalid = lastFiveMonths(inputMonth.value);
    }

    return invalid;
}

const firstSevenMonths = (n) => {
    const inputDay = document.querySelector('[data-input-day]');
    let invalid = false;
    
    if(n % 2 == 0) {
        if(inputDay.value > 30) {
            invalidUI(inputDay, true, 'Must be a valid date');
            invalid = true;
        } else {
            invalidUI(inputDay, false, '');
            invalid = false;
        }
    }  

    return invalid;
}

const lastFiveMonths = (n) => {
    const inputDay = document.querySelector('[data-input-day]');
    let invalid = false;
    if(n % 2 != 0) {
        if(inputDay.value > 30) {
            invalidUI(inputDay, true, 'Must be a valid date');
            invalid = true;
        } else {
            invalidUI(inputDay, false, '');
            invalid = false;
        }
    }
    
    return invalid;
}

export { invalidDay, dayByMonth }