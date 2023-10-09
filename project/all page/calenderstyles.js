const prevMonthButton = document.getElementById("prevMonth");
const nextMonthButton = document.getElementById("nextMonth");
const currentMonthText = document.getElementById("currentMonth");
const calendarGrid = document.getElementById("calendarGrid");

let currentDate = new Date();

prevMonthButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
});

nextMonthButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
});

function updateCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    currentMonthText.textContent = new Intl.DateTimeFormat("th-TH", { year: "numeric", month: "long" }).format(firstDay);

    calendarGrid.innerHTML = "";

    for (let i = 1; i < firstDay.getDay(); i++) {
        const emptyCell = document.createElement("div");
        calendarGrid.appendChild(emptyCell);
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
        const dayCell = document.createElement("div");
        dayCell.textContent = i;
        dayCell.classList.add("day-cell");
        if (year === new Date().getFullYear() && month === new Date().getMonth() && i === new Date().getDate()) {
            dayCell.classList.add("current-day");
        }
        calendarGrid.appendChild(dayCell);
    }
}

updateCalendar();