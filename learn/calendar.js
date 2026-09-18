const calendarTitle = document.getElementById("calendarTitle");
const calendarBody = document.getElementById("calendarBody");

let currentDate = new Date();

function renderCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const today = new Date();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  calendarTitle.textContent = `${monthNames[month]} ${year}`;
  calendarBody.innerHTML = "";

  let dateCount = 1;
  for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      const cell = document.createElement("td");

      if (i === 0 && j < firstDay) {
        cell.textContent = "";
      } else if (dateCount <= daysInMonth) {
        cell.textContent = dateCount;

        if (
          year === today.getFullYear() &&
          month === today.getMonth() &&
          dateCount === today.getDate()
        ) {
          cell.classList.add("today");
        }

        dateCount++;
      } else {
        cell.textContent = "";
      }

      row.appendChild(cell);
    }

    calendarBody.appendChild(row);

    if (dateCount > daysInMonth) break;
  }
}

function prevMonth() {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
}

function nextMonth() {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
}

// Initial render
renderCalendar(currentDate);
