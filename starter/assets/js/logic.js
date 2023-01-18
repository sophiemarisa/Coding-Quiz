var startButton = document.getElementById("start");
var qContainerElement = document.getElementById("questions");
let currentQuestionIndex = 0;
var questionTitleElement = document.getElementById("question-title")
var choicesElement = document.getElementById("choices")
var ans1 = document.getElementById("Answer1");
var ans2 = document.getElementById("Answer2");
var ans3 = document.getElementById("Answer3");
var ans4 = document.getElementById("Answer4");
var ansButtons = [ans1, ans2, ans3, ans4];
var endContainer = document.getElementById("end-screen")
var finalScore = document.getElementById("final-score")
var submitBtn = document.getElementById("submit")
var timer = document.getElementById("time")

var score = 0;

var secondsLeft = 30;

function setTime(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timer.textContent = secondsLeft ;

        if(secondsLeft === 0){
            clearInterval(timerInterval);
            endQuiz();
        }

    },1000);
}

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    console.log("started");
    startButton.classList.add("hide");
    currentQuestionIndex = 0;
    qContainerElement.classList.remove("hide");
    setTime();
    setNextQuestion();
    
}

function endQuiz() {
    console.log("end")
    finalScore.innerText = score;
    endContainer.classList.remove("hide");
    submitBtn.addEventListener("click", function(){
        let initials = document.getElementById("initials").value;

        var scoreObject = {
            name: initials,
            lastScore: score,
        }

        var allScores = JSON.parse(localStorage.getItem("scores")  || '[]' );

        allScores.push(scoreObject);

        localStorage.setItem("scores", JSON.stringify(allScores));

        alert("Click View Highscores in the top left to see the leaderboard!")

    })


};

function setNextQuestion() {
    console.log(currentQuestionIndex)
        showQuestion(questionsArray[currentQuestionIndex]);

    
};

function showQuestion(question) {

    questionTitleElement.innerText = question.question;
    var correctIndex = 0;
    var answers = [];
    var correctAns = "";
    for (i = 0; i < question.answer.length; i++) {

        if (question.answer[i].correct === true) {
            correctIndex = i;
            correctAns = question.answer[i].text;
        }

        answers.push(question.answer[i].text);
    }


    ans1.innerText = answers[0].toString();
    ans2.innerText = answers[1].toString();
    ans3.innerText = answers[2].toString();
    ans4.innerText = answers[3].toString();

    correctIndex = correctIndex + 1;
    

    var correctBtn = ""

    if (correctIndex === 1) {
        correctBtn = "Answer1"
    }
    else if (correctIndex === 2) {
        correctBtn = "Answer2"
    }
    else if (correctIndex === 3) {
        correctBtn = "Answer3"
    }
    else if (correctIndex === 4) {
        correctBtn = "Answer4"
    }


    selectAnswer(correctBtn);
};

function selectAnswer(correctBtn) {

    document.addEventListener('click', function (e) {
        let element = e.target;
        if (element.tagName == "BUTTON" & element.className == "ans") {
            if (element.id === correctBtn) {
                var audio = new Audio('assets/sfx/correct.wav')
                audio.loop = false;
                audio.play();

                this.removeEventListener("click", arguments.callee,false);
                score = score + 10;
                //console.log(currentQuestionIndex, score);
                currentQuestionIndex = currentQuestionIndex + 1;
                if(currentQuestionIndex ===5){
                    endQuiz()
                }
                else{
                    setNextQuestion();
                }
                return;
            }
            else {
                var audio = new Audio('assets/sfx/incorrect.wav')
                audio.loop = false;
                audio.play();
                this.removeEventListener("click", arguments.callee,false);
                //console.log(currentQuestionIndex, score);
                currentQuestionIndex = currentQuestionIndex + 1;
                secondsLeft = secondsLeft - 10;
                if(currentQuestionIndex ===5 || secondsLeft < 0 ){   
                    endQuiz();
                }
                else{
                    setNextQuestion();
                }
                return;

            }
        }
        return;
    })
    return;
};



var questionsArray = [
    {
        question: "Fav sport",
        answer: [
            { text: 'Football', correct: true },
            { text: "Golf", correct: false },
            { text: "BasketBall", correct: false },
            { text: "Rugby", correct: false }
        ]
    },

    {
        question: "2+2=?",
        answer: [
            { text: '3', correct: false },
            { text: '5', correct: false },
            { text: '4', correct: true },
            { text: '6', correct: false },

        ]
    },

    {
        question: "3+2=?",
        answer: [
            { text: '3', correct: false },
            { text: '5', correct: true },
            { text: '4', correct: false },
            { text: '6', correct: false },

        ]
    },

    {
        question: "4+2=?",
        answer: [
            { text: '3', correct: false },
            { text: '5', correct: false },
            { text: '4', correct: false },
            { text: '6', correct: true },

        ]
    },

    {
        question: "5-2=?",
        answer: [
            { text: '3', correct: true },
            { text: '5', correct: false },
            { text: '4', correct: false },
            { text: '6', correct: false },

        ]
    }




]

