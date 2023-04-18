const handler = () => {
    years();
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


const years = () => {
    const { day, month, year } = data();

    const yearContainer = document.querySelector('[data-year]');
    const monthContainer = document.querySelector('[data-month]');
    const dayContainer = document.querySelector('[data-day]');

    const currentDate = new Date();
    
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    let yearsOld;
    let monthsOld;
    let daysOld;

    if(currentMonth > month || (currentMonth == month && currentDay >= day)) {
        yearsOld = currentYear - year;
    } else {
        yearsOld = (currentYear - year) - 1;
    }

    if(currentDay >= day && currentMonth >= month) {
        monthsOld = currentMonth - month;
    } else if (currentDay < day && currentMonth >= month) {
        monthsOld = currentMonth - month - 1;
    } else if(month > currentMonth) {
        monthsOld = 12 - month + currentMonth;
    } else {
        monthsOld = 0;
    }

    if(monthsOld == 0 && currentMonth == month) {
        daysOld = currentDay - day;
    } else {
        daysOld = getDaysInMonth(currentYear, currentMonth - 1) - day + currentDay;
    }

    yearContainer.innerText = yearsOld;
    monthContainer.innerText = monthsOld;
    dayContainer.innerText = daysOld;
}

const getDaysInMonth= (year, month) => {
    return new Date(year, month, 0).getDate();
}


export { handler }