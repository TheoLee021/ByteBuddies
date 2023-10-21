let questions = [
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is 3 + 3?", answer: "6" },
    // ... 추가 문제들
];
let currentQuestionIndex = 0;
let score = 0;

window.onload = function() {
    displayQuestion();
};

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        document.getElementById("question-label").textContent = questions[currentQuestionIndex].question;
    } else {
        endQuiz();
    }
}

function checkAnswer(event) {
    event.preventDefault();
    let userAnswer = document.getElementById("answer").value;
    if (userAnswer === questions[currentQuestionIndex].answer) {
        score++;
        document.getElementById("score").textContent = "Score: " + score;
    }
    currentQuestionIndex++;
    document.getElementById("answer").value = ""; // Reset input
    displayQuestion();
}

function endQuiz() {
    document.body.innerHTML = "<h2>Quiz Ended</h2><p>Your score is: " + score + "</p><a href='menu.html'>Go to Home</a>";
}
