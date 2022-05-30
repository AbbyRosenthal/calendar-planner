DateTime.fromObject({ outputCalendar: c }).toLocaleString(DateTime.DATE_FULL);

//time dispaly at top ..WORK IN CONSOLE LOG, WHY DOES IT NOT DISPLAY ON MY PAGE?
var displayTime = document.querySelector("#currentday")
var currentTime = moment();

displayTime.textContent = currentTime.format('MMMM Do YYYY, h:mm:ss a')