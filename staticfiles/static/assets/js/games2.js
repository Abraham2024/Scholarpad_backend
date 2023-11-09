const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const loader = document.getElementById('loader');
const game = document.getElementById('game');
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];
let speechSynthesis = window.speechSynthesis;

let questions = [
    {
        "question": "Choose the most appropriate option nearest in meaning to the word(s) underlined.  Barely six months after his father's demise, he has nothing left again of his <ul> patrimony </ul>",
        "choice1": "inheritance",
        "choice2": "property",
        "choice3": "reputation",
        "choice4": "valuables",
        "answer": 1
        },
        
        {
            "question": "The meeting was organized at _______ instance?",
            "choice1": "whom",
            "choice2": "whose's",
            "choice3": "whose",
            "choice4": "whom's",
            "answer": 3
            },
        
            {
                "question": "The two friends made promises to _____ when they met last year",
                "choice1": "each other",
                "choice2": "one another",
                "choice3": "theirselves",
                "choice4": "themselves",
                "answer": 1
                },
        
        {
            "question": "Choose the most appropriate option nearest in meaning to the word(s) underlined. The office assistant was dismissed for <ul> pilfering </ul> ",
            "choice1": "fighting",
            "choice2": "incompetence",
            "choice3": "stealing",
            "choice4": "mismanagement",
            "answer": 3
            },
            {
                "question": "Choose the most appropriate option nearest in meaning to the word(s) underlined. The coach praised the team for their <ul> resilience </ul> and determination.",
                "choice1": "weakness",
                "choice2": "effort",
                "choice3": "indecision",
                "choice4": "strength",
                "answer": 4
                },
        
        {
            "question": "Choose the most appropriate option nearest in meaning to the word(s) underlined. She displayed remarkable <ul> dexterity </ul> in playing the piano.",
            "choice1": "skill",
            "choice2": "enthusiasm",
            "choice3": "confidence",
            "choice4": "intelligence",
            "answer": 1
            },
        
        {
        "question": "What is the term for a figure of speech that uses exaggeration for emphasis or effect?",
        "choice1": "Hyperbole",
        "choice2": "Irony",
        "choice3": "Metaphor",
        "choice4": "Oxymoron",
        "answer": 1
        },
        
        {
        "question": "Which word describes the repetition of initial sounds in neighboring words?",
        "choice1": "Onomatopoeia",
        "choice2": "Personification",
        "choice3": "Alliteration",
        "choice4": "Metonymy",
        "answer": 3
        },
        
        {
            "question": "Choose the most appropriate option nearest in meaning to the word(s) underlined.m   The emphasis placed on good moral conduct by the society in the past seems to have been <ul> relaxed </ul>",
            "choice1": "avoided",
            "choice2": "improved",
            "choice3": "weakened",
            "choice4": "outdated",
            "answer": 3
            },
        
        {
            "question": "Choose the most appropriate option nearest in meaning to the word(s) underlined. He maintained that Nigerians need a leader with an <u> iron fist </u>",
            "choice1": "fist made of iron",
            "choice2": "severe in treatment",
            "choice3": "difficult to please",
            "choice4": "strong as iron",
            "answer": 2
            },
            
            {
                "question": "Mr. Jude made the meeting _____his poor health",
                "choice1": "even though",
                "choice2": "inspite of",
                "choice3": "in spite of",
                "choice4": "despite that",
                "answer": 3
                },
                {
                    "question": "The manager met the ______ who came visiting last week",
                    "choice1": "dark tall good-looking American",
                    "choice2": "good-looking tall dark American",
                    "choice3": "Tall dark American good-looking",
                    "choice4": "American dark tall good-looking",
                    "answer": 2
                    },
                    
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 20;
startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
  game.classList.remove('hidden');
  loader.classList.add('hidden');
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem('mostRecentScore', score);
    // Go to the end page
    return window.location.assign('end.html');
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  // Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice, index) => {
    const choiceNumber = index + 1;
    choice.innerText = currentQuestion['choice' + choiceNumber];
    choice.dataset['number'] = choiceNumber;
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;

  // Read the question using text-to-speech
  readText(currentQuestion.question);
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
      readText('Correct!');
    } else {
      readText('Wrong!');
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

// Function to read text using text-to-speech
function readText(text) {
  const speechText = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(speechText);
}

