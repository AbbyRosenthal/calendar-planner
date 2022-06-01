// dateTime.fromObject({ outputCalendar: c }).toLocaleString(DateTime.DATE_FULL);

var saveTextArea = document.querySelector("#textarea") 
var textArea;

//time dispaly at top ..WORKing!!
var displayTime = document.getElementById("todaysDate")
var currentTime = moment();

displayTime.textContent = currentTime.format('MMMM Do YYYY, h:mm:ss a')

//SAVES TO localStorage
  document.getElementById("saveBtn").addEventListener("click", function (e) {
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
  console.log("This is the thing! Hooray!", textArea);
};

loadTasks();
 




// // //need to use in order to color code backgrounds **REFER TO 5.4.6
// var auditTask = function(taskEl) {
//     // get date from task element
//     var date = $(taskEl).find("span").text().trim();
  
//     // convert to moment object at 5:00pm
//     var time = moment(date, "L").set("hour", 17);
  
//     // remove any old classes from element
//     $(taskEl).removeClass("list-group-item-warning list-group-item-danger");
  
//     // apply new class if task is near/over due date **THIS CHNGES THE COLOR OF BACKGROUND
//     if (moment().isAfter(time)) {
//       $(taskEl).addClass("list-group-item-danger");
//     }
//     else if (Math.abs(moment().diff(time, "days"))<= 2){
//         $(taskEl).addClass("list-group-item-warning")
// ;    }
//   };



  