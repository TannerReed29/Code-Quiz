
var lastQ = quizQuestions.length;
var questionNum = 0;
var timeremaining = 60;
var countdownInterval;
var score = 0;
var correct;




// get reference to the html
var start = document.querySelector("#start");
var startbtn = document.querySelector("#start-btn");
var scorebtn = document.querySelector("#score-btn");
var newScoreEl = document.querySelector("#finalscore");
var endGameEl = document.querySelector("#endgame");
var quiz = document.querySelector("#quiz-body");
var questionEl = document.querySelector("#question");
var answer = document.querySelector("#answer");
var scores = document.querySelector("#score-content");
var scorePage = document.querySelector("#scorePage");
var inputname = document.querySelector("#initials");
var showscorename = document.querySelector("#score-initials");
var replayBtns = document.querySelector("#replaybtns")
var submitnewscore = document.querySelector("#submit-score");
var highscore = document.querySelector("#highscores");
var timer = document.querySelector("#timer");
var Abutton = document.querySelector("#a");
var Bbutton = document.querySelector("#b");
var Cbutton = document.querySelector("#c");
var Dbutton = document.querySelector("#d");








// add event listener to start button
startbtn.addEventListener("click", startquiz);
scorebtn.addEventListener("click", showhighScore);






function viewquestion() {
    endGameEl.style.display = "none";
    if (questionNum === lastQ){
        return viewscore();
    }
    var currentQ = quizQuestions[questionNum];
    questionEl.innerHTML = "<p>" + currentQ.question + "</p>";
    Abutton.innerHTML = currentQ.choiceA;
    Bbutton.innerHTML = currentQ.choiceB;
    Cbutton.innerHTML = currentQ.choiceC;
    Dbutton.innerHTML = currentQ.choiceD;
}



function startquiz() {
    endGameEl.style.display = "none";
    start.style.display = "none";
    viewquestion();

    countdownInterval = setInterval(function() {
        timeremaining--;
        timer.textContent = "Time Remaining: " + timeremaining;

        if(timeremaining === 0) {
            clearInterval(countdownInterval);
            viewscore();
        }
    }, 1000);
    quiz.style.display = "block";
}



function viewscore() {
    quiz.style.display = "none";
    endGameEl.style.display = "flex";
    clearInterval(countdownInterval);
    inputname.value = "";
    newScoreEl.innerHTML = "Nice! " + score + " out of " + quizQuestions.length + " correct!";
}

submitnewscore.addEventListener("click", function highscore(){

    if (inputname.value === "") {
        alert("Cannot be blank");
        return false;
    }else{
        var savedScores = JSON.parse(localStorage.getItem("savedScores")) || [];
        var user = inputname.value.trim();
        var currentScore = {
            name : user,
            score : score
        };


        endGameEl.style.display = "none";
        scores.style.display = "flex";
        scorePage.style.display = "block";
        replayBtns.style.display = "flex";


        savedScores.push(currentScore);
        localStorage.setItem("savedScores", JSON.stringify(savedScores));
        genHighscores();
    }
});




function genHighscores(){
    showscorename.innerHTML = "";
    highscore.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedScores")) || [];
    for (i=0; i<highscores.length; i++){
        var newname = document.createElement("li");
        var newscore = document.createElement("li");
        newname.textContent = highscores[i].name;
        newscore.textContent = highscores[i].score;
        showscorename.appendChild(newname);
        highscore.appendChild(newscore);
    }
}

function showhighScore(){
    start.style.display = "none";
    endGameEl.style.display = "none";
    scores.style.display = "flex";
    scorePage.style.display = "block";
    replayBtns.style.display = "flex";

    genHighscores();
}

function clear(){
    window.localStorage.clear();
    showscorename.textContent = "";
    highscore.textContent = "";
}




function replay(){
    scores.style.display = "none";
    endGameEl.style.display = "none";
    start.style.display = "flex";
    timeremaining = 60;
    score = 0;
    questionNum = 0;
}

function answerCheck(answer){
    correct = quizQuestions[questionNum].correctAnswer;

    if (answer === correct && questionNum !== lastQ){
        score++;
        alert("Correct Answer! ");
        answer.textContent= quizQuestions[questionNum].correctAnswer;
        questionNum++;
        viewquestion();
    }else if (answer !== correct && questionNum !== lastQ){
        alert("Incorrect Answer")
        timeremaining--;
        questionNum++;
        viewquestion();
    }else{
        viewscore();
    }
}