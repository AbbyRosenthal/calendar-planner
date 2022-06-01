// dateTime.fromObject({ outputCalendar: c }).toLocaleString(DateTime.DATE_FULL);

var saveTextArea = document.querySelector("#textarea") 
var textArea;
var scheduleTime = document.querySelector(".time-block");

//time dispaly at top ..WORKING!
var displayTime = document.getElementById("todaysDate")
var currentTime = moment();

displayTime.textContent = currentTime.format('MMMM Do YYYY, h:mm:ss a')



//SAVES TO localStorage for 9am
  document.getElementById("saveBtn9").addEventListener("click", function (e) {
    // Assume 9 AM for now
    var saveTextArea = document.querySelector("#textarea");
    var thing = {
      "item9AM": saveTextArea.value.trim()
    }
    localStorage.setItem("textArea", JSON.stringify(thing));
  alert("Task has been saved!")
  console.log("yayyy it saved")
});

//how to save when browswer refreshes **NOT CURRENTLY WORKING
var loadTasks = function() {
  textArea = JSON.parse(localStorage.getItem("textArea"))
  console.log(textArea);
};

loadTasks();



 
//CHANGING COLORS BASED ON TIME OF DAY **NOT WORKING
var timeNow = moment().hours();

$(".time-block").each(function(){
  //turns time into a usable integer... I think
  var schedule = parseInt($(this).parent().attr("id"));

  if (schedule < timeNow) {
    scheduleTime.addClass("past");
  }
  else if (schedule === timeNow) {
    scheduleTime.addClass("present");
  }
  else {
    scheduleTime.addClass("future");
  }
})

