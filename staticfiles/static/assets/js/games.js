const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const loader = document.getElementById('loader');
const game = document.getElementById('game');
const endGameButton = document.getElementById('end-game-button'); // Assuming you have an element with id 'end-game-button'

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "A circuit has a current of 2.5 A flowing through it. If the time duration is 10 seconds, what is the total charge that passes through the circuit?",
        choices: [
            "20 C",
            "25 C",
            "2.5 C",
            "250 C"
        ],
        answer: 2
    }
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 20;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
    game.classList.remove('hidden');
    loader.classList.add('hidden');
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        const username = prompt('Enter your username:');

        // comment

fetch('/end/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, score }),
})
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(`Server returned ${response.status} ${response.statusText}`);
    })
    .then(data => {
        // Handle the response if needed
        console.log(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error.message);
    });

// ...


        return window.location.assign('high_scores');
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerHTML = currentQuestion.question;

    choices.forEach((choice, index) => {
        const choiceNumber = index + 1;
        choice.innerHTML = currentQuestion.choices[index];
        choice.dataset['number'] = choiceNumber;
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
};

startGame();
