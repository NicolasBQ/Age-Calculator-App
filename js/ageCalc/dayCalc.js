import { data, getDaysInMonth } from "./handler.js";
import { printUI } from "./printUI.js";

const days = (monthsOld) => {
    const { day, month, year } = data();

    let daysOld;
    const currentDate = new Date();
    const dayContainer = document.querySelector('[data-day]');
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();

    if(monthsOld == 0 && currentMonth == month && currentDay > day) {
        daysOld = currentDay - day;
    }  else if(currentDay < day)  {
        daysOld = getDaysInMonth(currentYear, currentMonth - 1) - day + currentDay;
    } else {
        daysOld = currentDay;        
    }

    printUI(0, daysOld, dayContainer, 100);
}





export { days }