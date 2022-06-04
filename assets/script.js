// dateTime.fromObject({ outputCalendar: c }).toLocaleString(DateTime.DATE_FULL);

var saveTextArea = document.querySelector("#textarea")
var textArea;
var scheduleTime = document.querySelector(".time-block");
var timeNow = moment().hours();


//time dispaly at top ..WORKING!
var displayTime = document.getElementById("todaysDate")
var currentTime = moment();
displayTime.textContent = currentTime.format('MMMM Do YYYY, h:mm:ss a')


//save to local storage 
document.querySelectorAll(".saveBtn").forEach(function (saveButton) {
  var hourId = parseInt($(saveButton).parent().attr("id"));
  var saveTask = saveButton.parentElement.querySelector(".userinput");
  //get item from local storage & make an object **WORKING
  saveTask.value = localStorage.getItem(hourId);
  
  //CHANGING COLORS BASED ON TIME OF DAY 


  if (hourId < timeNow) {
    saveTask.classList.add("past");
  }
  else if (hourId === timeNow) {
    saveTask.classList.add("present");
  }
  else {
    saveTask.classList.add("future");
  }

  saveButton.addEventListener("click", function () {

    localStorage.setItem(hourId, saveTask.value);
  })
})



