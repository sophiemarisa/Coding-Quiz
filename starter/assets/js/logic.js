var startButton = document.getElementById("start");
var qContainerElement = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var answerbtns = document.getElementById("choices");

var questions = [
    {
        question: "What does CSS stand for?",
        answers:[
            {text: "Cascading Style Sheets", correct: true},
            {text: "Coding Style Sheet", correct: false},
            {text: "Cascading Sheets Style", correct:false},
            {text: "Cascading Serious Sheets", correct:false}
        ]
    }
];

var currentQuestionIndex;

startButton.addEventListener("click", startQuiz);

function startQuiz(){
    console.log("started");
    startButton.classList.add("hide");
    currentQuestionIndex = 0;
    qContainerElement.classList.remove("hide");
    setNextQuestion();
}

function setNextQuestion(){
    showQuestion(questions[currentQuestionIndex])
}

function showQuestion(question){
    qContainerElement.innerText = question.question
}