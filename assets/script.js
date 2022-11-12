// display current time and date in app header
var currentDate = moment().format('MMMM Do YYYY');
$("#currentDay").text(currentDate)
// when save button on a div is clicked grab value from txt area and save into local storage based on the div key
$(".saveBtn").on("click",function(){
    var textValue = $(this).siblings(".description").val()
    var divKey = $(this).parent().attr("id")
    window.localStorage.setItem(divKey,textValue)
})
// on page load grab notes from local storage to display an appropiate time block
$("#9 textarea").val(localStorage.getItem("9"))
$("#10 textarea").val(localStorage.getItem("10"))
$("#11 textarea").val(localStorage.getItem("11"))
$("#12 textarea").val(localStorage.getItem("12"))
$("#13 textarea").val(localStorage.getItem("13"))
$("#14 textarea").val(localStorage.getItem("14"))
$("#15 textarea").val(localStorage.getItem("15"))
$("#16 textarea").val(localStorage.getItem("16"))
$("#17 textarea").val(localStorage.getItem("17"))
// colorcode the time blocks to represent hours in the past present or future
var hour = moment().format("H")
//colorcode for past therfor divnumber is less than the hour
$(".colorcode").each(function(){
    var divnumber = parseInt($(this).attr("id"))
    if(divnumber < hour) {
        // had to remove class future because it wasnt working properly
        $(this).removeClass("future")
        $(this).addClass("past")
    }
    // colorcode for present therefor divnumber is equal to hour
    else if(divnumber == hour) {
        $(this).addClass("present")
    }
    // colorcode for future therefor divnumber is less than the hour
    else if(divnumber > hour) {
        $(this).addClass("future")
    }
})