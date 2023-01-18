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

var secondsLeft = 60;

//timer function
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

//starts quiz when button pressed
function startQuiz() {
    console.log("started");
    startButton.classList.add("hide");
    currentQuestionIndex = 0;
    qContainerElement.classList.remove("hide");
    setTime();
    setNextQuestion();
    
}

//ends quiz when reach the end or time runs out
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

        //gets scores allready in local storage
        var allScores = JSON.parse(localStorage.getItem("scores")  || '[]' );

        allScores.push(scoreObject);

        //adds new score to the local storage

        localStorage.setItem("scores", JSON.stringify(allScores));

        alert("Click View Highscores in the top left to see the leaderboard!")

    })


};

//shows the questions 
function setNextQuestion() {
    console.log(currentQuestionIndex)
        showQuestion(questionsArray[currentQuestionIndex]);

    
};

function showQuestion(question) {
    //shows the current q 
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

    //adds answer options to the answer buttons 
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

//selection of answer 
function selectAnswer(correctBtn) {

    //listens out for a click on the html doc
    document.addEventListener('click', function (e) {
        let element = e.target;

        //checks if the button pressed is the answer to the  q
        if (element.tagName == "BUTTON" & element.className == "ans") {
            if (element.id === correctBtn) {
                var audio = new Audio('starter/assets/sfx/correct.wav') 
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
                var audio = new Audio('starter/assets/sfx/incorrect.wav')
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
        question: "Why so JavaScript and Java have similar name?",
        answer: [
            { text: "JavaScript’s syntax is loosely based on Java’s", correct: true },
            { text: "JavaScript is a stripped-down version of Java", correct: false },
            { text: "They both originated on the island of Java", correct: false },
            { text: "None of the above", correct: false }
        ]
    },

    {
        question: "What are variables used for in JavaScript Programs?",
        answer: [
            { text: 'Varying randomly', correct: false },
            { text: 'Causing high-school algebra flashbacks', correct: false },
            { text: "Storing numbers, dates, or other values", correct: true },
            { text: 'None of the above', correct: false },

        ]
    },

    {
        question: "Which of the following can’t be done with client-side JavaScript?",
        answer: [
            { text: 'Validating a form', correct: false },
            { text: 'Storing the form’s contents to a database file on the server', correct: true },
            { text: 'Sending a form’s contents by email', correct: false },
            { text: 'None of the above', correct: false },

        ]
    },

    {
        question: "______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
        answer: [
            { text: '<BODY>', correct: false },
            { text: '<HEAD>', correct: false },
            { text: '<TITLE>', correct: false },
            { text: '<SCRIPT>', correct: true },

        ]
    },

    {
        question: "Which of the following best describes JavaScript?",
        answer: [
            { text: 'an object-oriented scripting language.', correct: true },
            { text: 'a compiled scripting language.', correct: false },
            { text: 'a scripting language precompiled in the browser.', correct: false },
            { text: 'a low-level programming language.', correct: false },

        ]
    }




]

