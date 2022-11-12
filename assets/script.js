// display current time and date in app header
var currentDate = moment().format('MMMM Do YYYY');
$("#currentDay").text(currentDate)
// when save button on a div is clicked grab value from txt area and save into local storage based on the div key
$(".saveBtn").on("click",function(){
    var textValue = $(this).siblings(".description").val()
    var divKey = $(this).parent().attr("id")
    window.localStorage.setItem(divKey,textValue)
})