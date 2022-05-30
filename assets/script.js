// dateTime.fromObject({ outputCalendar: c }).toLocaleString(DateTime.DATE_FULL);

//time dispaly at top ..WORK IN CONSOLE LOG, WHY DOES IT NOT DISPLAY ON MY PAGE?
var displayTime = document.getElementById("todaysDate")
var currentTime = moment();

displayTime.textContent = currentTime.format('MMMM Do YYYY, h:mm:ss a')


$(".container .list-group").sortable({
    connectWith: $(".container")
  });


//save to localStorage ***NOT CURRENTLY WORKING
document.getElementById("saveBtn").addEventListener("click", function() {
var textArea = document.getElementById("textarea").value ;
localStorage.setItem("textArea",textArea);
alert("Saved Task!")
console.log("task Saved")
});


 





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



  