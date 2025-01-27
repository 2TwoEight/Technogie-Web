class Quiz {
    private questions: { question: string, options: string[], answer: string }[];
    private currentQuestionIndex: number;
    private score: number;

    constructor(questions: { question: string, options: string[], answer: string }[]) {
        this.questions = questions;
        this.currentQuestionIndex = 0;
        this.score = 0;
    }

    startQuiz() {
        this.showQuestion();
    }

    showQuestion() {
        const questionContainer = document.getElementById('question');
        const answerButtons = document.getElementById('answer-buttons');
        if (questionContainer && answerButtons) {
            questionContainer.innerText = this.questions[this.currentQuestionIndex].question;
            answerButtons.innerHTML = '';
            this.questions[this.currentQuestionIndex].options.forEach(option => {
                const button = document.createElement('button');
                button.innerText = option;
                button.classList.add('btn');
                button.addEventListener('click', () => this.selectAnswer(option));
                answerButtons.appendChild(button);
            });
        }
    }

    selectAnswer(selectedOption: string) {
        const correct = this.questions[this.currentQuestionIndex].answer === selectedOption;
        if (correct) {
            this.score++;
            this.updateScore();
        }
        this.showFeedback(correct);
        setTimeout(() => {
            this.currentQuestionIndex++;
            if (this.currentQuestionIndex < this.questions.length) {
                this.showQuestion();
            } else {
                this.showResults();
            }
        }, 1000);
    }

    showFeedback(correct: boolean) {
        const answerButtons = document.getElementById('answer-buttons');
        if (answerButtons) {
            Array.from(answerButtons.children).forEach(button => {
                if (button instanceof HTMLButtonElement) {
                    if (button.innerText === this.questions[this.currentQuestionIndex].answer) {
                        button.classList.add('correct');
                    } else {
                        button.classList.add('incorrect');
                    }
                }
            });
        }
    }

    updateScore() {
        const scoreContainer = document.getElementById('score');
        if (scoreContainer) {
            scoreContainer.innerText = `Score: ${this.score}`;
        }
    }

    showResults() {
        const questionContainer = document.getElementById('question-container');
        if (questionContainer) {
            questionContainer.innerHTML = `<h2>Quiz terminé!</h2><p>Votre score est de ${this.score} sur ${this.questions.length}.</p>`;
        }
    }
}

const questions = [
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

document.addEventListener('DOMContentLoaded', () => {
    const quiz = new Quiz(questions);
    quiz.startQuiz();
});


