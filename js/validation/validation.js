import { emptyFields } from "./emptyFields.js";
import { invalidDay } from "./invalidDay.js";
import {invalidMonth } from "./invalidMonth.js";
import { invalidYear } from "./invalidYear.js";
import { februaryValidation } from "./februaryValidation.js";

const validationHandler = (e) => {
    e.preventDefault();
    const someEmpty = emptyFields();
    const validation = [
        invalidDay(),
        invalidMonth(),
        invalidYear(),
        februaryValidation()
    ]

    if(someEmpty) return;

    let isValidated = validation.some(val => val);
    if(!isValidated) {
        console.log(validation);
    }
}


export { validationHandler }