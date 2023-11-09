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
        "question": "What is the process of converting organic compounds into simpler compounds by the action of heat called?",
        "choice1": "Combustion",
        "choice2": "Oxidation",
        "choice3": "Reduction",
        "choice4": "Pyrolysis",
        "answer": 4
    },
    {
        "question": "What is the process by which green plants convert light energy into chemical energy called?",
        "choice1": "Photosynthesis",
        "choice2": "Respiration",
        "choice3": "Fermentation",
        "choice4": "Osmosis",
        "answer": 1
    },
    {
        "question": "Which organelle is responsible for the production of ATP in eukaryotic cells?",
        "choice1": "Mitochondria",
        "choice2": "Nucleus",
        "choice3": "Endoplasmic reticulum",
        "choice4": "Golgi apparatus",
        "answer": 1
    },
    {
        "question": "What is the process by which cells break down glucose to produce ATP called?",
        "choice1": "Glycolysis",
        "choice2": "Photosynthesis",
        "choice3": "Transcription",
        "choice4": "Translation",
        "answer": 1
    },
    {
        "question": "Which molecule is considered the universal energy currency of cells?",
        "choice1": "ATP",
        "choice2": "DNA",
        "choice3": "RNA",
        "choice4": "Glucose",
        "answer": 1
    },
    {
        "question": "What is the term for the diffusion of water across a selectively permeable membrane?",
        "choice1": "Osmosis",
        "choice2": "Diffusion",
        "choice3": "Active transport",
        "choice4": "Facilitated diffusion",
        "answer": 1
    },
    {
        "question": "Which scientist is credited with the discovery of the structure of DNA?",
        "choice1": "James Watson",
        "choice2": "Francis Crick",
        "choice3": "Rosalind Franklin",
        "choice4": "Gregor Mendel",
        "answer": 2
    },
    {
        "question": "What is the process by which a cell divides into two daughter cells called?",
        "choice1": "Mitosis",
        "choice2": "Meiosis",
        "choice3": "Cytokinesis",
        "choice4": "Replication",
        "answer": 3
    },
    {
        "question": "Which type of inheritance pattern is characterized by the blending of traits from both parents?",
        "choice1": "Incomplete dominance",
        "choice2": "Codominance",
        "choice3": "Mendelian inheritance",
        "choice4": "Polygenic inheritance",
        "answer": 1
    },
    {
        "question": "What is the term for the structure that connects muscles to bones?",
        "choice1": "Tendon",
        "choice2": "Ligament",
        "choice3": "Cartilage",
        "choice4": "Joint",
        "answer": 1
    },
    {
        "question": "What is the process by which food is broken down in the digestive system?",
        "choice1": "Photosynthesis",
        "choice2": "Respiration",
        "choice3": "Digestion",
        "choice4": "Osmosis",
        "answer": 3
      },
      
      {
        "question": "Which organelle is known as the 'powerhouse' of the cell?",
        "choice1": "Mitochondria",
        "choice2": "Nucleus",
        "choice3": "Endoplasmic reticulum",
        "choice4": "Golgi apparatus",
        "answer": 1
      },
      
      {
        "question": "What is the green pigment responsible for capturing light energy in plants called?",
        "choice1": "Chlorophyll",
        "choice2": "Melanin",
        "choice3": "Hemoglobin",
        "choice4": "Carotene",
        "answer": 1
      },
      
      {
        "question": "Which gas is produced as a byproduct of photosynthesis?",
        "choice1": "Oxygen",
        "choice2": "Carbon dioxide",
        "choice3": "Nitrogen",
        "choice4": "Hydrogen",
        "answer": 1
      },
      
      {
        "question": "What is the process by which plants release water vapor through their leaves called?",
        "choice1": "Transpiration",
        "choice2": "Evaporation",
        "choice3": "Condensation",
        "choice4": "Precipitation",
        "answer": 1
      },
      
      {
        "question": "Which gas is essential for respiration in humans?",
        "choice1": "Oxygen",
        "choice2": "Carbon dioxide",
        "choice3": "Nitrogen",
        "choice4": "Hydrogen",
        "answer": 1
      },
      
      {
        "question": "What is the functional unit of the kidney responsible for filtering blood?",
        "choice1": "Nephron",
        "choice2": "Neuron",
        "choice3": "Nucleus",
        "choice4": "Alveolus",
        "answer": 1
      },
      
      {
        "question": "Which process is responsible for the exchange of gases in the lungs?",
        "choice1": "Diffusion",
        "choice2": "Active transport",
        "choice3": "Osmosis",
        "choice4": "Filtration",
        "answer": 1
      },
      
      {
        "question": "Which system is responsible for protecting the body against pathogens?",
        "choice1": "Immune system",
        "choice2": "Nervous system",
        "choice3": "Endocrine system",
        "choice4": "Muscular system",
        "answer": 1
      },
      
      {
        "question": "What is the process by which a cell divides into two identical daughter cells called?",
        "choice1": "Mitosis",
        "choice2": "Meiosis",
        "choice3": "Cytokinesis",
        "choice4": "Replication",
        "answer": 1
      },
      
      {
        "question": "Which scientist is known for his theory of evolution by natural selection?",
        "choice1": "Charles Darwin",
        "choice2": "Gregor Mendel",
        "choice3": "Louis Pasteur",
        "choice4": "Alexander Fleming",
        "answer": 1
      },
      {
        "question": "Which organ pumps oxygenated blood to the rest of the body?",
        "choice1": "Heart",
        "choice2": "Lungs",
        "choice3": "Liver",
        "choice4": "Kidneys",
        "answer": 1
      },
      
      {
        "question": "Which blood vessels carry oxygenated blood away from the heart?",
        "choice1": "Arteries",
        "choice2": "Veins",
        "choice3": "Capillaries",
        "choice4": "Aorta",
        "answer": 1
      },
      
      {
        "question": "What is the largest artery in the human body called?",
        "choice1": "Aorta",
        "choice2": "Vena cava",
        "choice3": "Pulmonary artery",
        "choice4": "Coronary artery",
        "answer": 1
      },
      
      {
        "question": "Which blood vessels allow for the exchange of nutrients and gases between the blood and tissues?",
        "choice1": "Capillaries",
        "choice2": "Arteries",
        "choice3": "Veins",
        "choice4": "Venules",
        "answer": 1
      },
      
      {
        "question": "Which chamber of the heart receives oxygenated blood from the lungs?",
        "choice1": "Left atrium",
        "choice2": "Right atrium",
        "choice3": "Left ventricle",
        "choice4": "Right ventricle",
        "answer": 1
      },
      
      {
        "question": "What is the name of the valve that separates the left atrium from the left ventricle?",
        "choice1": "Mitral valve",
        "choice2": "Tricuspid valve",
        "choice3": "Pulmonary valve",
        "choice4": "Aortic valve",
        "answer": 1
      },
      
      {
        "question": "Which blood vessels carry deoxygenated blood towards the heart?",
        "choice1": "Veins",
        "choice2": "Arteries",
        "choice3": "Capillaries",
        "choice4": "Venules",
        "answer": 1
      },
      
      {
        "question": "What is the process of blood flowing from the heart to the lungs and back called?",
        "choice1": "Pulmonary circulation",
        "choice2": "Systemic circulation",
        "choice3": "Coronary circulation",
        "choice4": "Renal circulation",
        "answer": 1
      },
      
      {
        "question": "Which blood vessel carries deoxygenated blood from the heart to the lungs?",
        "choice1": "Pulmonary artery",
        "choice2": "Aorta",
        "choice3": "Pulmonary vein",
        "choice4": "Vena cava",
        "answer": 1
      },
      
      {
        "question": "Which component of blood is responsible for carrying oxygen to the body tissues?",
        "choice1": "Red blood cells",
        "choice2": "White blood cells",
        "choice3": "Platelets",
        "choice4": "Plasma",
        "answer": 1
      },
      {
        "question": "Which blood vessel carries deoxygenated blood from the heart to the lungs?",
        "choice1": "Pulmonary artery",
        "choice2": "Aorta",
        "choice3": "Pulmonary vein",
        "choice4": "Vena cava",
        "answer": 1
        },
        
        {
        "question": "What is the scientific name for the human species?",
        "choice1": "Homo sapiens",
        "choice2": "Pan troglodytes",
        "choice3": "Canis lupus",
        "choice4": "Felis catus",
        "answer": 1
        },
        
        {
        "question": "What is the process by which green plants convert sunlight into chemical energy?",
        "choice1": "Photosynthesis",
        "choice2": "Cellular respiration",
        "choice3": "Fermentation",
        "choice4": "Mitosis",
        "answer": 1
        },
        
        {
        "question": "Which of the following is an example of an inherited trait?",
        "choice1": "Learning to ride a bike",
        "choice2": "Gaining muscle mass through exercise",
        "choice3": "Having blue eyes",
        "choice4": "Acquiring a suntan",
        "answer": 3
        },
        
        {
        "question": "What is the primary function of the skeletal system?",
        "choice1": "Protection of internal organs",
        "choice2": "Regulation of body temperature",
        "choice3": "Transportation of oxygen",
        "choice4": "Production of hormones",
        "answer": 1
        },
        
        {
        "question": "Which of the following is an example of a vestigial structure in humans?",
        "choice1": "Wisdom teeth",
        "choice2": "Lungs",
        "choice3": "Heart",
        "choice4": "Stomach",
        "answer": 1
        },
        
        {
        "question": "What is the term for the process of converting food into usable energy in cells?",
        "choice1": "Digestion",
        "choice2": "Circulation",
        "choice3": "Respiration",
        "choice4": "Excretion",
        "answer": 3
        },
        
        {
        "question": "What is the primary function of the nervous system?",
        "choice1": "Transportation of nutrients",
        "choice2": "Exchange of gases",
        "choice3": "Coordination of body functions",
        "choice4": "Protection against pathogens",
        "answer": 3
        },
        
        {
        "question": "Which of the following is an example of a producer in an ecosystem?",
        "choice1": "Rabbit",
        "choice2": "Lion",
        "choice3": "Oak tree",
        "choice4": "Snake",
        "answer": 3
        },
        
        {
        "question": "What is the role of decomposers in an ecosystem?",
        "choice1": "Produce oxygen through photosynthesis",
        "choice2": "Break down dead organic matter",
        "choice3": "Prey on other organisms",
        "choice4": "Regulate population sizes",
        "answer": 2
        },
        
        {
        "question": "Which of the following is an example of a biotic factor in an ecosystem?",
        "choice1": "Sunlight",
        "choice2": "Temperature",
        "choice3": "Soil pH",
        "choice4": "Grass",
        "answer": 4
        },
        
        {
        "question": "What is the term for the process of water moving from an area of high concentration to an area of low concentration across a semipermeable membrane?",
        "choice1": "Osmosis",
        "choice2": "Diffusion",
        "choice3": "Active transport",
        "choice4": "Endocytosis",
        "answer": 1
        },
        
        {
        "question": "What is the term for a group of individuals of the same species living in the same area?",
        "choice1": "Community",
        "choice2": "Ecosystem",
        "choice3": "Population",
        "choice4": "Biosphere",
        "answer": 3
        },
        
        {
        "question": "What is the function of the stomata in plants?",
        "choice1": "Absorption of water and minerals",
        "choice2": "Support and structure",
        "choice3": "Exchange of gases",
        "choice4": "Photosynthesis",
        "answer": 3
        },
        
        {
        "question": "Which of the following is an example of an abiotic factor in an ecosystem?",
        "choice1": "Grass",
        "choice2": "Rainfall",
        "choice3": "Deer",
        "choice4": "Worms",
        "answer": 2
        },
        
        {
        "question": "What is the function of the circulatory system in humans?",
        "choice1": "Regulation of body temperature",
        "choice2": "Exchange of gases",
        "choice3": "Transportation of nutrients and waste",
        "choice4": "Protection against pathogens",
        "answer": 3
        },
        
        {
        "question": "What is the term for a group of different populations living and interacting in the same area?",
        "choice1": "Ecosystem",
        "choice2": "Community",
        "choice3": "Habitat",
        "choice4": "Biosphere",
        "answer": 2
        },
        
        {
        "question": "Which of the following is an example of a cold-blooded animal?",
        "choice1": "Dog",
        "choice2": "Bird",
        "choice3": "Fish",
        "choice4": "Bear",
        "answer": 3
        },
        
        {
        "question": "What is the function of the excretory system in humans?",
        "choice1": "Exchange of gases",
        "choice2": "Digestion of food",
        "choice3": "Removal of waste products",
        "choice4": "Production of hormones",
        "answer": 3
        },
        
        {
        "question": "What is the role of decomposers in nutrient cycling?",
        "choice1": "Convert nitrogen gas into a usable form for plants",
        "choice2": "Fix carbon dioxide through photosynthesis",
        "choice3": "Break down organic matter and release nutrients",
        "choice4": "Filter and purify water",
        "answer": 3
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
