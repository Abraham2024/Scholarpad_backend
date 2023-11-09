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
  // Questions array here...
  {
    question: "A gas sample occupies 2.5 liters at a pressure of 1.2 atmospheres. What will be its volume if the pressure is increased to 2.4 atmospheres? (Assume constant temperature.)",
    choice1: "1.0 liters",
    choice2: "2.4 liters",
    choice3: "4.8 liters",
    choice4: "5.0 liters",
    answer: 3
    },
    
    {
    question: "A gas occupies a volume of 4.0 liters at a temperature of 25°C. What will be its volume at 50°C, assuming constant pressure?",
    choice1: "2.0 liters",
    choice2: "4.0 liters",
    choice3: "6.0 liters",
    choice4: "8.0 liters",
    answer: 4
    },
    
    {
    question: "A gas at 5.0 atmospheres of pressure and 25°C occupies a volume of 2.0 liters. What will be its volume at 1.0 atmosphere and 100°C?",
    choice1: "0.4 liters",
    choice2: "0.8 liters",
    choice3: "1.0 liters",
    choice4: "2.0 liters",
    answer: 4
    },
    
    {
    question: "A gas sample occupies a volume of 3.0 liters at a pressure of 2.0 atmospheres. If the volume is increased to 6.0 liters, what will be the new pressure? (Assume constant temperature.)",
    choice1: "0.5 atmospheres",
    choice2: "1.0 atmospheres",
    choice3: "2.0 atmospheres",
    choice4: "4.0 atmospheres",
    answer: 2
    },
    {
        question: "A gas sample occupies a volume of 8.0 liters at a temperature of 50°C. If the temperature is decreased to 25°C, what will be the new volume? (Assume constant pressure.)",
        choice1: "4.0 liters",
        choice2: "6.0 liters",
        choice3: "8.0 liters",
        choice4: "16.0 liters",
        answer: 1
        },
        {
        question: "A gas occupies a volume of 5.0 liters at a pressure of 3.0 atmospheres. If the pressure is increased to 6.0 atmospheres, what will be the new volume? (Assume constant temperature.)",
        choice1: "2.5 liters",
        choice2: "5.0 liters",
        choice3: "10.0 liters",
        choice4: "15.0 liters",
        answer: 2
        },
    {
    question: "A gas occupies a volume of 10.0 liters at a pressure of 3.0 atmospheres. If the volume is reduced to 5.0 liters, what will be the new pressure? (Assume constant temperature.)",
    choice1: "1.5 atmospheres",
    choice2: "3.0 atmospheres",
    choice3: "6.0 atmospheres",
    choice4: "15.0 atmospheres",
    answer: 3
    },
    {
    question: "A gas sample at 25°C and 1.0 atmosphere of pressure occupies a volume of 2.0 liters. If the pressure is increased to 2.5 atmospheres, what will be the new temperature? (Assume constant volume.)",
    choice1: "25°C",
    choice2: "50°C",
    choice3: "75°C",
    choice4: "100°C",
    answer: 2
    },
    {
    question: "A gas at 2.0 atmospheres of pressure and 25°C occupies a volume of 4.0 liters. If the pressure is decreased to 1.0 atmosphere, what will be the new volume? (Assume constant temperature.)",
    choice1: "2.0 liters",
    choice2: "4.0 liters",
    choice3: "6.0 liters",
    choice4: "8.0 liters",
    answer: 3
    },
        {
          question: "Which functional group is present in alcohols?",
          choice1: "Carboxyl",
          choice2: "Hydroxyl",
          choice3: "Amino",
          choice4: "Ester",
          answer: 2
        },
        {
          question: "What is the general formula for alkenes?",
          choice1: "CnH2n",
          choice2: "CnH2n+2",
          choice3: "CnHn+1",
          choice4: "CnH2n-2",
          answer: 1
        },
        {
          question: "What is the process of converting an alkene to an alkane called?",
          choice1: "Hydrogenation",
          choice2: "Oxidation",
          choice3: "Halogenation",
          choice4: "Dehydration",
          answer: 1
        },
        {
          question: "Which functional group is present in carboxylic acids?",
          choice1: "Hydroxyl",
          choice2: "Carbonyl",
          choice3: "Carboxyl",
          choice4: "Amino",
          answer: 3
        },
        {
          question: "What is the general formula for aldehydes?",
          choice1: "RCOOH",
          choice2: "ROR'",
          choice3: "RCOR'",
          choice4: "RCHO",
          answer: 4
        },
        {
          question: "What is the process of converting an aldehyde to an alcohol called?",
          choice1: "Oxidation",
          choice2: "Hydration",
          choice3: "Reduction",
          choice4: "Halogenation",
          answer: 3
        },
        {
          question: "Which functional group is present in amines?",
          choice1: "Carboxyl",
          choice2: "Hydroxyl",
          choice3: "Amino",
          choice4: "Ester",
          answer: 3
        },
        {
          question: "What is the general formula for esters?",
          choice1: "R-OH",
          choice2: "R-COOH",
          choice3: "R-O-R'",
          choice4: "R-CO-R'",
          answer: 4
        },
        {
          question: "What is the process of converting an alcohol to an alkene called?",
          choice1: "Dehydration",
          choice2: "Hydrolysis",
          choice3: "Reduction",
          choice4: "Halogenation",
          answer: 1
        },
        {
          question: "Which functional group is present in ketones?",
          choice1: "Hydroxyl",
          choice2: "Carbonyl",
          choice3: "Carboxyl",
          choice4: "Amino",
          answer: 2
        },
        {
          question: "What is the general formula for ethers?",
          choice1: "R-OH",
          choice2: "R-COOH",
          choice3: "R-O-R'",
          choice4: "R-CO-R'",
          answer: 3
        },
        {
          question: "What is the process of converting an alkene to an alcohol called?",
          choice1: "Oxidation",
          choice2: "Hydration",
          choice3: "Reduction",
          choice4: "Halogenation",
          answer: 2
        },
        {
          question: "Which functional group is present in amides?",
          choice1: "Carboxyl",
          choice2: "Hydroxyl",
          choice3: "Amino",
          choice4: "Ester",
          answer: 3
        },
        {
          question: "What is the general formula for amides?",
          choice1: "R-OH",
          choice2: "R-COOH",
          choice3: "R-O-R'",
          choice4: "R-CO-NH2",
          answer: 4
        },
        {
          question: "What is the process of converting an amine to an amide called?",
          choice1: "Condensation",
          choice2: "Hydrolysis",
          choice3: "Reduction",
          choice4: "Halogenation",
          answer: 1
        },
        {
          question: "Which functional group is present in nitriles?",
          choice1: "Hydroxyl",
          choice2: "Carbonyl",
          choice3: "Carboxyl",
          choice4: "Cyano",
          answer: 4
        },
        {
          question: "What is the general formula for nitriles?",
          choice1: "R-OH",
          choice2: "R-COOH",
          choice3: "R-O-R'",
          choice4: "R-CN",
          answer: 4
        },
        {
          question: "What is the process of converting a nitrile to an amide called?",
          choice1: "Condensation",
          choice2: "Hydrolysis",
          choice3: "Reduction",
          choice4: "Halogenation",
          answer: 2
        },
        {
          question: "Which functional group is present in alkenes?",
          choice1: "Carboxyl",
          choice2: "Hydroxyl",
          choice3: "Amino",
          choice4: "Ester",
          answer: 2
        },
        {
          question: "What is the general formula for alkenes?",
          choice1: "CnH2n",
          choice2: "CnH2n+2",
          choice3: "CnHn+1",
          choice4: "CnH2n-2",
          answer: 1
        },
        {
          question: "What is the process of converting an alkene to an alkane called?",
          choice1: "Hydrogenation",
          choice2: "Oxidation",
          choice3: "Halogenation",
          choice4: "Dehydration",
          answer: 1
        },
      
       {
question: "What is the atomic number of carbon?",
choice1: "4",
choice2: "6",
choice3: "8",
choice4: "12",
answer: 2
     },
    {
question: "What is the chemical symbol for gold?",
choice1: "Au",
choice2: "Ag",
choice3: "Cu",
choice4: "Fe",
answer: 1
},
{
    question: "What is the molar mass of water (H2O)?",
    choice1: "16 g/mol",
    choice2: "18 g/mol",
    choice3: "20 g/mol",
    choice4: "22 g/mol",
    answer: 2
  },
  {
    question: "How many moles are present in 25 grams of sodium chloride (NaCl)?",
    choice1: "0.5 mol",
    choice2: "1 mol",
    choice3: "1.5 mol",
    choice4: "2 mol",
    answer: 1
  },
  {
    question: "What is the volume of 0.5 moles of helium gas (He) at STP?",
    choice1: "11.2 L",
    choice2: "22.4 L",
    choice3: "33.6 L",
    choice4: "44.8 L",
    answer: 2
  },
  {
    question: "What is the concentration of a solution that contains 25 grams of solute dissolved in 500 mL of solvent?",
    choice1: "0.05 M",
    choice2: "0.5 M",
    choice3: "1 M",
    choice4: "2 M",
    answer: 4
  },
  {
    question: "How many grams of oxygen (O2) are required to react completely with 16 grams of methane (CH4) according to the equation: CH4 + 2O2 -> CO2 + 2H2O?",
    choice1: "16 g",
    choice2: "32 g",
    choice3: "48 g",
    choice4: "64 g",
    answer: 2
  },
  {
    question: "What is the pH of a solution with a hydrogen ion concentration of 1 x 10^-4 M?",
    choice1: "2",
    choice2: "4",
    choice3: "10",
    choice4: "14",
    answer: 2
  },
  {
    question: "How many grams of sulfuric acid (H2SO4) are needed to prepare 500 mL of a 1 M solution?",
    choice1: "49 g",
    choice2: "50 g",
    choice3: "98 g",
    choice4: "100 g",
    answer: 3
  },
  {
    question: "What is the percent composition of carbon (C) in methane (CH4)?",
    choice1: "16%",
    choice2: "25%",
    choice3: "50%",
    choice4: "75%",
    answer: 4
  },
  {
    question: "How many grams of magnesium (Mg) are needed to produce 0.5 moles of magnesium oxide (MgO) according to the equation: 2Mg + O2 -> 2MgO?",
    choice1: "12 g",
    choice2: "24 g",
    choice3: "36 g",
    choice4: "48 g",
    answer: 2
  },
  {
    question: "What is the empirical formula of a compound that contains 40% carbon (C), 6.7% hydrogen (H), and 53.3% oxygen (O)?",
    choice1: "C2H4O2",
    choice2: "CH2O",
    choice3: "C6H12O6",
    choice4: "C8H10O4",
    answer: 2
  },
  {
    question: "Which of the following is an example of an exothermic reaction?",
    choice1: "Burning wood",
    choice2: "Melting ice",
    choice3: "Evaporating water",
    choice4: "Mixing salt in water",
    answer: 1
  },
  {
    question: "What is the chemical formula for ammonia?",
    choice1: "NH3",
    choice2: "H2O",
    choice3: "CO2",
    choice4: "NaCl",
    answer: 1
  },
  {
    question: "Which element is the most abundant in the Earth's atmosphere?",
    choice1: "Oxygen",
    choice2: "Nitrogen",
    choice3: "Carbon",
    choice4: "Hydrogen",
    answer: 2
  },
  {
    question: "What is the process of converting a liquid to a gas called?",
    choice1: "Sublimation",
    choice2: "Condensation",
    choice3: "Evaporation",
    choice4: "Fusion",
    answer: 3
  },
  {
    question: "Which of the following is an example of a homogeneous mixture?",
    choice1: "Saltwater",
    choice2: "Sand and water",
    choice3: "Oil and vinegar",
    choice4: "Iron and sulfur",
    answer: 1
  },
  {
    question: "What is the pH of a solution with a hydrogen ion concentration of 1 x 10^-3 M?",
    choice1: "3",
    choice2: "5",
    choice3: "7",
    choice4: "9",
    answer: 3
  },
  {
    question: "What is the molar mass of carbon dioxide (CO2)?",
    choice1: "28 g/mol",
    choice2: "32 g/mol",
    choice3: "44 g/mol",
    choice4: "48 g/mol",
    answer: 2
  },
  {
    question: "Which gas is produced during photosynthesis?",
    choice1: "Oxygen",
    choice2: "Carbon dioxide",
    choice3: "Nitrogen",
    choice4: "Hydrogen",
    answer: 1
  },
    // Separation Techniques
    {
      question: "Which separation technique is used to separate a mixture of solid particles based on their different densities?",
      choice1: "Filtration",
      choice2: "Evaporation",
      choice3: "Centrifugation",
      choice4: "Chromatography",
      answer: 3
    },
    {
      question: "Which separation technique is commonly used to separate a mixture of sand and salt?",
      choice1: "Filtration",
      choice2: "Decantation",
      choice3: "Evaporation",
      choice4: "Distillation",
      answer: 1
    },
    {
      question: "Which separation technique can be used to separate a mixture of ink colors?",
      choice1: "Filtration",
      choice2: "Decantation",
      choice3: "Evaporation",
      choice4: "Chromatography",
      answer: 4
    },
    {
      question: "Which separation technique is used to separate a mixture of liquids with different boiling points?",
      choice1: "Filtration",
      choice2: "Decantation",
      choice3: "Evaporation",
      choice4: "Distillation",
      answer: 4
    },
    {
      question: "Which separation technique is commonly used to separate the components of a solution?",
      choice1: "Filtration",
      choice2: "Decantation",
      choice3: "Evaporation",
      choice4: "Distillation",
      answer: 4
    },
  
    // Atomic Structure
    {
      question: "Which subatomic particle has a positive charge?",
      choice1: "Proton",
      choice2: "Neutron",
      choice3: "Electron",
      choice4: "Photon",
      answer: 1
    },
    {
      question: "What is the total number of electrons that can occupy the second energy level of an atom?",
      choice1: "2",
      choice2: "8",
      choice3: "18",
      choice4: "32",
      answer: 2
    },
    {
      question: "Which subatomic particle is located outside the nucleus of an atom?",
      choice1: "Proton",
      choice2: "Neutron",
      choice3: "Electron",
      choice4: "Photon",
      answer: 3
    },
    {
      question: "Which term refers to the number of protons in the nucleus of an atom?",
      choice1: "Atomic mass",
      choice2: "Atomic weight",
      choice3: "Atomic number",
      choice4: "Atomic radius",
      answer: 3
    },
    {
      question: "What is the charge of an atom when it gains or loses electrons?",
      choice1: "Positive",
      choice2: "Negative",
      choice3: "Neutral",
      choice4: "Variable",
      answer: 4
    },
  
    // Non-Metals
    {
      question: "Which element is a non-metal?",
      choice1: "Sodium",
      choice2: "Iron",
      choice3: "Oxygen",
      choice4: "Copper",
      answer: 3
    },
    {
      question: "Which non-metal is a gas at room temperature?",
      choice1: "Sulfur",
      choice2: "Bromine",
      choice3: "Chlorine",
      choice4: "Nitrogen",
      answer: 4
    },
    {
      question: "Which non-metal is essential for the respiration of living organisms?",
      choice1: "Oxygen",
      choice2: "Hydrogen",
      choice3: "Carbon",
      choice4: "Nitrogen",
      answer: 1
    },
    {
      question: "Which non-metal is used in the production of fertilizers?",
      choice1: "Sulfur",
      choice2: "Bromine",
      choice3: "Chlorine",
      choice4: "Phosphorus",
      answer: 4
    },
    {
      question: "Which non-metal is a major component of proteins?",
      choice1: "Oxygen",
      choice2: "Hydrogen",
      choice3: "Carbon",
      choice4: "Nitrogen",
      answer: 4
    },
  
    // Acid-Base and Salt
    {
      question: "Which substance is commonly used as an acid in batteries?",
      choice1: "Citric acid",
      choice2: "Sulfuric acid",
      choice3: "Hydrochloric acid",
      choice4: "Acetic acid",
      answer: 2
    },
    {
      question: "What is the pH value of a strong acid?",
      choice1: "1",
      choice2: "5",
      choice3: "7",
      choice4: "9",
      answer: 1
    },
    {
      question: "Which of the following is a base?",
      choice1: "Vinegar",
      choice2: "Lemon juice",
      choice3: "Baking soda",
      choice4: "Orange juice",
      answer: 3
    },
    {
      question: "What is the common name for sodium chloride?",
      choice1: "Baking soda",
      choice2: "Table salt",
      choice3: "Epsom salt",
      choice4: "Rock salt",
      answer: 2
    },
    {
      question: "What happens when an acid reacts with a base?",
      choice1: "Neutralization",
      choice2: "Oxidation",
      choice3: "Reduction",
      choice4: "Combustion",
      answer: 1
    },
  
    // Chemical Industry
    {
      question: "Which chemical process involves breaking down complex organic compounds by the action of heat in the absence of oxygen?",
      choice1: "Oxidation",
      choice2: "Reduction",
      choice3: "Combustion",
      choice4: "Pyrolysis",
      answer: 4
    },
    {
      question: "What is the primary raw material used in the production of ammonia?",
      choice1: "Oxygen",
      choice2: "Nitrogen",
      choice3: "Carbon",
      choice4: "Hydrogen",
      answer: 2
    },
    {
      question: "Which chemical process is used to convert crude oil into various fractions such as gasoline, diesel, and lubricants?",
      choice1: "Fermentation",
      choice2: "Polymerization",
      choice3: "Cracking",
      choice4: "Distillation",
      answer: 3
    },
    {
      question: "Which chemical process is used to convert sugar into alcohol?",
      choice1: "Fermentation",
      choice2: "Polymerization",
      choice3: "Cracking",
      choice4: "Distillation",
      answer: 1
    },
    {
      question: "Which chemical compound is commonly used as a preservative in food and beverages?",
      choice1: "Sulfur dioxide",
      choice2: "Carbon dioxide",
      choice3: "Nitrogen",
      choice4: "Oxygen",
      answer: 1
    },
  
    // Water
    {
      question: "What is the chemical formula for water?",
      choice1: "H2O",
      choice2: "CO2",
      choice3: "CH4",
      choice4: "NaCl",
      answer: 1
    },
    {
      question: "Which property of water allows it to form droplets on a surface?",
      choice1: "Adhesion",
      choice2: "Cohesion",
      choice3: "Evaporation",
      choice4: "Condensation",
      answer: 2
    },
    {
      question: "What is the boiling point of water at standard atmospheric pressure?",
      choice1: "0°C",
      choice2: "25°C",
      choice3: "100°C",
      choice4: "150°C",
      answer: 3
    },
    {
      question: "Which property of water allows it to dissolve many substances?",
      choice1: "Density",
      choice2: "Viscosity",
      choice3: "Surface tension",
      choice4: "Solvent power",
      answer: 4
    },
    {
      question: "What is the process of converting water vapor into liquid water called?",
      choice1: "Evaporation",
      choice2: "Condensation",
      choice3: "Sublimation",
      choice4: "Freezing",
      answer: 2
    },
  
    // Nitrogen and its Compounds
    {
      question: "What is the chemical formula for nitrogen gas?",
      choice1: "N2",
      choice2: "NO2",
      choice3: "NH3",
      choice4: "H2O",
      answer: 1
    },
    {
      question: "Which compound is commonly used as a fertilizer due to its high nitrogen content?",
      choice1: "Nitric acid",
      choice2: "Ammonium nitrate",
      choice3: "Nitrous oxide",
      choice4: "Nitrogen dioxide",
      answer: 2
    },
    {
      question: "What is the primary source of nitrogen for plants?",
      choice1: "Air",
      choice2: "Water",
      choice3: "Soil",
      choice4: "Sunlight",
      answer: 1
    },
    {
      question: "What is the chemical formula for ammonia?",
      choice1: "N2",
      choice2: "NO2",
      choice3: "NH3",
      choice4: "H2O",
      answer: 3
    },
    {
      question: "Which compound is commonly used as an anesthetic?",
      choice1: "Nitric acid",
      choice2: "Ammonium nitrate",
      choice3: "Nitrous oxide",
      choice4: "Nitrogen dioxide",
      answer: 3
    },
  
    // Hydrogen and its Compounds
    {
      question: "What is the chemical formula for hydrogen gas?",
      choice1: "H2",
      choice2: "H2O",
      choice3: "CO2",
      choice4: "NaCl",
      answer: 1
    },
    {
      question: "Which compound is commonly used as a fuel for rockets?",
      choice1: "Hydrochloric acid",
      choice2: "Hydrogen peroxide",
      choice3: "Hydrogen sulfide",
      choice4: "Liquid hydrogen",
      answer: 4
    },
    {
      question: "What is the lightest element in the periodic table?",
      choice1: "Hydrogen",
      choice2: "Helium",
      choice3: "Lithium",
      choice4: "Boron",
      answer: 1
    },
    {
      question: "Which compound is commonly used as a reducing agent?",
      choice1: "Hydrochloric acid",
      choice2: "Hydrogen peroxide",
      choice3: "Hydrogen sulfide",
      choice4: "Liquid hydrogen",
      answer: 4
    },
    {
      question: "What is the process of combining hydrogen with oxygen to produce water called?",
      choice1: "Combustion",
      choice2: "Oxidation",
      choice3: "Reduction",
      choice4: "Hydrogenation",
      answer: 1
    },
  
    // Carbon and its Compounds
    {
      question: "How many valence electrons does carbon have?",
      choice1: "2",
      choice2: "4",
      choice3: "6",
      choice4: "8",
      answer: 2
    },
    {
      question: "Which compound is commonly used as a fuel in cars?",
      choice1: "Carbon dioxide",
      choice2: "Carbon monoxide",
      choice3: "Ethanol",
      choice4: "Methane",
      answer: 4
    },
    {
      question: "What is the chemical formula for methane?",
      choice1: "CH2",
      choice2: "CO2",
      choice3: "C2H4",
      choice4: "CH4",
      answer: 4
    },
    {
      question: "Which compound is commonly used as a refrigerant?",
      choice1: "Carbon dioxide",
      choice2: "Carbon monoxide",
      choice3: "Ethanol",
      choice4: "Chlorofluorocarbons (CFCs)",
      answer: 4
    },
    {
      question: "What is the process of converting organic compounds into simpler compounds by the action of heat called?",
      choice1: "Combustion",
      choice2: "Oxidation",
      choice3: "Reduction",
      choice4: "Pyrolysis",
      answer: 4
    },     
];

// CONSTANTS
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
