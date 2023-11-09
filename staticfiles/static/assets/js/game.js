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
  // Define the quiz questions as an array of objects
  {
    question: "A circuit has a current of 2.5 A flowing through it. If the time duration is 10 seconds, what is the total charge that passes through the circuit?",
    choice1: "20 C",
    choice2: "25 C",
    choice3: "2.5 C",
    choice4: "250 C",
    answer: 2
  },
  {
    question: "A resistor with a resistance of 5 ohms has a current of 2 A flowing through it. What is the voltage across the resistor?",
    choice1: "0.4 V",
    choice2: "2 V",
    choice3: "5 V",
    choice4: "10 V",
    answer: 4
  },
  {
    question: "In a circuit, a 12 V battery is connected to a resistor with a resistance of 6 ohms. What is the current flowing through the resistor?",
    choice1: "0.5 A",
    choice2: "2 A",
    choice3: "6 A",
    choice4: "18 A",
    answer: 2
  },
  {
    question: "A circuit has a voltage of 24 V applied across it and a current of 3 A flowing through it. What is the resistance of the circuit?",
    choice1: "8 ohms",
    choice2: "18 ohms",
    choice3: "72 ohms",
    choice4: "72 A",
    answer: 1
  },
  {
    question: "A circuit has a power of 60 W and a voltage of 12 V. What is the current flowing through the circuit?",
    choice1: "5 A",
    choice2: "7.5 A",
    choice3: "10 A",
    choice4: "720 A",
    answer: 1
  },
  {
    question: "A circuit has a power of 100 W and a resistance of 20 ohms. What is the current flowing through the circuit?",
    choice1: "2 A",
    choice2: "5 A",
    choice3: "10 A",
    choice4: "200 A",
    answer: 2
  },
  {
    question: "A circuit has a power of 75 W and a current of 3 A flowing through it. What is the voltage across the circuit?",
    choice1: "25 V",
    choice2: "50 V",
    choice3: "225 V",
    choice4: "225 W",
    answer: 1
  },
  {
    question: "A circuit has a voltage of 9 V applied across it and a resistance of 3 ohms. What is the current flowing through the circuit?",
    choice1: "3 A",
    choice2: "6 A",
    choice3: "12 A",
    choice4: "27 A",
    answer: 1
  },
  {
    question: "A circuit has a resistance of 10 ohms and a current of 0.5 A flowing through it. What is the voltage across the circuit?",
    choice1: "5 V",
    choice2: "10 V",
    choice3: "20 V",
    choice4: "50 V",
    answer: 1
  },
  {
    question: "A circuit has a resistance of 8 ohms and a voltage of 32 V applied across it. What is the current flowing through the circuit?",
    choice1: "4 A",
    choice2: "8 A",
    choice3: "16 A",
    choice4: "64 A",
    answer: 1
  },
  {
    question: "A force of 10 N is applied to move an object a distance of 5 meters. How much work is done?",
    choice1: "2 J",
    choice2: "5 J",
    choice3: "10 J",
    choice4: "50 J",
    answer: 4
  },
  {
    question: "A car accelerates from rest to a speed of 20 m/s in 4 seconds. If the mass of the car is 1000 kg, what is the average power exerted?",
    choice1: "200 W",
    choice2: "400 W",
    choice3: "800 W",
    choice4: "1000 W",
    answer: 2
  },
  {
    question: "A block is lifted vertically against gravity with a force of 50 N for a height of 10 meters. How much work is done?",
    choice1: "500 J",
    choice2: "1000 J",
    choice3: "2500 J",
    choice4: "5000 J",
    answer: 2
  },
  {
    question: "A machine does 200 J of work in 10 seconds. What is the power output of the machine?",
    choice1: "20 W",
    choice2: "40 W",
    choice3: "200 W",
    choice4: "400 W",
    answer: 1
  },
  {
    question: "A ball is thrown vertically upward with an initial velocity of 20 m/s. If the maximum height reached by the ball is 25 meters, what is the change in its potential energy?",
    choice1: "250 J",
    choice2: "500 J",
    choice3: "1000 J",
    choice4: "2000 J",
    answer: 2
  },
  {
    question: "A spring with a spring constant of 100 N/m is compressed by 0.1 meters. What is the potential energy stored in the spring?",
    choice1: "0.5 J",
    choice2: "1 J",
    choice3: "2 J",
    choice4: "5 J",
    answer: 3
  },
  {
    question: "A cyclist applies a force of 50 N to pedal a bicycle at a constant speed of 10 m/s. What is the power output of the cyclist?",
    choice1: "500 W",
    choice2: "1000 W",
    choice3: "2000 W",
    choice4: "5000 W",
    answer: 1
  },
  {
    question: "A car with a mass of 1000 kg is moving at a speed of 20 m/s. What is its kinetic energy?",
    choice1: "2000 J",
    choice2: "4000 J",
    choice3: "8000 J",
    choice4: "10000 J",
    answer: 3
  },
  {
    question: "A person lifts a box weighing 50 kg to a height of 2 meters. How much work is done against gravity?",
    choice1: "100 J",
    choice2: "500 J",
    choice3: "1000 J",
    choice4: "5000 J",
    answer: 3
  },
  {
    question: "A machine does 100 J of work in 5 seconds. What is the power output of the machine?",
    choice1: "10 W",
    choice2: "20 W",
    choice3: "50 W",
    choice4: "100 W",
    answer: 2
  },
  {
    question: "Which of the following is an example of a simple machine?",
    choice1: "Screw",
    choice2: "Computer",
    choice3: "Television",
    choice4: "Cellphone",
    answer: 1
  },
  {
    question: "A pulley is used to lift a load of 200 N with an effort of 100 N. What is the mechanical advantage of the pulley?",
    choice1: "0.5",
    choice2: "1",
    choice3: "2",
    choice4: "3",
    answer: 2
  },
  {
    question: "In a lever, the distance from the fulcrum to the point of effort is 2 meters, and the distance from the fulcrum to the point of load is 6 meters. What is the mechanical advantage of the lever?",
    choice1: "1/3",
    choice2: "1/2",
    choice3: "2",
    choice4: "3",
    answer: 3
  },
  {
    question: "A machine requires an input force of 50 N to lift a load of 200 N. What is the mechanical advantage of the machine?",
    choice1: "0.25",
    choice2: "0.5",
    choice3: "1",
    choice4: "4",
    answer: 4
  },
  {
    question: "Which type of simple machine is a pair of scissors?",
    choice1: "Lever",
    choice2: "Wheel and axle",
    choice3: "Wedge",
    choice4: "Inclined plane",
    answer: 3
  },
  {
    question: "A ramp with a length of 6 meters is used to lift a load to a height of 2 meters. What is the mechanical advantage of the ramp?",
    choice1: "1/3",
    choice2: "1/2",
    choice3: "2",
    choice4: "3",
    answer: 2
  },
  {
    question: "A machine has an input force of 100 N and an output force of 200 N. What is the mechanical advantage of the machine?",
    choice1: "0.5",
    choice2: "1",
    choice3: "2",
    choice4: "3",
    answer: 3
  },
  {
    question: "Which type of simple machine is a screwdriver?",
    choice1: "Lever",
    choice2: "Wheel and axle",
    choice3: "Wedge",
    choice4: "Inclined plane",
    answer: 1
  },
  {
    question: "A machine has a mechanical advantage of 5. If the input force is 20 N, what is the output force?",
    choice1: "5 N",
    choice2: "20 N",
    choice3: "100 N",
    choice4: "400 N",
    answer: 3
  },
  {
    question: "Which type of simple machine is a bicycle?",
    choice1: "Lever",
    choice2: "Wheel and axle",
    choice3: "Wedge",
    choice4: "Inclined plane",
    answer: 2
  },
  {
    question: "What is the specific heat capacity of water?",
    choice1: "1 J/kg°C",
    choice2: "10 J/kg°C",
    choice3: "100 J/kg°C",
    choice4: "1000 J/kg°C",
    answer: 3
  },
  {
    question: "A substance requires 5000 J of heat to raise its temperature by 50°C. What is its heat capacity?",
    choice1: "100 J/°C",
    choice2: "250 J/°C",
    choice3: "500 J/°C",
    choice4: "1000 J/°C",
    answer: 3
  },
  {
    question: "Which of the following substances has the highest specific heat capacity?",
    choice1: "Water",
    choice2: "Aluminum",
    choice3: "Copper",
    choice4: "Iron",
    answer: 1
  },
  {
    question: "A 2 kg block of a substance absorbs 4000 J of heat and its temperature increases by 20°C. What is the specific heat capacity of the substance?",
    choice1: "50 J/kg°C",
    choice2: "100 J/kg°C",
    choice3: "200 J/kg°C",
    choice4: "400 J/kg°C",
    answer: 2
  },
  {
    question: "A 100 g sample of a substance requires 500 J of heat to raise its temperature by 10°C. What is the specific heat capacity of the substance?",
    choice1: "0.5 J/g°C",
    choice2: "1 J/g°C",
    choice3: "2 J/g°C",
    choice4: "5 J/g°C",
    answer: 4
  },
  {
    question: "The heat capacity of a 50 g sample of a substance is 100 J/°C. What is the specific heat capacity of the substance?",
    choice1: "0.2 J/g°C",
    choice2: "2 J/g°C",
    choice3: "4 J/g°C",
    choice4: "200 J/g°C",
    answer: 2
  },
  {
    question: "A 500 g piece of metal absorbs 2000 J of heat and its temperature increases by 40°C. What is the specific heat capacity of the metal?",
    choice1: "1 J/g°C",
    choice2: "2 J/g°C",
    choice3: "4 J/g°C",
    choice4: "8 J/g°C",
    answer: 3
  },
  {
    question: "The heat capacity of a 1 kg block of a substance is 500 J/°C. What is its specific heat capacity?",
    choice1: "50 J/kg°C",
    choice2: "100 J/kg°C",
    choice3: "200 J/kg°C",
    choice4: "500 J/kg°C",
    answer: 2
  },
  {
    question: "A 2 kg block of a substance absorbs 8000 J of heat and its temperature increases by 40°C. What is the specific heat capacity of the substance?",
    choice1: "100 J/kg°C",
    choice2: "200 J/kg°C",
    choice3: "300 J/kg°C",
    choice4: "400 J/kg°C",
    answer: 1
  },
  {
    question: "A 200 g sample of a substance requires 800 J of heat to raise its temperature by 20°C. What is the specific heat capacity of the substance?",
    choice1: "1 J/g°C",
    choice2: "2 J/g°C",
    choice3: "4 J/g°C",
    choice4: "8 J/g°C",
    answer: 3
  },
  {
    question: "What is the SI unit of length?",
    choice1: "Meter",
    choice2: "Kilogram",
    choice3: "Second",
    choice4: "Ampere",
    answer: 1
  },
  {
    question: "What is the SI unit of time?",
    choice1: "Meter",
    choice2: "Kilogram",
    choice3: "Second",
    choice4: "Ampere",
    answer: 3
  },
  {
    question: "What is the SI unit of mass?",
    choice1: "Meter",
    choice2: "Kilogram",
    choice3: "Second",
    choice4: "Ampere",
    answer: 2
  },
  {
    question: "What is the SI unit of electric current?",
    choice1: "Meter",
    choice2: "Kilogram",
    choice3: "Second",
    choice4: "Ampere",
    answer: 4
  },
  {
    question: "What is the SI unit of temperature?",
    choice1: "Kelvin",
    choice2: "Celsius",
    choice3: "Fahrenheit",
    choice4: "Rankine",
    answer: 1
  },
  {
    question: "What is the SI unit of luminous intensity?",
    choice1: "Candela",
    choice2: "Lumen",
    choice3: "Lux",
    choice4: "Watt",
    answer: 1
  },
  {
    question: "What is the SI unit of electric charge?",
    choice1: "Coulomb",
    choice2: "Ampere",
    choice3: "Volt",
    choice4: "Ohm",
    answer: 1
  },
  {
    question: "Which of the following is a derived unit?",
    choice1: "Meter",
    choice2: "Kilogram",
    choice3: "Second",
    choice4: "Newton",
    answer: 4
  },
  {
    question: "What is the SI unit of energy?",
    choice1: "Joule",
    choice2: "Watt",
    choice3: "Newton",
    choice4: "Pascal",
    answer: 1
  },
  {
    question: "What is the SI unit of power?",
    choice1: "Joule",
    choice2: "Watt",
    choice3: "Newton",
    choice4: "Pascal",
    answer: 2
  },
  {
    question: "What is the condition for a body to be in equilibrium?",
    choice1: "Net force is non-zero",
    choice2: "Net force is zero",
    choice3: "Acceleration is non-zero",
    choice4: "Acceleration is zero",
    answer: 2
  },
  {
    question: "When the net force acting on an object is zero, what can be said about its motion?",
    choice1: "It is at rest",
    choice2: "It is moving with constant velocity",
    choice3: "It is accelerating",
    choice4: "It is decelerating",
    answer: 2
  },
  {
    question: "A box is placed on a table. If the weight of the box is 100 N, what is the magnitude of the normal force exerted by the table?",
    choice1: "100 N",
    choice2: "200 N",
    choice3: "300 N",
    choice4: "400 N",
    answer: 1
  },
  {
    question: "A book is placed on a shelf. If the weight of the book is 20 N and the shelf exerts a normal force of 20 N on the book, what can be said about the vertical forces?",
    choice1: "They are balanced",
    choice2: "They are unbalanced",
    choice3: "They are zero",
    choice4: "They are opposite in direction",
    answer: 1
  },
  {
    question: "In a system where two forces are in equilibrium, how do the magnitudes of the forces compare?",
    choice1: "They are equal",
    choice2: "One is larger than the other",
    choice3: "One is smaller than the other",
    choice4: "They cannot be determined",
    answer: 1
  },
  {
    question: "A box is pushed with a force of 50 N to the right and a force of 30 N to the left. What is the net force on the box?",
    choice1: "20 N to the right",
    choice2: "20 N to the left",
    choice3: "50 N to the right",
    choice4: "30 N to the left",
    answer: 2
  },
  {
    question: "A person pulls a sled with a force of 100 N to the right. If the frictional force between the sled and the ground is 100 N to the left, what is the net force on the sled?",
    choice1: "0 N",
    choice2: "100 N to the right",
    choice3: "100 N to the left",
    choice4: "200 N to the left",
    answer: 1
  },
  {
    question: "A car is moving at a constant velocity on a flat road. What can be said about the net force acting on the car?",
    choice1: "It is zero",
    choice2: "It is non-zero",
    choice3: "It is directed opposite to the motion",
    choice4: "It is directed in the same direction as the motion",
    answer: 1
  },
  {
    question: "A person pushes a box with a force of 50 N to the right. If the box accelerates to the right, what can be said about the net force on the box?",
    choice1: "It is zero",
    choice2: "It is non-zero",
    choice3: "It is directed opposite to the motion",
    choice4: "It is directed in the same direction as the motion",
    answer: 2
  },
  {
    question: "When a body is in equilibrium, what can be said about the sum of the torques acting on it?",
    choice1: "The sum of the torques is zero",
    choice2: "The sum of the torques is non-zero",
    choice3: "The sum of the torques is equal to the net force",
    choice4: "The sum of the torques is equal to the net acceleration",
    answer: 1
  }
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
