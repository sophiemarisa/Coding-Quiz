scoreList = document.getElementById("highscores");
clearScores = document.getElementById('clear');

var scores = JSON.parse(localStorage.getItem("scores"));

var sortedArr = scores.sort((a, b) => b.lastScore-a.lastScore);



for( i=0; i<sortedArr.length;i++){

    console.log(sortedArr[i].lastScore)

    var li = document.createElement("li");  
    li.className = "file";

    var a = document.createElement("a");
    a.innerHTML = sortedArr[i].name + " - " + sortedArr[i].lastScore;

    li.appendChild(a);
    scoreList.appendChild(li);
}

clearScores.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
})
