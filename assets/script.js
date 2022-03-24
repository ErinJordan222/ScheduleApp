var timeDisplay = moment().format('MM-DD-YYYY')
document.getElementById("currentDay").innerHTML = timeDisplay;

var timeDisplay = moment().format('HH:MM:SS')
document.getElementById("currentTime").innerHTML = timeDisplay;

var currentHour = moment().hours()
currentHour = parseInt(currentHour)

// 9 AM 
var event9 = document.getElementById("btn9");
var eventTxt9 = document.getElementById("event9");
event9.addEventListener("click", function(event) {
     event.preventDefault();
     var nineAM = eventTxt9.value
     localStorage.setItem("nineAM", nineAM);
 })

var planner9get = localStorage.getItem("nineAM");
eventTxt9.textContent = planner9get;

// 10 AM
var event10 = document.getElementById("btn10");
var eventTxt10 = document.getElementById("event10");
event10.addEventListener("click", function(event) {
     event.preventDefault();
     var tenAM = eventTxt10.value
     localStorage.setItem("tenAM", tenAM);
 })

 var planner10get = localStorage.getItem("tenAM");
eventTxt10.textContent = planner10get;

 //11 AM
 var event11 = document.getElementById("btn11");
var eventTxt11 = document.getElementById("event11");
event11.addEventListener("click", function(event) {
     event.preventDefault();
     var elevenAM = eventTxt11.value
     localStorage.setItem("elevenAM", elevenAM);

})

var planner11get = localStorage.getItem("elevenAM");
eventTxt11.textContent = planner11get;


//12 PM
var event12 = document.getElementById("btn12");
var eventTxt12 = document.getElementById("event12");
event12.addEventListener("click", function(event) {
     event.preventDefault();
     var twelvePM = eventTxt12.value
     localStorage.setItem("twelvePM", twelvePM);

})

var planner12get = localStorage.getItem("twelveAM");
eventTxt12.textContent = planner12get;

//1 PM
var event1 = document.getElementById("btn1");
var eventTxt1 = document.getElementById("event1");
event1.addEventListener("click", function(event) {
     event.preventDefault();
     var onePM = eventTxt1.value
     localStorage.setItem("onePM", onePM);

})

var planner1get = localStorage.getItem("onePM");
eventTxt1.textContent = planner1get;

//2 PM
var event2 = document.getElementById("btn2");
var eventTxt2 = document.getElementById("event2");
event2.addEventListener("click", function(event) {
     event.preventDefault();
     var twoPM = eventTxt2.value
     localStorage.setItem("twoPM", twoPM);

})

var planner2get = localStorage.getItem("twoPM");
eventTxt2.textContent = planner2get;


//3 PM
var event3 = document.getElementById("btn3");
var eventTxt3 = document.getElementById("event3");
event3.addEventListener("click", function(event) {
     event.preventDefault();
     var threePM = eventTxt3.value
     localStorage.setItem("threePM", threePM);

})

var planner3get = localStorage.getItem("threePM");
eventTxt3.textContent = planner3get;

var event4 = document.getElementById("btn4");
var eventTxt4 = document.getElementById("event4");
event4.addEventListener("click", function(event) {
     event.preventDefault();
     var fourPM = eventTxt4.value
     localStorage.setItem("fourPM", fourPM);

})

var planner4get = localStorage.getItem("fourPM");
eventTxt4.textContent = planner4get;


//4 PM
var event4 = document.getElementById("btn4");
var eventTxt4 = document.getElementById("event4");
event4.addEventListener("click", function(event) {
     event.preventDefault();
     var fourPM = eventTxt4.value
     localStorage.setItem("fourPM", fourPM);

})

var planner4get = localStorage.getItem("fourPM");
eventTxt4.textContent = planner4get;


//5 PM
var event5 = document.getElementById("btn5");
var eventTxt5 = document.getElementById("event5");
event5.addEventListener("click", function(event) {
     event.preventDefault();
     var fivePM = eventTxt5.value
     localStorage.setItem("fivePM", fivePM);

})

var planner5get = localStorage.getItem("fivePM");
eventTxt5.textContent = planner5get;


$(".time-row").each(function() {
    var timeID =+ ($(this).attr("id"));
    var hourRow = parseInt(timeID,("-")[1])

    if(currentHour > hourRow) {
        $(this).addClass("past")

    } else if (currentHour === hourRow) {
        $(this).addClass("future")
    }
})