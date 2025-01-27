var Quiz = /** @class */ (function () {
    function Quiz(questions) {
        this.questions = questions;
        this.currentQuestionIndex = 0;
        this.score = 0;
    }
    Quiz.prototype.startQuiz = function () {
        this.showQuestion();
    };
    Quiz.prototype.showQuestion = function () {
        var _this = this;
        var questionContainer = document.getElementById('question');
        var answerButtons = document.getElementById('answer-buttons');
        if (questionContainer && answerButtons) {
            questionContainer.innerText = this.questions[this.currentQuestionIndex].question;
            answerButtons.innerHTML = '';
            this.questions[this.currentQuestionIndex].options.forEach(function (option) {
                var button = document.createElement('button');
                button.innerText = option;
                button.classList.add('btn');
                button.addEventListener('click', function () { return _this.selectAnswer(option); });
                answerButtons.appendChild(button);
            });
        }
    };
    Quiz.prototype.selectAnswer = function (selectedOption) {
        var _this = this;
        var correct = this.questions[this.currentQuestionIndex].answer === selectedOption;
        if (correct) {
            this.score++;
            this.updateScore();
        }
        this.showFeedback(correct);
        setTimeout(function () {
            _this.currentQuestionIndex++;
            if (_this.currentQuestionIndex < _this.questions.length) {
                _this.showQuestion();
            }
            else {
                _this.showResults();
            }
        }, 1000);
    };
    Quiz.prototype.showFeedback = function (correct) {
        var _this = this;
        var answerButtons = document.getElementById('answer-buttons');
        if (answerButtons) {
            Array.from(answerButtons.children).forEach(function (button) {
                if (button instanceof HTMLButtonElement) {
                    if (button.innerText === _this.questions[_this.currentQuestionIndex].answer) {
                        button.classList.add('correct');
                    }
                    else {
                        button.classList.add('incorrect');
                    }
                }
            });
        }
    };
    Quiz.prototype.updateScore = function () {
        var scoreContainer = document.getElementById('score');
        if (scoreContainer) {
            scoreContainer.innerText = "Score: ".concat(this.score);
        }
    };
    Quiz.prototype.showResults = function () {
        var questionContainer = document.getElementById('question-container');
        if (questionContainer) {
            questionContainer.innerHTML = "<h2>Quiz termin\u00E9!</h2><p>Votre score est de ".concat(this.score, " sur ").concat(this.questions.length, ".</p>");
        }
    };
    return Quiz;
}());
var questions = [
    {
        question: 'Quelle est la capitale de la France?',
        options: ['Paris', 'Londres', 'Berlin', 'Madrid'],
        answer: 'Paris'
    },
    {
        question: 'Quelle est la plus grande planète du système solaire?',
        options: ['Terre', 'Mars', 'Jupiter', 'Saturne'],
        answer: 'Jupiter'
    },
    {
        question: 'Quelle est la langue la plus parlée au monde?',
        options: ['Anglais', 'Espagnol', 'Chinois', 'Français'],
        answer: 'Chinois'
    }
];
document.addEventListener('DOMContentLoaded', function () {
    var quiz = new Quiz(questions);
    quiz.startQuiz();
});
