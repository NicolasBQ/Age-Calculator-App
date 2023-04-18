import { data } from "./handler.js";
import { printUI } from "./printUI.js";

const months = () => {
    const { day, month } = data();
    let monthsOld;
    const currentDate = new Date();
    const monthContainer = document.querySelector('[data-month]');
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;

    if(currentDay >= day && currentMonth >= month) {
        monthsOld = currentMonth - month;
    } else if (currentDay < day && currentMonth > month) {
        monthsOld = currentMonth - month - 1;
    } else if(currentDay < day && month > currentMonth) {
        monthsOld = 12 - month + currentMonth - 1;
    } else if(month > currentMonth) {
        monthsOld = 12 - month + currentMonth;
    } else {
        monthsOld = 0;
    }

    printUI(0, monthsOld, monthContainer, 80);
    
    return monthsOld
}


export { months }