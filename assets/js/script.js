
var lastQ = quizQuestions.length;
var questionNum = 0;
var timeremaining = 60;
var countdownInterval;
var score = 0;
var correct;




// get reference to the html
var buttons = document.getElementById("buttons")
var start = document.querySelector(".start");
var startbtn = document.querySelector("#start-btn");
var scorebtn = document.querySelector("#score-btn");
var newScoreEl = document.querySelector("finalscore");
var endGameEl = document.querySelector("endgame");
var quiz = document.querySelector("#quiz-body");
var questionEl = document.querySelector("#question");
var answer = document.querySelector("answer");
var scores = document.querySelector("#score-content");
var scorePage = document.querySelector("#scorepage");
var inputname = document.querySelector("#initials");
var showscorename = document.querySelector("#score-initials");
var replayBtns = document.querySelector("#replaybtns")
var submitnewscore = document.querySelector("#submit-score");
var highscore = document.querySelector("#highscores");
var timer = document.querySelector("time");
var Abutton = document.querySelector("#a");
var Bbutton = document.querySelector("#b");
var Cbutton = document.querySelector("#c");
var Dbutton = document.querySelector("#d");








// add event listener to start button
startbtn.addEventListener("click", startquiz);
scorebtn.addEventListener("click", viewscores);


function startquiz() {
    buttons.classList.add("hidden");
    quiz.classList.remove("hidden");
    answers.classList.add("hidden");
    questionNum = 0;
    question.classList.remove("hidden");
    scores.innerHTML = "";
    starttimer();
    while (answers.firstChild) { 
        answers.removeChild(answers.firstChild);
    }
    viewquestions(questions[questionNum]);
}




function viewquestions(quiz) {
  
}






function viewscores() {
   

    
}
function endgame() {
    

}