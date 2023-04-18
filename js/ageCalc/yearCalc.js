import { data } from "./handler.js";
import { printUI } from "./printUI.js";

const years = () => {
    const { day, month, year } = data();
    const yearContainer = document.querySelector('[data-year]');
    const currentDate = new Date();
    
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    let yearsOld;


    if(currentMonth > month || (currentMonth == month && currentDay >= day)) {
        yearsOld = currentYear - year;
    } else {
        yearsOld = (currentYear - year) - 1;
    }


    printUI(0, yearsOld, yearContainer, 50);
}

export { years }