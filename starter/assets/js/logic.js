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

var score = 0;

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    console.log("started");
    startButton.classList.add("hide");
    currentQuestionIndex = 0;
    qContainerElement.classList.remove("hide");
    setNextQuestion();
}

function setNextQuestion() {
    showQuestion(questionsArray);
  
}

function showQuestion(question) {


    if(currentQuestionIndex > question.length){
        endQuiz
    }
    else{

        questionTitleElement.innerText = question[currentQuestionIndex].question;
        var correctIndex = 0;
        var answers = [];
        var correctAns = "";
        for (i = 0; i < questionsArray[currentQuestionIndex].answer.length; i++) {

            if (questionsArray[currentQuestionIndex].answer[i].correct === true) {
                correctIndex = i;
                correctAns = questionsArray[0].answer[i].text;
            }

            answers.push(questionsArray[currentQuestionIndex].answer[i].text);
        }


        ans1.innerText = answers[0].toString();
        ans2.innerText = answers[1].toString();
        ans3.innerText = answers[2].toString();
        ans4.innerText = answers[3].toString();

        correctIndex = correctIndex + 1;

        if (correctIndex = 1) {
            ans1.dataset.correct = true;
        }
        else if (correctIndex = 2) {
            ans2.dataset.correct = true;
        }
        else if (correctIndex = 3) {
            ans3.dataset.correct = true;
        }
        else if (correctIndex = 4) {
            ans4.dataset.correct = true;
        }

        selectAnswer();

    }
        
    };

function selectAnswer() {
    ansButtons[0].addEventListener("click", function (event) {
        event.preventDefault();
        var isCorrect = ansButtons[0].dataset.correct;
        if (isCorrect === "true") {
            score = score + 10;
            this.removeEventListener("click", arguments.callee,false);
            
        }
        else {
            this.removeEventListener("click", arguments.callee,false);
            
        };


      

        currentQuestionIndex = currentQuestionIndex + 1;


        showQuestion(questionsArray);
    });

    ansButtons[1].addEventListener("click", function (event) {
        event.preventDefault();
        var isCorrect = ansButtons[1].dataset.correct;
        if (isCorrect === "true") {
            score = score + 10;
            this.removeEventListener("click", arguments.callee,false);
            
        }
        else {
            this.removeEventListener("click", arguments.callee,false);
            
        };


      

        currentQuestionIndex = currentQuestionIndex + 1;



        showQuestion(questionsArray);
    });

    ansButtons[2].addEventListener("click", function (event) {
        event.preventDefault();
        var isCorrect = ansButtons[2].dataset.correct;
        if (isCorrect === "true") {
            score = score + 10;
            this.removeEventListener("click", arguments.callee,false);
            
        }
        else {
            this.removeEventListener("click", arguments.callee,false);
            
        };

        currentQuestionIndex = currentQuestionIndex + 1;

        showQuestion(questionsArray);
    });

    ansButtons[3].addEventListener("click", function (event) {
        event.preventDefault();
        var isCorrect = ansButtons[3].dataset.correct;
        if (isCorrect === "true") {
            score = score + 10;
            this.removeEventListener("click", arguments.callee,false);
            
        }
        else {
            this.removeEventListener("click", arguments.callee,false);
            
        };



        currentQuestionIndex = currentQuestionIndex + 1;

        showQuestion(questionsArray);
    });

}

function endQuiz(){
    console.log("end")
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

