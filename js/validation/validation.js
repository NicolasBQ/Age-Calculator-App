import { emptyFields } from "./emptyFields.js";
import { invalidDay, dayByMonth } from "./invalidDay.js";
import {invalidMonth } from "./invalidMonth.js";
import { invalidYear } from "./invalidYear.js";
import { februaryValidation } from "./februaryValidation.js";
import { handler } from "../ageCalc/handler.js";

const validationHandler = (e) => {
    e.preventDefault();
    const someEmpty = emptyFields();
    const validation = [
        invalidDay(),
        dayByMonth(),
        invalidMonth(),
        invalidYear(),
        februaryValidation()
    ]

    if(someEmpty) return;
    let isValidated = validation.some(val => val);
    
    if(isValidated) return;
    handler();
}


export { validationHandler }