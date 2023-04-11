import { invalidUI } from "./invalidUI.js";

const emptyFields = () => {
    const inputs = Array.from(document.querySelectorAll('[data-input]'));

    inputs.forEach(input => {
        if(!input.value) {
            invalidUI(input, true, 'This field is required'); 
        } else {
            invalidUI(input, false, '');
        }
    })

    let someEmpty = inputs.some(input => !input.value);

    return someEmpty;
}

export { emptyFields }