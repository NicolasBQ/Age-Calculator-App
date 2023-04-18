const printUI = (initVal, finalVal, container, timer) => {
    initVal++;

    container.textContent = initVal;

    if(initVal < finalVal) {
        setTimeout(() => {
            printUI(initVal, finalVal, container)
        }, timer);
    }
}

export { printUI }