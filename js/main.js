import { validationHandler } from "./validation/validation.js";

const appInit = () => {
    const form = document.querySelector('[data-form]');
    form.addEventListener('submit', validationHandler);
}


document.addEventListener('DOMContentLoaded', appInit);


