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