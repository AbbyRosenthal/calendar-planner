// dateTime.fromObject({ outputCalendar: c }).toLocaleString(DateTime.DATE_FULL);

var saveTextArea = document.querySelector("#textarea")
var textArea;
var scheduleTime = document.querySelector(".time-block");
var timeNow = moment().hours();


//time dispaly at top ..WORKING!
var displayTime = document.getElementById("todaysDate")
var currentTime = moment();
displayTime.textContent = currentTime.format('MMMM Do YYYY, h:mm:ss a')


//save to local storage ** WORKING for 8am
document.querySelector(".saveBtn").addEventListener("click", function () {
  var saveTask = document.querySelector(".userinput");
  localStorage.setItem("hour8", saveTask);
  console.log("LOCAL STORAGE WORKS... just kidding you still need to fix it!!")
  //get item from local storage & make an object **WORKING
  JSON.parse(localStorage.getItem("hour8"));
  $("#8".description).val(localStorage.getItem("hour8"));
  console.log(document.querySelectorAll("textarea"))


//CHANGING COLORS BASED ON TIME OF DAY **ONLY WORKS FOR 8AM

$(".time-block").addClass("past")
//turns time into a usable integer... I think
var schedule = parseInt($(this).parent().attr("id"));

if (schedule < timeNow) {
  document.querySelectorAll("textarea").classList.add("past");
}
else if (schedule === timeNow) {
  document.querySelectorAll("textarea").classList.add("present");
}
else {
  document.querySelectorAll("textarea").classList.add("future");
}


})



// //for loop to try all buttons **NOT WORKING
// addEventListener("click", saveBtn) => {
//   var x = document.querySelectorAll(".saveBtn")
//   for (i = 0; i < x.length; i++)
//   x[i].addEventListener("click", function(e) {
//     newrelic.addPageAction("textarea")
//   });
// };








//LOCAL STORAGE CODE CHARLIE WROTE
//SAVES TO localStorage for 9am ** NONE OF THIS WORKS AFTER OFFICE HOURS TUESDAY
// document.getElementById("saveBtn9").addEventListener("click", function (e) {
//   // Assume 9 AM for now
//   var saveTextArea = document.querySelector("#textarea");
//   var thing = {
//     "item9AM": saveTextArea.value.trim()
//   }
//   localStorage.setItem("textArea", JSON.stringify(thing));
// alert("Task has been saved!")
// console.log("yayyy it saved")
// });

// //how to save when browswer refreshes **NOT CURRENTLY WORKING
// var loadTasks = function() {
// textArea = JSON.parse(localStorage.getItem("item9AM"))
// console.log(textArea);
// }

// //keep there when browswer refreshes
// $("#9am .description").val(localStorage.getItem("9am"));

// loadTasks();
