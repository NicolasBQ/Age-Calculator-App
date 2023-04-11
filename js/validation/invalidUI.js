const invalidUI = (input, isInvalid, message) => {
    if(isInvalid) {
        input.classList.add('invalid-input');
        input.previousElementSibling.classList.add('red');
        input.nextElementSibling.innerText = message;
    } else {
        input.classList.remove('invalid-input');
        input.previousElementSibling.classList.remove('red');
        input.nextElementSibling.innerText = message;
    }
}

export { invalidUI }