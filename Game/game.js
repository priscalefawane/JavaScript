//var secret = 7;
var secret = Math.floor(Math.random() * 11) + 1;

function askQuestion() {
    var answer = prompt("please guess the secret number (1-10)");
    checkAnswer(answer)
}

function checkAnswer(yourAnswer) {
    if (yourAnswer < secret) {
        alert("incorrect, too low");
        askQuestion();
    } else if (yourAnswer > secret) {
        alert("incorrect, too high");
        askQuestion();
    } else if ("yourAnswer === secret") {
        alert("correct!!");
    } else {
        alert("invalid Input")
        askQuestion();
    }
}