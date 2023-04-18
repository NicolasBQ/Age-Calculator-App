import { years } from "./yearCalc.js";
import { months } from "./monthCalc.js";
import { days } from "./dayCalc.js";

const handler = () => {
    years();
    const montsOld = months();
    days(montsOld);
}

const data = () => {
    const day = document.querySelector('[data-input-day]').value;
    const month = document.querySelector('[data-input-month]').value;
    const year = document.querySelector('[data-input-year]').value;

    return {
        day,
        month, 
        year
    }
}


const getDaysInMonth= (year, month) => {
    return new Date(year, month, 0).getDate();
}


export { handler, data, getDaysInMonth }