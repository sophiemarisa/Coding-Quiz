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
    questionTitleElement.innerText = question[currentQuestionIndex].question;
    var correctIndex = 0;
    var answers = [];
    for (i = 0; i < questionsArray[currentQuestionIndex].answer.length; i++) {

        if(questionsArray[0].answer[i].correct === true){
            correctIndex = i;
        }
        
        answers.push(questionsArray[0].answer[i].text);
    }

    ans1.innerText = answers[0].toString();
    ans2.innerText = answers[1].toString();
    ans3.innerText = answers[2].toString();
    ans4.innerText = answers[3].toString();

    correctIndex = correctIndex + 1;

    if(correctIndex = 1){
        ans1.dataset.correct = true;
    }
    else if(correctIndex = 2){
        ans2.dataset.correct = true;
    }
    else if(correctIndex = 3){
        ans3.dataset.correct = true;
    }
    else if(correctIndex = 4){
        ans4.dataset.correct = true;
    }

    console.log(ans1.dataset.correct);
    console.log(ans2.dataset.correct);
    console.log(ans3.dataset.correct);
    console.log(ans4.dataset.correct);

    for(let i=0; i<ansButtons.length; i++){

        ansButtons[i].addEventListener("click", function(event){
            event.preventDefault();
            var isCorrect = ansButtons[i].dataset.correct;
            if(isCorrect = true){
                score = score + 10;
                console.log(score);
            }
        });
        
    }

    //Function To Render My Answers// 
    function showAnswer(questionsArray) {
        //console.log(questionsArray)
    }
    //showAnswer(questionsArray)
}


function showAnswer(question, correctIndex){

}

function selectAnswer() {

}

var questionsArray = [
{
    question: "Fav sport",
    answer: [
        { text: 'Football', correct: true },
        { text: "Golf", correct: false },
        { text: "BasketBall", correct: false },
        { text: "Rugby", correct: false }
    ]
}


]

