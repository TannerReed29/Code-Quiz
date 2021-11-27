

var timer = 60;
var score = 0;



// get reference to the start button
var start = document.querySelector(".start");
var startbtn = document.querySelector("#start-btn");
var scorebtn = document.querySelector("#score-btn");
var quiz = document.querySelector("#quiz-body");
var buttons = document.getElementById("buttons")
// add event listener to start button
startbtn.addEventListener("click", startquiz);
scorebtn.addEventListener("click", viewscores);


function startquiz() {
    buttons.classList.add("hidden");
    quiz.classList.remove("hidden");

}

function viewscores() {
    
}
