const ques = [ 
  {
    subject: "Commerce",
    que: "What is the primary function of commercial banks?",
    option: ["Issuing currency", "Providing loans and credit", "Collecting taxes", "Running the stock market"],
    crt: 1,
  },
  {
    subject: "Commerce",
    que: "In business, what does ROI stand for?",
    option: ["Return on Investment", "Revenue of Income", "Rate of Interest", "Return on Invoicing"],
    crt: 0,
  },
  {
    subject: "Commerce",
    que: "Which term describes the physical movement of goods and materials from one place to another in a supply chain?",
    option: ["Warehousing", "Distribution", "Inventory control", "Procurement"],
    crt: 1,
  },
  {
    subject: "Commerce",
    que: "What is the economic system where the means of production are privately owned and operated for profit?",
    option: ["Capitalism", "Socialism", "Communism", "Mixed economy"],
    crt: 0,
  },
  {
    subject: "Commerce",
    que: "What is the term for a situation where a company is unable to meet its debt obligations?",
    option: ["Profitability", "Liquidity", "Solvency", "Bankruptcy"],
    crt: 3,
  },
  {
    subject: "Commerce",
    que: "In accounting, what is the financial statement that provides a snapshot of a company's financial condition at a specific point in time?",
    option: ["Income statement", "Cash flow statement", "Balance sheet", "Trial balance"],
    crt: 2,
  },
  {
    subject: "Commerce",
    que: "Which term refers to the buying and selling of goods and services using the internet?",
    option: ["E-commerce", "Retailing", "Wholesaling", "Import-export"],
    crt: 0,
  },
  {
    subject: "Commerce",
    que: "What does the abbreviation 'Incoterms' refer to in international trade?",
    option: ["International trade regulations", "International trade standards", "International trade organizations", "International trade payments"],
    crt: 1,
  },
  {
    subject: "Commerce",
    que: "In marketing, what is the process of creating, communicating, and delivering value to customers and managing customer relationships?",
    option: ["Production", "Promotion", "Profit maximization", "Marketing"],
    crt: 3,
  },
  {
    subject: "Commerce",
    que: "What is the term for a legal entity that is separate from its owners and provides limited liability for its owners' debts?",
    option: ["Sole proprietorship", "Partnership", "Corporation", "Cooperative"],
    crt: 2,
  },
  {
    subject: "Commerce",
    que: "Which financial document provides a summary of a company's revenues, costs, and expenses over a specific period?",
    option: ["Balance sheet", "Income statement", "Cash flow statement", "Audit report"],
    crt: 1,
  },
  {
    subject: "Commerce",
    que: "What is the study of how people make decisions about how to allocate resources to satisfy their wants and needs?",
    option: ["Marketing", "Management", "Economics", "Entrepreneurship"],
    crt: 2,
  },
  {
    subject: "Commerce",
    que: "In retail, what is the term for the price at which a product is initially offered for sale before discounts or promotions?",
    option: ["Wholesale price", "List price", "Retail price", "Market price"],
    crt: 1,
  },
  {
    subject: "Commerce",
    que: "What is the term for a document issued by a seller to a buyer that indicates the products, quantities, and agreed prices for products or services?",
    option: ["Invoice", "Receipt", "Statement of account", "Bill of lading"],
    crt: 0,
  },
  {
    subject: "Commerce",
    que: "Which term describes the study of how resources are allocated to produce goods and services and how those goods and services are distributed for consumption?",
    option: ["Marketing", "Management", "Economics", "Finance"],
    crt: 2,
  },
  {
    subject: "Commerce",
    que: "What is the term for a business owned and operated by one person?",
    option: ["Corporation", "Partnership", "Sole proprietorship", "Cooperative"],
    crt: 2,
  },
  {
    subject: "Commerce",
    que: "What is the branch of economics that focuses on the behavior of individual consumers and firms in making decisions about the allocation of limited resources?",
    option: ["Microeconomics", "Macroeconomics", "International economics", "Development economics"],
    crt: 0,
  },
  {
    subject: "Commerce",
    que: "What is the financial statement that provides a summary of a company's cash inflows and outflows?",
    option: ["Income statement", "Balance sheet", "Cash flow statement", "Trial balance"],
    crt: 2,
  },
  {
    subject: "Government",
    que: "What is the political system in which power is vested in the hands of a single ruler with absolute authority?",
    option: ["Monarchy", "Oligarchy", "Democracy", "Autocracy"],
    crt: 3,
  },
  {
    subject: "Government",
    que: "Who is the head of state in a parliamentary system of government?",
    option: ["Prime Minister", "President", "Monarch", "Speaker of the House"],
    crt: 2,
  },
  {
    subject: "Government",
    que: "Which form of government is characterized by rule by the people through elected representatives?",
    option: ["Autocracy", "Oligarchy", "Theocracy", "Democracy"],
    crt: 3,
  },
  {
    subject: "Government",
    que: "What is the term for a system of government in which a country is ruled by religious leaders?",
    option: ["Democracy", "Monarchy", "Theocracy", "Oligarchy"],
    crt: 2,
  },
  {
    subject: "Government",
    que: "In a presidential system, who is the head of state and government?",
    option: ["Prime Minister", "President", "Chancellor", "Monarch"],
    crt: 1,
  },
  {
    subject: "Government",
    que: "What is the principle of a government being divided into branches, such as the executive, legislative, and judicial branches?",
    option: ["Separation of Powers", "Checks and Balances", "Federalism", "Centralization"],
    crt: 0,
  },
  {
    subject: "Government",
    que: "In a parliamentary system, the executive branch is accountable to which body?",
    option: ["Monarch", "Supreme Court", "Military", "Legislature"],
    crt: 3,
  },
  {
    subject: "Government",
    que: "Which document outlines the fundamental laws and principles of a government?",
    option: ["Constitution", "Manifesto", "Treaty", "Bill of Rights"],
    crt: 0,
  },
  {
    subject: "Government",
    que: "In a federal system, power is divided between which levels of government?",
    option: ["Central and Local", "Executive and Legislative", "Monarchy and Oligarchy", "Supreme Court and Congress"],
    crt: 0,
  },
  {
    subject: "Government",
    que: "What is the term for a government in which a single political party controls the government and suppresses opposition?",
    option: ["Democracy", "Monarchy", "Oligarchy", "One-party state"],
    crt: 3,
  },
  {
    subject: "Government",
    que: "Which term describes the process of a government being removed from power through nonviolent means, often as a result of public protest?",
    option: ["Revolution", "Coup d'état", "Referendum", "Regime change"],
    crt: 0,
  },
  {
    subject: "Government",
    que: "What is the primary role of a head of government in a parliamentary system?",
    option: ["Ceremonial duties", "Representing the state internationally", "Leading the executive branch", "Appointing judges"],
    crt: 2,
  },
  {
    subject: "Government",
    que: "In a federal system, what is the relationship between the central and local governments?",
    option: ["Complete independence", "Subordination", "Shared powers", "No local government"],
    crt: 2,
  },
  {
    subject: "Government",
    que: "Which term describes a form of government in which a king or queen holds the title but their powers are limited by a constitution?",
    option: ["Absolute Monarchy", "Oligarchy", "Constitutional Monarchy", "Autocracy"],
    crt: 2,
  },
  {
    subject: "Government",
    que: "In a democracy, how are leaders typically chosen?",
    option: ["Hereditary succession", "By religious leaders", "By the military", "Through free and fair elections"],
    crt: 3,
  },
  {
    subject: "Government",
    que: "What is the term for a government in which power is held by a small group of individuals?",
    option: ["Democracy", "Autocracy", "Oligarchy", "Theocracy"],
    crt: 2,
  },
  {
    subject: "Government",
    que: "Which type of government allows for the most individual freedoms and limited government intervention?",
    option: ["Authoritarian", "Totalitarian", "Libertarian", "Socialist"],
    crt: 2,
  },
  {
    subject: "Government",
    que: "In a direct democracy, how are important decisions made?",
    option: ["By the president", "By elected representatives", "By a monarch", "By the citizens themselves through voting"],
    crt: 3,
  },
  {
    subject: "Government",
    que: "What is the primary role of the judicial branch of government?",
    option: ["Creating laws", "Enforcing laws", "Interpreting and applying laws", "Approving the budget"],
    crt: 2,
  },
  {
    subject: "Chemistry",
    que: "The following are properties of transition metals except",
    option: ['Variable oxidation states', "tendency to form complex ions", 'Ability to act as a catalyst', 'low melting point'],
    crt: 3,
  },
  {
    subject: "Chemistry",
    que: "Which of the following group 1 elements has the least ionization energy ",
    option: ["Cs⁵⁵", "Rb³⁷", "K¹⁹", "Li³"],
    crt: 0,
  },
  {
    subject: "Chemistry",
    que: "The following oxides react with water except ",
    option: ["Na2O", "SO2", "NO2", "CuO"],
    crt: 3,
  },
  {
    subject: "Chemistry",
    que: "Which of the following atoms contains the highest number of electrons in the outermost shell",
    option: ['O', "Ne", "P", "K"],
    crt: 1,
  },
  {
    subject: "Chemistry",
    que: "Which of the following periodic property increases down the group",
    option: ["Electronegativity", "Ionization energy", "Atomic radius", "Electron affinity"],
    crt: 1,
  },
  {
    subject: "Chemistry",
    que: 'Which of the following physical properties decreases across the Periodic Table?',
    option: ['Ionization energy', "Electron affinity", "Electronegativity", 'Atomic radius'],
    crt: 3,
  },
  {
    subject: "Chemistry",
    que: "The energy changes accompanying the addition of an electron to a gaseous atom is called?",
    option: ['First ionization energy', "Second ionization energy", "Electron affinity", 'Electronegativity'],
    crt: 2,
  },
  {
    subject: "Chemistry",
    que: "The atomic radius of Li, Na, and K are 1: 33Å, 1.54Å, and 1.96Å, respectively. Which of the following explains this gradation in atomic radius?",
    option: ["Electropositivity decreases from Li to Na to K", "Electronegativity decreases from Li to Na to K", "The number of the electron shells increases from Li to Na to K", "The elements are in the same period"],
    crt: 2,
  },
  {
    subject: "Chemistry",
    que: "Which of the following is arranged in order of increasing electronegativity?",
    option: ["Chlorine, aluminum, magnesium, phosphorus, sodium", "Sodium, magnesium, aluminum, phosphorus, chlorine", 'Chlorine, phosphorus, phosphorous, aluminum, magnesium, sodium', "Sodium, chlorine, phosphorus, magnesium, aluminum"],
    crt: 1,
  },
  {
    subject: "Chemistry",
    que: "Which of the following is the correct order of decreasing activity of the metals Fe, Ca, Al, and Na?",
    option: ["Fe> Ca> Al> Na", "Na> Ca> Al> Fe", "Al> Fe> Na> Ca", 'Ca> Na> Fe>, Al'],
    crt: 1,
  },
  {
    subject: "Chemistry",
    que: "Group 1A metals are not found free in nature because they?",
    option: ['Are of low melting and boiling points', "Have weak metallic bonding", 'Conduct electricity and heat', 'Are very reactive'],
    crt: 3,
  },
  {
    subject: "Chemistry",
    que: "Which of the following electron configurations indicates an atom with the highest ionization energy?",
    option: ["2, 8, 7", "2, 8, 8, 1", "2, 8, 8 ,2", "2, 8, 8, 7"],
    crt: 0,
  },
  {
    subject: "Chemistry",
    que: "Given that electronegativity increases across a period and decreases down a group in the periodic table, in which of the following compounds will the molecules be held together by the strongest hydrogen bond?",
    option: ["HF", "NH3", "CH4", "HCl"],
    crt: 0,
  },
  {
    subject: "Chemistry",
    que: "Which of the following statements is correct about the periodic table?",
    option: ['Elements in the same period have the same number of valency electrons', "The valence electron of the elements in the same period increases progressively across the period", "Elements in the same group have the same number of electron shells", "The non-metallic properties of the elements tend to decrease across each period"],
    crt: 1,
  },
  {
    subject: "Chemistry",
    que: "Metals of the first transition series have special properties that are different from those of groups I and II elements because they have partially filled",
    option: ["Electrons in the d orbitals", "Electron in the s orbitals", "A variable number of electrons in the p orbitals", "Partially filled p orbitals"],
    crt: 0,
  },
  {
    subject: "Chemistry",
    que: 'The elements that belong to the third period of the periodic table are',
    option: ['Li, Be, Al, and P', "Na, P, O, and Cl", "B, C, N, and O", 'Na, Mg, S, and Ar'],
    crt: 3,
  },
  {
    subject: "Chemistry",
    que: "In the periodic table, the electrical and thermal conductivities are properties of elements that",
    option: ['Decrease across the period and increase down the group', 'Increase across the period and decrease down the group', "Decrease across the period and down the group", 'Increase across the period and down the group'],
    crt: 0,
  },
  {
    subject: "Chemistry",
    que: "Moving from left to right across a period, the general rise in the first ionization energy can be attributed to the",
    option: ["Decrease in nuclear charge", "Increase in nuclear charge", "Decrease in screening effect", "Increase in screening effect"],
    crt: 1,
  },
  {
    subject: "Chemistry",
    que: "How many unpaired electron(s) are there in the nitrogen sub-levels",
    option: ["3", "2", "1", "None"],
    crt: 0,
  },
  {
    subject: "Chemistry",
    que: "Elements in the same period in the periodic table have the same",
    option: ["Number of shells", "Atomic number", "Chemical properties", 'Physical properties'],
    crt: 0,
  },
  {
    subject: "English",
    que: "Choose the most appropriate option nearest in meaning to the word(s) underlined. Barely six months after his father's demise, he has nothing left again of his <u>patrimony</u>",
    option: ["inheritance", "property", "reputation", "valuables"],
    crt: 0,
  },
  {
    subject: "English",
    que: "The meeting was organized at _______ instance?",
    option: ["whom", "whose's", "whose", "whom's"],
    crt: 2,
  },
  {
    subject: "English",
    que: "The two friends made promises to _____ when they met last year",
    option: ["each other", "one another", "theirselves", "themselves"],
    crt: 0,
  },
  {
    subject: "English",
    que: "Choose the most appropriate option nearest in meaning to the word(s) underlined. The office assistant was dismissed for <u>pilfering</u>",
    option: ["fighting", "incompetence", "stealing", "mismanagement"],
    crt: 2,
  },
  {
    subject: "English",
    que: "Choose the most appropriate option nearest in meaning to the word(s) underlined. The coach praised the team for their <u>resilience</u> and determination.",
    option: ["weakness", "effort", "indecision", "strength"],
    crt: 3,
  },
  {
    subject: "English",
    que: "Choose the most appropriate option nearest in meaning to the word(s) underlined. She displayed remarkable <u>dexterity </u>in playing the piano.",
    option: ["skill", "enthusiasm", "confidence", "intelligence"],
    crt: 0,
  },
  {
    subject: "English",
    que: "What is the term for a figure of speech that uses exaggeration for emphasis or effect?",
    option: ["Hyperbole", "Irony", "Metaphor", "Oxymoron"],
    crt: 0,
  },
  {
    subject: "English",
    que: "Which word describes the repetition of initial sounds in neighboring words?",
    option: ["Onomatopoeia", "Personification", "Alliteration", "Metonymy"],
    crt: 2,
  },
  {
    subject: "English",
    que: "Choose the most appropriate option nearest in meaning to the word(s) underlined. The emphasis placed on good moral conduct by the society in the past seems to have been <u>relaxed</u>",
    option: ["avoided", "improved", "weakened", "outdated"],
    crt: 2,
  },
  {
    subject: "English",
    que: "Choose the most appropriate option nearest in meaning to the word(s) underlined. He maintained that Nigerians need a leader with an <u>iron fist</u>",
    option: ["fist made of iron", "severe in treatment", "difficult to please", "strong as iron"],
    crt: 1,
  },
  {
    subject: "English",
    que: "Mr. Jude made the meeting _____ his poor health",
    option: ["even though", "inspite of", "in spite of", "despite that"],
    crt: 2,
  },
  {
    subject: "English",
    que: "The manager met the ______ who came visiting last week",
    option: ["dark tall good-looking American", "good-looking tall dark American", "Tall dark American good-looking", "American dark tall good-looking"],
    crt: 1,
  },


  {
    subject: "Chemistry",
    que: "The periodic table is an arrangement of elements according to their",
    option: ["oxidation number", "Atomic number", "mass number", "number of neutrons"],
    crt: 1,
  },
  {
    subject: "Chemistry",
    que: "The group to which elements belong in the periodic table is determined by the number of",
    option: ["electrons", "Core electrons", "valence shells", 'valence electrons'],
    crt: 3,
  },
  {
    subject: "Chemistry",
    que: "Which of the following elements has the highest ionization energy",
    option: ['Calcium', "Chlorine", 'Fluorine', 'Magnesium'],
    crt: 2,
  },
  {
    subject: "Chemistry",
    que: "Which of the following metals reacts slowly with cold water?",
    option: ["Iron", "Silver", "Calcium", "Potassium"],
    crt: 2,
  },
  {
    subject: "Chemistry",
    que: "Calcium and Magnesium belong to the same group of the periodic table because both",
    option: ["are metals", "form cations", "form colorless salts", "have the same number of valence electrons"],
    crt: 3,
  },
  {
    subject: "Chemistry",
    que: "The maximum number of electrons that can be accommodated in the shell having the principal quantum number 3 is ",
    option: ['5', "9", "10", "18"],
    crt: 3,
  },
  {
    subject: "Chemistry",
    que: "The following salts are readily soluble in water except",
    option: ["Na2Co3", "KCl", "CuCO3", "FeSO4"],
    crt: 2,
  },
  {
    subject: "Chemistry",
    que: 'Which of the following observations is not correct about the reaction of sodium metal with cold water',
    option: ['The reaction is spontaneous', "The reaction is endothermic", "Hydrogen is liberated", 'The resultant solution is alkaline'],
    crt: 1,
  },
  {
    subject: "Chemistry",
    que: "Some precious stones such as ruby and Sapphire consist of aluminum oxide colored by traces of the oxides of",
    option: ['group IV elements', "group I elements", "transition metals", 'alkali earths'],
    crt: 2,
  },
  {
    subject: "Chemistry",
    que: "Which of the following cannot be deduced from the electronic configuration of a transition metal?",
    option: ["Possession of magnetic property", "Ability to form complex ions", "Variable oxidation states", "Physical properties of the metals"],
    crt: 0,
  },
  {
    subject: "Chemistry",
    que: "Metals which react with steam only when they are red hot include",
    option: ["Copper", "Sodium", "Calcium", "Iron"],
    crt: 3,
  },
  {
    subject: "Chemistry",
    que: "The alkali metals exhibit similar chemical properties because",
    option: ["They occur in combined state", "They have the same number of valence electrons", "Their salts are soluble in water", 'They are highly reactive'],
    crt: 1,
  },

  // CRS
  {
    subject: "Christian Religious Studies",
    que: "Who is considered the father of faith in Christianity?",
    option: ["Abraham", "Moses", "David", "Jacob"],
    crt: 0
  },
  {
    subject: "Christian Religious Studies",
    que: "What is the first book of the New Testament?",
    option: ["Genesis", "Exodus", "Matthew", "Psalms"],
    crt: 2
  },
  {
    subject: "Christian Religious Studies",
    que: "What is the term for the Christian rite of initiation through water and the Holy Spirit?",
    option: ["Communion", "Baptism", "Confirmation", "Anointing"],
    crt: 1
  },
  {
    subject: "Christian Religious Studies",
    que: "Who is known as the 'Prince of the Apostles' in Christianity?",
    option: ["Paul", "John", "Peter", "James"],
    crt: 2
  },
  {
    subject: "Christian Religious Studies",
    que: "What event is commemorated during the Christian holiday of Easter?",
    option: ["The Last Supper", "The Nativity of Jesus", "The Resurrection of Jesus", "Pentecost"],
    crt: 2
  },
  {
    subject: "Christian Religious Studies",
    que: "Which of the Gospels in the New Testament is not considered one of the Synoptic Gospels?",
    option: ["Matthew", "Mark", "Luke", "John"],
    crt: 3
  },
  {
    subject: "Christian Religious Studies",
    que: "Who is known for the parable of the Prodigal Son?",
    option: ["Jesus", "Paul", "David", "Solomon"],
    crt: 0
  },
  {
    subject: "Christian Religious Studies",
    que: "What is the central prayer of Christianity that begins with 'Our Father'?",
    option: ["Apostles' Creed", "Hail Mary", "Lord's Prayer", "Nicene Creed"],
    crt: 2
  },
  {
    subject: "Christian Religious Studies",
    que: "Who is traditionally considered the author of the Book of Revelation in the New Testament?",
    option: ["John", "Paul", "Matthew", "Mark"],
    crt: 0
  },
  {
    subject: "Christian Religious Studies",
    que: "What Christian holiday commemorates the birth of Jesus Christ?",
    option: ["Easter", "Epiphany", "Pentecost", "Christmas"],
    crt: 3
  },
  {
    subject: "Christian Religious Studies",
    que: "Who was the first Christian martyr mentioned in the Bible?",
    option: ["Stephen", "Paul", "Peter", "John"],
    crt: 0
  },
  {
    subject: "Christian Religious Studies",
    que: "What is the term for the seven sacraments in the Catholic Church that mark important life events?",
    option: ["Ten Commandments", "Seven Wonders", "Seven Virtues", "Seven Sacraments"],
    crt: 3
  },
  {
    subject: "Christian Religious Studies",
    que: "Which Christian denomination was founded by Martin Luther in the 16th century?",
    option: ["Lutheran", "Methodist", "Anglican", "Calvinist"],
    crt: 0
  },
  {
    subject: "Christian Religious Studies",
    que: "What is the holy book of Christianity?",
    option: ["Torah", "Quran", "Bible", "Book of Mormon"],
    crt: 2
  },
  {
    subject: "Christian Religious Studies",
    que: "Who is considered the first Pope of the Roman Catholic Church?",
    option: ["Paul", "Peter", "John", "Benedict"],
    crt: 1
  },
  {
    subject: "Christian Religious Studies",
    que: "What is the name of the event in Christian tradition where the Holy Spirit descended upon the apostles?",
    option: ["Ascension", "Pentecost", "Transfiguration", "Annunciation"],
    crt: 1
  },
  {
    subject: "Christian Religious Studies",
    que: "Who is known for writing many of the Epistles (letters) in the New Testament?",
    option: ["Luke", "Peter", "Paul", "James"],
    crt: 2
  },
  {
    subject: "Christian Religious Studies",
    que: "What is the term for the Christian doctrine of the unity of the Father, Son, and Holy Spirit as one God in three persons?",
    option: ["Monotheism", "Trinity", "Atonement", "Incarnation"],
    crt: 1
  },
  {
    subject: "Christian Religious Studies",
    que: "Who is considered the first Christian martyr?",
    option: ["Peter", "John", "Stephen", "James"],
    crt: 2
  },
  {
    subject: "Christian Religious Studies",
    que: "What is the term for the Christian doctrine of God taking on human form in Jesus Christ?",
    option: ["Incarnation", "Resurrection", "Redemption", "Atonement"],
    crt: 0
  },

   //Mathematics 
         { 
       subject: "Mathematics", 
       que: "A ladder 9m long leans against a vertical wall so that its upper end is 6.5m from the ground. How far is the foot of the ladder from the wall? Correct to 2 decimal places", 
       option: ["8.5m" , "7.8m", "5.6m", "6.2m"], 
       crt: 3 
     }, 
           { 
       subject: "Mathematics", 
       que: "Find the number of ways that the letters of the word <b>EXCELLENCE</b> be arranged", 
       option: ["10!/2!2!2!", "10!/4!2!", "10!/4!2!2!", "10!/2!2!"], 
       crt: 1 
     }, 
           { 
       subject: "Mathematics", 
       que: "Find the factors of 2x² + 5x -3", 
       option: ["(x-2)(x+3)", "(2x-1)(x+3)", "(x+3)(x+2)", "(x-2)(2x-1)"], 
       crt: 1 
     }, 
           { 
       subject: "Mathematics", 
       que: "Simplify 4√27 + 5√12 - 3√75", 
       option: ["7", "-7", "-7√3", "7√3"], 
       crt: 3 
     }, 
          { 
       subject: "Mathematics", 
       que: "A fair die is tossed twice What is the probability of getting a sum greater or equal to 7", 
       option: ["5/12", "1/8", "7/12", "3/4"], 
       crt: 2 
     }, 
          { 
       subject: "Mathematics", 
       que: "The operation * on the set R or real number is defined by x*y = 3x+2y-1, find 3*-1", 
       option: ["9", "-9", "6", "-6"], 
       crt: 2 
     }, 
            { 
       subject: "Mathematics", 
       que: "Find the equations of a line which passes through the points(1, -1) and (3, 2)", 
       option: ["2x-y-9 = 0", "2y+3x-5=0", "2x+y+9 = 0", "2y-3x+5= 0"], 
       crt: 3 
     }, 
           { 
       subject: "Mathematics", 
       que: "What is the geometric mean of 9 and 16?", 
       option: ["14", "18", "15", "12"], 
       crt: 3 
     }, 
          { 
       subject: "Mathematics", 
       que: "Given T = {even numbers from 1 to 12} and N = {common factors of 6, 8 and 12}<br> <br> Find T n N", 
       option: ["{2,3}", "{2,3, 4}", "{3,4, 6}", "{2}"], 
       crt: 3 
     }, 
         { 
       subject: "Mathematics", 
       que: "y is inversely proportional to x and y is 6 when x is 7. Find the constant of the variation", 
       option: ["47", "42", "15", "12"], 
       crt: 1 
     }, 
           { 
       subject: "Mathematics", 
       que: "Solve (x-3)(x+2) < 0", 
       option: ["2 < x < 3", "-3 < x < 2", "-2 < x < 3", "-3 < x < 2"], 
       crt: 2 
     }, 
           { 
       subject: "Mathematics", 
       que: "If a rod 10cm in length was measured as 10.5cm. Calculate the percentage error", 
       option: ["5%", "10%", "8%", "7%"], 
       crt: 0 
     }, 
          { 
       subject: "Mathematics", 
       que: "Evaluate (sin 45⁰ + sin 30⁰) in surd form", 
       option: ["√3/2√2", "(√3 -1)/2", "1/2√2", "(1 + √2)/2"], 
       crt: 3 
     }, 
  
         { 
       subject: "Mathematics", 
       que: "Find n if 34<sub>n</sub> = 10011<sub>2</sub>", 
       option: ["5", "6", "7", "8"], 
       crt: 0 
     }, 
        { 
       subject: "Mathematics", 
       que: "Simplify (1)/(2-√3) in the form of a +b√3", 
       option: ["-2 -√3", "2 -√3", "2 + √3", "-2 + √3"], 
       crt: 2 
     }, 
  
  
  
   //English 
         { 
       subject: "English", 
       que: "Choose the word that has an opposite meaning to the one in bracket for questions below. <br> <br>The jollof rice served at the wedding reception was [malodorous", 
       option: ["small but palatable", "unpleasantly big", "pleasant", "stale and smelly"], 
       crt: 2 
     }, 
  
         { 
           subject: "English", 
           que: "  Choose the word that has an opposite meaning to the one in bracket for questions below. <br> <br>Mr Santos Laliga is a [dipsomaniac]", 
           option: ["teetotaler", "drunkard", "hater of women", "promiscuous man"], 
           crt: 0 
         }, 
  
         { 
           subject: "English", 
           que: "Choose the word that has an opposite meaning to the one in bracket for questions below. <br><br>When it comes to playing the piano, I am a complete [ignoramus]", 
           option: ["idiot", "virtuoso", "nonentity", "novice"], 
           crt: 0 
         }, 
         { 
       subject: "English", 
       que: "Substitute for the underlined word in the following sentence the word that most closely expresses the opposite meaning: <br> <br>The <u>plaintiff</u> made very cogent submissions to the trail judge", 
       option: ["bailiff", "prosecutor", "accused", "defendant"], 
       crt: 3 
     }, 
  
  
         { 
       subject: "English", 
       que: "  Choose the word that has a different stress pattern", 
       option: ["Incinerator", "Indicate", "Increase", "Euphemism"], 
       crt: 0 
     }, 
         { 
           subject: "English", 
           que: "Choose the word that has a different stress pattern", 
           option: ["enlighten", "unwanted", "agitate", "informal"], 
           crt: 2 
         }, 
       { 
       subject: "English", 
       que: "Choose the word that has a different stress pattern", 
       option: ["Calendar", "Aloud", "mechanic", "convivial"], 
       crt: 0 
     }, 
  
         { 
       subject: "English", 
       que: "Choose from the options the word that has the same vowel sound as the one represented by the letter(s) underlined ? <br> <br> Res<u>ea</u>rch", 
       option: ["disturb", "comfort", "affair", "carry"], 
       crt: 2 
     }, 
  
         { 
           subject: "English", 
           que: "  Choose from the options the word that has the same vowel sound as the one represented by the letter(s) underlined? <br> <br>R<u>u</u>st", 
           option: ["loud", "touch", "bought", "march"], 
           crt: 1 
         }, 
       { 
       subject: "English", 
       que: "  Choose the word that does not have the same vowel sound as the others?", 
       option: ["loot", "boot", "rout", "route"], 
       crt: 2 
     }, 
         { 
           subject: "English", 
           que: "Choose from the options the word that has the same vowel sound as the one represented by the letter(s) underlined? <br> <br> Plat<u>eau<u>", 
           option: ["wanted", "below", "haunted", "holiday"], 
           crt: 1 
         }, 
         { 
       subject: "English", 
       que: "  Choose the word with the same vowel sound as the one in bracket <br><br>Orthop[ae]dic ", 
       option: ["elite", "impasse", "cacophony", "sharp"], 
       crt: 0 
     }, 
  
         { 
       subject: "English", 
       que: "Choose the word with the same vowel sound as the one in bracket <br> <br> Cacoph[o]ny", 
       option: ["sole", "sun", "scissors", "comb"], 
       crt: 2 
     }, 
         { 
       subject: "English", 
       que: "Choose the word that has the same vowel sound as the one in bracket, from questions below <br> <br> B[oo]k", 
       option: ["shoe", "group", "blue", "full"], 
       crt: 3 
     }, 
         { 
       subject: "English", 
       que: "Choose the word that has the consonant sound as the one in bracket, from questions below. <br><br> A[d]just", 
       option: ["Diary", "Judge", "Dynasty", "Anticipate"], 
       crt: 1 
     }, 
  
         { 
       subject: "English", 
       que: "Choose the word that has the same vowel sound as the one in bracket, from questions below <br><br> H[ei]r", 
       option: ["care", "near", "metr", "weird"], 
       crt: 0 
     }, 
  
   //mathematics 
         { 
           subject: "Mathematics", 
           que: "(1.28 × 10⁴) ÷ (6.4 × 10²) equals", 
           option: ["2 × 10<sub>-5</sub>", "2 × 10 <sub>-1</sub>", "2 × 10¹", "2 × 10<sub>-4</sub>"], 
           crt: 2 
         }, 
  
         { 
           subject: "Mathematics", 
           que: "(3.2)² - (1.8)² equals", 
           option: ["7.0", "8.3", "2.56", "13.48"], 
           crt: 0 
         }, 
         { 
           subject: "Mathematics", 
           que: "The mean of the numbers 1.2, 1.0, 0.9, 1.4, 0.8, 0.8, 1.2 and 1.1 is", 
           option: ["2.3", "1.08", "1.05", "2.03"], 
           crt: 2 
         }, 
   //physics 
         { 
       subject: "Physics", 
       que: "Which of the following surfaces will absorbs radiant heat energy heat?", 
       option: ["white", "red", "black", "blue"], 
       crt: 2 
     }, 
   { 
     subject: "Physics", 
     que: "  When an athlete perspires after running, he loses heat through", 
     option: ["evaporation", "conduction", "radiation", "convection"], 
     crt: 0 
     }, 
   { 
     subject: "Physics", 
     que: "  Heat transfer by convection will take place is one the following substance.", 
     option: ["stone", "wood", "mercury", "water"], 
     crt: 3 
     }, 
   { 
     subject: "Physics", 
     que: "  The statement 'Heat lost by the hot body equals that gained by the cold one' is assumed when determining specific that heat capacity by the method of mixtures. Which of the following validates the assumption?<br><br>I. Lagging the Calorimeter <br>II. Ensuring that only S.I units are used<br>III. Weighing the calorimeter, the lid and the stirrer.", 
     option: ["I only", "i and ii only", "i and iii only", "i, ii and iii "], 
     crt: 0 
     }, 
  
   { 
     subject: "Physics", 
     que: "  Ice cubes are added to a glass of warm water. The glass and water are cooled by", 
     option: ["conduction only", "convection only", "conduction and convection only", "radiation Only"], 
     crt: 2 
         }, 
  
   { 
     subject: "Physics", 
     que: "  The main reason for making the cover of a vacuum flask airtight is to prevent heat loss by", 
     option: ["radiation", "conduction", "convection", "evaporation"], 
     crt: 2 
         }, 
   { 
     subject: "Physics", 
     que: "  Two similar kettles containing equal masses of boiling water are placed on a table. If the surface of one is highly polished and the surface of the other is covered with soot, Which of the following observations is correct ", 
     option: ["The two kettles will cool down at the same rate", "the polished kettle cools down more quickly by conduction", "the kettle covered with soot cools down more quickly because it is a good radiator", "the kettle covered with soot cools down more quickly by the process of heat convection"], 
     crt: 2 
         }, 
   { 
     subject: "Physics", 
     que: "  The space between the double glass walls of a thermos flask is evacuated space are silvered. The residual source of heat loss takes place by", 
     option: ["convection", "radiation from the surface", "conduction through the stopper and the glass ", "conduction across the walls"], 
     crt: 2 
         }, 
   { 
     subject: "Physics", 
     que: "A room is heated by means of a charcoal fire, An occupant of the room standing away from the fire is warmed mainly by", 
     option: ["convection", "conduction", "evaporation", "radiation"], 
     crt: 3 
     }, 
  
   { 
     subject: "Physics", 
     que: "  Which of the following statements? i. land and sea breezes are natural convection currents. ii. convection may occur in liquids or gasses but not in solids. iii. the vacuum in a thermos flask prevents heat loss due to convection only.", 
     option: ["i and ii only", "i and iii only", "ii and iii only", "i, ii and iii only"], 
     crt: 0 
     }, 
  
   { 
     subject: "Physics", 
     que: "When heat is applied to one end of a metal rod, the molecules at the other end soon begin to vibrate with greater amplitude than before because heat has been transferred by", 
     option: ["radiation", "convection", "conduction", "evaporation"], 
     crt: 2 
     }, 
   { 
     subject: "Physics", 
     que: "Which of the following phenomena explains the fact that a house whose roof is coated with white paint will be cooler in the hot season than one coated with black paint ?", 
     option: ["convection", "conduction", "refraction", "reflection"], 
     crt: 3 
     }, 
   { 
     subject: "Physics", 
     que: "If a solid changes directly into a gas when heat is applied the process is called", 
     option: ["Vaporization", "Evaporation", "Sublimation", "Conversion"], 
     crt: 2 
     }, 
   { 
     subject: "Physics", 
     que: "A hot metal ball is suspended in the open air. As it cools it loses heat by", 
     option: ["conduction only", "convection only ", "conduction and convection", "radiation only"], 
     crt: 1 
     }, 
   { 
     subject: "Physics", 
     que: "  Which of the following statements is NOT true? Thermostats are used to control the temperature of", 
     option: ["pressure cookers", "laundry irons", "heated apartments", "aquaria for tropical fish"], 
     crt: 0 
     }, 
  
   { 
     subject: "Physics", 
     que: "  Heat may be transferred by conduction, convection and radiation. By which of these methods does heat travel through vacuum?", 
     option: ["Heat loss due to conduction", "conduction only", "convection only", "radiation only"], 
     crt: 3 
     }, 
   { 
     subject: "Physics", 
     que: "Consider a thick glass tumbler and a thin glass tumbler which are made of the same kind of glass. Some hot liquid is poured into them. Which of the following statements is correct? ", 
     option: ["The thick tumbler is less likely to crack because it is stronger", "The thick tumbler is less likely to crack because it insulates the heat beter, glass being a poor conductor of heat", "Both tumblers are equally likely to crack because they are made of the same kind of glass", "the thick tumbler is more likely to crack because uneven expansion persists for a longer time within the thicker glass"], 
     crt: 2 
     }, 
   { 
     subject: "Physics", 
     que: "Two closed vessels contain equal volumes of boiling water and are identical except that one is blackened on the outside while the other is polished. Which of the following is correct?", 
     option: ["the polished vessel will cool faster because a polished surface is a good radiator", "the polished vessel will cool faster because it will absorbe less heat from the room", "the polished vessel will cool faster because it reflects heat better", "the black vessel will cool faster because a black surface radiates heat faster than a polished one"], 
     crt: 3 
     }, 
   { 
  
     subject: "Physics", 
     que: "The heat from the sun reaches the earth by the process", 
     option: ["Insulation", "Precipitation", "Convection", "Radiation"], 
     crt: 3 
     }, 
   { 
     subject: "Physics", 
     que: "Two objects of masses 80kg and 50kg are separated by a distance of 0.2m. If the gravitational constant is 6.6 x 10<sup>-11</sup>Nm²/kg², calculate the gravitational attraction between them.", 
     option: ["4.9 × 10<sub>-9</sub>N", "1.3 × 10<sub>-6</sub>N", "6.6 × 10<sub>-8</sub>N", "6.6 × 10<sub>-6</sub>N"], 
     crt: 3 
         }, 
   //Biology 
   { 
     subject: "Biology", 
     que: "  The kind of teeth used for tearing food materials is the", 
     option: ["fang", "canine", "premolar", "carnassial"], 
     crt: 1 
     }, 
   { 
     subject: "Biology", 
     que: "  Where is the food stored in yam plant?", 
     option: ["stem", "bud", "leaves", "root"], 
     crt: 0 
     }, 
   { 
     subject: "Biology", 
     que: "In animals, cilia, flagella, pseudopodia and chaetae, can be used for", 
     option: ["reproduction", "fighting", "attachment to plants", "locomotion"], 
     crt: 3 
     }, 
   { 
     subject: "Biology", 
     que: "What is the genetic ratio of a cross between homozygous tall plant and a homozygous dwarf plant?", 
     option: ["1 tall : 1 short", "3 tall : 1 short", "0 tall : 4 short", "4 tall : 0 short"], 
     crt: 3 
           }, 
   { 
     subject: "Biology", 
     que: "The amount of water loss from a leaf can be detected using", 
     option: ["lime-water", "red litmus paper", "blue litmus paper", "blue cobalt chloride paper"], 
     crt: 3 
     }, 
   { 
     subject: "Biology", 
     que: "Below are some group of diseases. Which group of diseases is caused by bacteria?", 
     option: ["Tuberculosis, smallpox", "Tuberculosis, polio", "Gonorrhoea, measles", "Syphilis, gonorrhoea"], 
     crt: 3 
     }, 
   { 
     subject: "Biology", 
     que: "  Leguminous plants, e.g Mucana, are usually planted in cultivated farmlands because they", 
     option: ["enrich the soil with phoshates", "provide animals with food", "enrich the soil with organic nitrogen", "protect the micro organisms in the soil"], 
     crt: 2 
     }, 
   { 
     subject: "Biology", 
     que: "  If a baby is a female, her mother's ovum must have been fertilized by a sperm carrying the chromosome", 
     option: ["X", "XY", "XX", "YY"], 
     crt: 0 
     }, 
  
   { 
     subject: "Biology", 
     que: "The tips of some rice seedlings were cut off while some were left intact. Both were covered with a container which had only one small hole to allow light through. After twenty-four hours it was observed that", 
     option: ["the cut tips was bent away from the light", "the cut tips bent towards source of light", "the intact tips bent away from the light", "the intact tips bent towards the source of light"], 
     crt: 3 
     }, 
  
   { 
     subject: "Biology", 
     que: "An organism X lives entirely on the waste products in another organism Y. In this association X is a", 
     option: ["symbiont", "commensal", "saprophyte", "parasite"], 
     crt: 1 
         }, 
   { 
     subject: "Biology", 
     que: "A student trying to find out the order in which organisms appear on a cleared plot is studying one of the following", 
     option: ["Ecosystem", "Food chain", "Food web", "succession"], 
     crt: 3 
     }, 
  
   { 
     subject: "Biology", 
     que: "Which of the following hormones is produced during fright or when agitated?", 
     option: ["insulin", "Adrenaline", "Thyroxine", "pituitrin"], 
     crt: 1 
     }, 
   { 
     subject: "Biology", 
     que: "Which part of the human brain is concerned with reflexes controlling the rate of heart beat and breathing?", 
     option: ["Medulla", "cerebellum", "cerebrum", "olfactory lobe"], 
     crt: 0 
     }, 
   { 
     subject: "Biology", 
     que: "The filament of spirogyra were put into equal volumes of sugar solutions X and Y. After 5 minutes, filaments from solution X had their cells contents rounded up while those from Y were unaffected. The experiment shows that", 
     option: ["solution X was stronger than Y", "solution Y was stronger than X", "Spirogyra used up the sugar in solution X", "solution Y was less contaminated than X"], 
     crt: 0 
         }, 
   { 
     subject: "Biology", 
     que: "In anaerobic respiration, glucose is converted to one of the following", 
     option: ["Carbon dioxide and water", "Carbon dioxide only", "Carbon dioxide and alcohol", "alcohol and water"], 
     crt: 2 
     }, 
  
   { 
     subject: "Biology", 
     que: "  A green plant growing in a compost pit is feeding", 
     option: ["saprophytically", "holozoically", "parasitically", "holophytically"], 
     crt: 3 
         }, 
   { 
     subject: "Biology", 
     que: "Which one of the following parts of the mammalian body is most closely associated with the production of urine?", 
     option: ["Malpighian capsule", "Urinary bladder", "Vas deferens", "Urether"], 
     crt: 0 
     }, 
   { 
     subject: "Biology", 
     que: "The conversion of excess amino acids into urea occurs in the", 
     option: ["kidney", "spleen", "liver", "pancreas"], 
     crt: 2 
     }, 
  
   { 
     subject: "Biology", 
     que: "Which of the following food substances is digested in the stomach?", 
     option: ["Carbohydrate", "fats and oil", "carbohydrates and fat", "proteins"], 
     crt: 3 
     }, 
  
  
   //Commerce 
   { 
     subject: "Commerce", 
     que: "From the diagram above, I represents?", 
     option: ["Aids to trade", "publicity", "Home trade", "advertising"], 
     crt: 0, 
     image: "/images/commerce-1(1).jpg" 
     }, 
   { 
     subject: "Commerce", 
     que: "The trade that takes place when imported goods are re-exported is known as", 
     option: ["entrepot", "import trade", "export trade", "visible trade"], 
     crt: 0 
     }, 
   { 
     subject: "Commerce", 
     que: "The effective dissemination of information about products is a social responsibility of a company to its", 
     option: ["shareholders", "management", "consumers", "employees"], 
     crt: 2 
     }, 
   { 
     subject: "Commerce", 
     que: "An unconditional order by a creditor to a debtor requiring payment on a specified date is called", 
     option: ["promissory note", "letter of credit", "money order", "bill of exchange"], 
     crt: 3 
         }, 
   { 
     subject: "Commerce", 
     que: "The selling of new shares to exist shareholders is referred to as?", 
     option: ["public issue", "offer for sale", "rights issue", "bonus issue"], 
     crt: 2 
     }, 
   { 
     subject: "Commerce", 
     que: "In the long run, all factors of production are?", 
     option: ["fixed", "variable", "marginal", "constant"], 
     crt: 1 
     }, 
  
   { 
     subject: "Commerce", 
     que: "The process of changing the form of a new material is known as?", 
     option: ["fabrication", "extraction", "conversion", "production"], 
     crt: 3 
     }, 
   { 
     subject: "Commerce", 
     que: "The art of soaping-making is an example of?", 
     option: ["primary occupation", "secondary occupation", "tertiary occupation", "consumer occupation"], 
     crt: 1 
         }, 
   { 
     subject: "Commerce", 
     que: "An example of a cartel is?", 
     option: ["OPEC", "AU", "ECOWAS", "EU"], 
     crt: 0 
         }, 
   { 
     subject: "Commerce", 
     que: "An activity that involves derivation of raw materials from land and sea is?", 
     option: ["construction", "farming", "agriculture", "extraction"], 
     crt: 3 
       }, 
   { 
     subject: "Commerce", 
     que: "A proposed company may not be registered if?", 
     option: ["the name conficits with that of another", "it does not put 'limited' after its proposed name", "it has no paid-up capital", "it has no asset of its own"], 
     crt: 0 
     }, 
  
   { 
     subject: "Commerce", 
     que: "A document which gives a legal status to a company is the certificate of?", 
     option: ["incorporation", "trading", "commencement of business", "business registration"], 
     crt: 0 
     }, 
  
   { 
     subject: "Commerce", 
     que: "The promotion of savings culture is a feature of a?", 
     option: ["trade association", "consumers' cooperative society", "thrift cooperative society", "business association"], 
     crt: 2 
     }, 
   { 
     subject: "Commerce", 
     que: "The quality and quantity of production mostly depend on the?", 
     option: ["effectiveness of factors", "availibility of factors", "level of education of enterpreneurs", "level of cooperation among workers"], 
     crt: 0 
     }, 
  
   { 
     subject: "Commerce", 
     que: "The cheapest source of funds available to a company is through?", 
     option: ["the sales of shares", "retained profit", "the sale of bonds", "lease financing"], 
     crt: 1 
     }, 
   { 
     subject: "Commerce", 
     que: "A type of retail trade where a group of similar stores which is owned by a firm operates in different locations is a?", 
     option: ["conglomerate", "chain stores", "departmental stores", "supermarket"], 
     crt: 1 
     }, 
  
   { 
     subject: "Commerce", 
     que: "A source of capital that has elements of debt and equity is a?", 
     option: ["debenture", "warrant", "loan", "share"], 
     crt: 3 
         }, 
   { 
     subject: "Commerce", 
     que: "The sale of of foreign investment and gold reserves can be used to?", 
     option: ["correct adverse balance of trade", "increase invisible imports", "correct adverse balance of payment", "correct a budget deficit"], 
     crt: 0 
     }, 
   { 
     subject: "Commerce", 
     que: "person who buys new issues with a view of reselling at a higher price in the near future is referred to as a?", 
     option: ["bull", "bear", "dealer", "snag"], 
     crt: 0 
     }, 
  
   { 
     subject: "Commerce", 
     que: "The internet is a system of telecommunications used for?", 
     option: ["communicating long distance messages", "sending and receiving text messages", "sending electronic messages", "communicating messages through telegram"], 
     crt: 2 
     }, 
  
   //Economics 
   { 
     subject: "Economics", 
     que: "Use the information below to answer questions.<br>When commodity X sold for N25 per unit, 50 units of commodity Y were purchased. With an increase in the price of commodity X to N50 per unit, the demand for commodity Y fell to 20 units.<br><br><br> Determined the cross elasticity of demand?", 
     option: ["1.7", "0.6", "-1.7", "-0.6"], 
     crt: 3 
     }, 
   { 
     subject: "Economics", 
     que: "Which of the following is an example of derived demand?", 
     option: ["Tax relief", "Labour", "wage increase", "entertainment"], 
     crt: 1 
         }, 
   { 
     subject: "Economics", 
     que: "In a capitalist economy, the economic problem of what goods to produce is decided mainly by?", 
     option: ["shadow prices", "profit level", "relative prices", "a Central planner"], 
     crt: 1 
         }, 
   { 
     subject: "Economics", 
     que: "(i) What and how much will be produced <br> (ii) How will it be produced <br>(iii) For whom will it be produced<br>(IV) How much will be exported and consumed?<br> <br> From the above, identify the combination of basic resource allocation questions in economic analysis.", 
     option: ["i, ii and iii", "i, ii and iv", "i, iii and iv", "ii, iii and iv"], 
     crt: 0 
     }, 
  
   { 
     subject: "Economics", 
     que: "Economics can be defined as", 
     option: ["reduction of spending in the face of competing alternative", "allocation of resources to alternate uses", "economic behavior of small units like the home and the firm", "The study of economic aggregates like inflation and national income"], 
     crt: 1 
         }, 
   { 
     subject: "Economics", 
     que: "Pricing and Output decisions of sellers are highly inter-dependent in markets known as _________", 
     option: ["Monopoly", "Oligopoly", "monopolistic competition", "perfect competition"], 
     crt: 1 
     }, 
   { 
     subject: "Economics", 
     que: "A firm is at its optimum size when ___________", 
     option: ["It has a motive to increase output", "it produces the greatest output at a minimum cost", "marginal cost equals marginal revenue", "marginal cost is less than marginal revenue"], 
     crt: 1 
         }, 
   { 
     subject: "Economics", 
     que: "Under the ECOWAS agreement, a Nigerian can enter and stay in Ghana without a Visa for a period of ________", 
     option: ["100 days", "30 days", "90 days", "14 days"], 
     crt: 2 
       }, 
   { 
     subject: "Economics", 
     que: "The petro-chemical industries are located in Rivers State of Nigeria due to ________", 
     option: ["coal deposit", "palm oil products", "favourable soil", "Oil deposits"], 
     crt: 3 
       }, 
   { 
     subject: "Economics", 
     que: "The regulatory authority of the capital market in Nigeria is the", 
     option: ["Central bank", "Securities and Exchange Commission", "Nigerian deposit Insurance corporation ", "Stock Exchange Market"], 
     crt: 1 
         }, 
   { 
     subject: "Economics", 
     que: "The price mechanism", 
     option: ["regulates demand and supply", "rations the consumer", "rewards the consumer", "allocates scarce resources"], 
     crt: 3 
         }, 
   { 
     subject: "Economics", 
     que: "In a free market economy, the rationing of scarce goods is done principally by", 
     option: ["the government", "business organization", "price mechanism", "consumers"], 
     crt: 2 
        }, 
   { 
     subject: "Economics", 
     que: "Scale of preference shows", 
     option: ["income of consumers in order of size", "utilities enjoyed by consumers", "opportunity cost of goods consumed", "consumer's wants in order of priority"], 
     crt: 3 
     }, 
   { 
     subject: "Economics", 
     que: "A major characteristic of natural resources is they", 
     option: ["are unlimited in supply", "have high cost of production", "are free gifts of nature", "do not demand any price"], 
     crt: 2 
        }, 
  
   { 
     subject: "Economics", 
     que: "The Marginal cost is", 
     option: ["The lowest cost of producing goods", "the cost of production of the most efficient firm in an industry", "the cost of production for the most inefficient firm in an industry", "the cost of production of the last or extra unit of goods produced by a firm"], 
     crt: 3 
         }, 
   { 
     subject: "Economics", 
     que: "The standard deviation of a set of data is", 
     option: ["always measured from the mode", "the most representative of averages", "always measured from the median", "a measure of dispersion"], 
     crt: 3 
         }, 
   { 
     subject: "Economics", 
     que: "The most popular sizes of dresses and shoes are determined by the", 
     option: ["range", "mean", "mode", "median"], 
     crt: 2 
               }, 
   { 
     subject: "Economics", 
     que: "If the demand for a good is more elastic than its supply, the tax burden is borne", 
     option: ["equally by producers and consumers", "more by producers", "more by consumers", "more by retailers and consumers"], 
     crt: 1 
             }, 
   { 
     subject: "Economics", 
     que: "Economics is the study of human behaviour as it relates to the", 
     option: ["efficient allocation of resources", "production of goods", "operation of companies", "generation of income"], 
     crt: 0 
     }, 
   { 
     subject: "Economics", 
     que: "The downturn in the prices of shares on stock markets is a highlight of", 
     option: ["efficient allocation of resources", "the invisible hand", "the regulatory nature of the market", "consumer rationality"], 
     crt: 2 
           }, 
  
   { 
     subject: "Chemistry", 
     que: "Zinc oxide is a", 
     option: ["basic oxide", "acidic oxide", "amphoteric oxide", "neutral oxide"], 
     crt: 2 
   }, 
   { 
     subject: "Chemistry", 
     que: "Calculate the percentage by mass of oxygen in calcium triooxocarbonate(IV) [Ca = 40, O = 16, C = 12]", 
     option: ["16", "48", "40", "12"], 
     crt: 1 
   }, 
   { 
     subject: "Chemistry", 
     que: "If the molecular mass of tetraoxosulphate(VI) acid is 98, calculate its vapour density", 
     option: ["196", "49", "106", "82"], 
     crt: 1 
       }, 
   { 
     subject: "Chemistry", 
     que: "The bonding between water molecules and hydrogen ion is", 
     option: ["dative", "metallic", "hydrogen", "covalent"], 
     crt: 0 
           }, 
   { 
     subject: "Chemistry", 
     que: "If the difference in electronegativity of elementary P and Q is 3.0. The bond that will be formed between them is", 
     option: ["ionic", "covalent", "metallic", "coordinate"], 
     crt: 0 
   }, 
   { 
     subject: "Chemistry", 
     que: "The element above whose electronic configuration is depicted above is", 
     option: ["carbon", "flourine", "oxygen", "Nitrogen"], 
     crt: 2, 
     image: "/images/IMG_20231006_080338_841.jpg" 
       }, 
  
   { 
     subject: "Chemistry", 
     que: "Elements P, Q, R, S, have 6, 11, 15, and 17 electrons respectively, therefore", 
     option: ["P will form an electrovalent bond with R", "Q will form a covalent bond with S", "R will form an electrovalent bond with S", "Q will form an electrovalent bond with S"], 
     crt: 3, 
   }, 
   { 
     subject: "Chemistry", 
     que: "In the reaction between sodium hydroxide and sulphuric acid solutions, what volume of 0.5 M sodium hydroxide would exactly neutralize 10cm³ of 1.25 M sulphuric acid?", 
     option: ["5cm³", "10cm³", "2Ocm³", "50cm³"], 
     crt: 3 
       }, 
   { 
     subject: "Chemistry", 
     que: "What is the percentage by mass of sulphur in sulphur (IV) oxide?", 
     option: ["50%", "66%", "25%", "40%"], 
     crt: 0 
   }, 
   { 
     subject: "Chemistry", 
     que: "The relative molecular mass of an alkyne with six carbon atoms is", 
     option: ["78", "84", "82", "72"], 
     crt: 2 
     }, 
   { 
     subject: "Chemistry", 
     que: "1050cm³ of helium gas was produced at -33⁰C and 700mmHg. What volume would the gas occupy at 23⁰C and 750mmHg? ", 
     option: ["1208.67cm³", "794.59cm³", "912.16cm³", "1387.50cm³"], 
     crt: 0 
   }, 
   { 
     subject: "Chemistry", 
     que: "Which of the quantum number determines the energy sub-level in an orbital?", 
     option: ["magnetic", "principal", "azimuthal", "spin"], 
     crt: 2 
   }, 
   { 
     subject: "Chemistry", 
     que: "The bond formed between two elements with electronic configuration 1s²2s²2p⁶3s² and 1s²2s²2p⁴ is", 
     option: ["dative", "ionic", "metallic", "covalent"], 
     crt: 1 
     }, 
   { 
     subject: "Chemistry", 
     que: "The rate of diffusion of a gas Y is twice that of Z. If the relative molecular mass og Y is 64 and the two gases diffuse under the same conditions, find the relative molecular mass of Z", 
     option: ["8", "16", "32", "4"], 
     crt: 1 
       }, 
   { 
     subject: "Chemistry", 
     que: "50cm³ of a gas was collected over water at 10⁰C and 765mmHg. Calculate the volume of the gas at S.T.P if the saturated vapor pressure of water at 10⁰C is 5mmHg", 
     option: ["49.19cm³", "48.87cm³", "48.55cm", "48.23cm³"], 
     crt: 3 
         }, 
   { 
     subject: "Chemistry", 
     que: "2H<sub>2</sub> + O<sub>2</sub> ——> 2H<sub>2</sub>O <br> In the reaction above, what volume of hydrogen would be left over when 300cm³ of oxygen and 1000cm³ of hydrogen are exploded in the sealed tube?", 
     option: ["200cm³", "400cm³", "600cm³", "700cm³"], 
     crt: 1 
   }, 
   { 
     subject: "Chemistry", 
     que: "The oxidation number of boron in NaBH<sub>4</sub> is", 
     option: ["-3", "-1", "+1", "+3"], 
     crt: 3 
   }, 
   { 
     subject: "Chemistry", 
     que: "What type of bond exists between an element with atomic number X and Y with atomic number 17?", 
     option: ["Dative", "Electrovalent", "Metallic", "Covalent"], 
     crt: 1 
   }, 
   { 
     subject: "Chemistry", 
     que: "From the diagram above, an ideal gas can be represented by", 
     option: ["L", "M", "N", "K"], 
     crt: 2, 
     image: "/images/11811602312_14686681_1190220611042604_1964644175_n.jpg" 
   }, 
  
  
  
   { 
     subject: "Biology", 
     que: "What is the largest organ in the human body?", 
     option: ["Heart", "Lungs", "Brain", "Skin"], 
     crt: 3 
   }, 
   { 
     subject: "English", 
     que: "<b> Passage I </b> <br> <br><br><small> Political change and social transformation in the form of revolutions have radically altered the course of human civilization and history. Today, the world is witnessing political and social changes arising from the desire of people all over the globe for greater freedom and a voice in the way they are governed and a better standard of living. Pan of these struggles and processes have become more pronounced in the Third World since the end of the East-West cold War in the late 1980's, and in the face of the challenges being posed by the ongoing process of globalization. <br> <br>While political and social changes may appear to be distinct phenomena, they are analytically inseparable. Political and social changes refer to alteration or transformations in human behavior, norms and politico-social institutions. Such changes are often a collective response to the need to change, or as a tacit recognition of a shift in the prevalent power relations in the society. Therefore, the coming to power of a new set of rulers, or the establishment of new structure and processes of governance broadly typifies socio-political changes. <br> <br><br>It is important to note that changes can either be positive or negative. In most cases, political and social changes are caused by certain factors or reasons. This push people to collectively organize themselves to struggle for a change in the existing power relations. Another reason is to capture political power in the hope of making life better for the generality of the people. If politics is defined as who gels what, when and how; It then implies that political change refers to an alteration in the form of power and the identity of the group or class which controls the wields states power. <br><br><br> Which of the following is true according to the passage?", 
     option: ["change is immitable", "change is inevitable", "change is invaluable", "change is inestimable"], 
     crt: 1 
   }, 
   { 
     subject: "English", 
     que: "<small><p> Political change and social transformation in the form of revolutions have radically altered the course of human civilization and history. Today, the world is witnessing political and social changes arising from the desire of people all over the globe for greater freedom and a voice in the way they are governed and a better standard of living. Pan of these struggles and processes have become more pronounced in the Third World since the end of the East-West cold War in the late 1980's, and in the face of the challenges being posed by the ongoing process of globalization. <br><br>While political and social changes may appear to be distinct phenomena, they are analytically inseparable. Political and social changes refer to alteration or transformations in human behavior, norms and politico-social institutions. Such changes are often a collective response to the need to change, or as a tacit recognition of a shift in the prevalent power relations in the society. Therefore, the coming to power of a new set of rulers, or the establishment of new structure and processes of governance broadly typifies socio-political changes. <br> <br>It is important to note that changes can either be positive or negative. In most cases, political and social changes are caused by certain factors or reasons. This push people to collectively organize themselves to struggle for a change in the existing power relations. Another reason is to capture political power in the hope of making life better for the generality of the people. If politics is defined as who gels what, when and how; It then implies that political change refers to an alteration in the form of power and the identity of the group or class which controls the wields states power.<br> It can deduced from the passage that political and social changes are</p><span>", 
     option: ["intertwined", "antithetical", "independent", "repulsive"], 
     crt: 0 
   }, 
   { 
     subject: "English", 
     que: "<br><br> <b> Passage I </b> <small><p> Political change and social transformation in the form of revolutions have radically altered the course of human civilization and history. Today, the world is witnessing political and social changes arising from the desire of people all over the globe for greater freedom and a voice in the way they are governed and a better standard of living. Pan of these struggles and processes have become more pronounced in the Third World since the end of the East-West cold War in the late 1980's, and in the face of the challenges being posed by the ongoing process of globalization. <br><br>While political and social changes may appear to be distinct phenomena, they are analytically inseparable. Political and social changes refer to alteration or transformations in human behavior, norms and politico-social institutions. Such changes are often a collective response to the need to change, or as a tacit recognition of a shift in the prevalent power relations in the society. Therefore, the coming to power of a new set of rulers, or the establishment of new structure and processes of governance broadly typifies socio-political changes. <br> <br>It is important to note that changes can either be positive or negative. In most cases, political and social changes are caused by certain factors or reasons. This push people to collectively organize themselves to struggle for a change in the existing power relations. Another reason is to capture political power in the hope of making life better for the generality of the people. If politics is defined as who gels what, when and how; It then implies that political change refers to an alteration in the form of power and the identity of the group or class which controls the wields states power.<br> A suitable title for this passage is", 
     option: ["Reasons for politics change", "The struggle for political power", "Elements of politics", "Social change and political empowerment"], 
     crt: 3 
   }, 
   { 
     subject: "English", 
     que: "<small><p> Political change and social transformation in the form of revolutions have radically altered the course of human civilization and history. Today, the world is witnessing political and social changes arising from the desire of people all over the globe for greater freedom and a voice in the way they are governed and a better standard of living. Pan of these struggles and processes have become more pronounced in the Third World since the end of the East-West cold War in the late 1980's, and in the face of the challenges being posed by the ongoing process of globalization. <br><br>While political and social changes may appear to be distinct phenomena, they are analytically inseparable. Political and social changes refer to alteration or transformations in human behavior, norms and politico-social institutions. Such changes are often a collective response to the need to change, or as a tacit recognition of a shift in the prevalent power relations in the society. Therefore, the coming to power of a new set of rulers, or the establishment of new structure and processes of governance broadly typifies socio-political changes. <br> <br>It is important to note that changes can either be positive or negative. In most cases, political and social changes are caused by certain factors or reasons. This push people to collectively organize themselves to struggle for a change in the existing power relations. Another reason is to capture political power in the hope of making life better for the generality of the people. If politics is defined as who gels what, when and how; It then implies that political change refers to an alteration in the form of power and the identity of the group or class which controls the wields states power.<br>The word <b> alteration,</b> as used in the passage, means</p><span>", 
     option: ["Multiplication", "Recognition", "Modification", "Complication"], 
     crt: 2 
   }, 
   { 
     subject: "English", 
     que: "<b>Passage II </b> <br><br><br> <small> Like all reptiles, snakes are cold blooded, or more correctly, ectothermic - they cannot produce their own body heat; instead, they rely on the sun to heat their bodies. Because they do not rely on energy from food to generate body heat, snakes can survive on an extremely meager diet. some wait for months between successive meals, and a few survive by eating a large meal just once or twice a year. When they do eat, snakes swallow their prey whole rather than biting off small piece. Many snakes have specialized jaws that enable them to swallow animals that are far larger than their own heads. Although uncommon, some snakes, such as the African rock python, have been observed eating animals as large as an antelope or a small cow.<br> <br> <br>With over two thousand five hundred species belonging to more than ten families, snakes are a large and successful groups. They owe much of this success to their versatility - snakes occupy habitat ranging from underground burrows to the top of the tree, to ocean depths as great as one hundred and fifty meters. They are found on every continent except Antarctica, and although they are most abundant in tropical areas, many survive in regions marked by extreme cold. The only places without snakes are parts of the polar regions and isolated islands, such as the Republic of Ireland and New-Zealand as opposed to places in Nigeria like Plateau and Gombe States in the Northern part where there is a large population of snakes.</small><br><br><br>It can be inferred from the passage that snakes are", 
     option: ["heterogeneous creatures", "voracious cow eaters", "great insect eaters", "homogeneous reptiles"], 
     crt: 0 
   }, 
   { 
     subject: "English", 
     que: "<small> Like all reptiles, snakes are cold blooded, or more correctly, ectothermic - they cannot produce their own body heat; instead, they rely on the sun to heat their bodies. Because they do not rely on energy from food to generate body heat, snakes can survive on an extremely meager diet. some wait for months between successive meals, and a few survive by eating a large meal just once or twice a year. When they do eat, snakes swallow their prey whole rather than biting off small piece. Many snakes have specialized jaws that enable them to swallow animals that are far larger than their own heads. Although uncommon, some snakes, such as the African rock python, have been observed eating animals as large as an antelope or a small cow.<br> <br> <br>With over two thousand five hundred species belonging to more than ten families, snakes are a large and successful groups. They owe much of this success to their versatility - snakes occupy habitat ranging from underground burrows to the top of the tree, to ocean depths as great as one hundred and fifty meters. They are found on every continent except Antarctica, and although they are most abundant in tropical areas, many survive in regions marked by extreme cold. The only places without snakes are parts of the polar regions and isolated islands, such as the Republic of Ireland and New-Zealand as opposed to places in Nigeria like Plateau and Gombe States in the Northern part where there is a large population of snakes.</small><br><br><br>The most important thing about snakes, according to the passage is that they", 
     option: ["abound in Gombe and Plateau states", "are versatile in reproduction", "eat big but seldom", "exist in families"], 
     crt: 2 
   }, 
   { 
     subject: "English", 
     que: "<small> Like all reptiles, snakes are cold blooded, or more correctly, ectothermic - they cannot produce their own body heat; instead, they rely on the sun to heat their bodies. Because they do not rely on energy from food to generate body heat, snakes can survive on an extremely meager diet. some wait for months between successive meals, and a few survive by eating a large meal just once or twice a year. When they do eat, snakes swallow their prey whole rather than biting off small piece. Many snakes have specialized jaws that enable them to swallow animals that are far larger than their own heads. Although uncommon, some snakes, such as the African rock python, have been observed eating animals as large as an antelope or a small cow.<br> <br> <br>With over two thousand five hundred species belonging to more than ten families, snakes are a large and successful groups. They owe much of this success to their versatility - snakes occupy habitat ranging from underground burrows to the top of the tree, to ocean depths as great as one hundred and fifty meters. They are found on every continent except Antarctica, and although they are most abundant in tropical areas, many survive in regions marked by extreme cold. The only places without snakes are parts of the polar regions and isolated islands, such as the Republic of Ireland and New-Zealand as opposed to places in Nigeria like Plateau and Gombe States in the Northern part where there is a large population of snakes.</small><br><br><br> Which of the following is true according to the passage", 
     option: ["Snakes are not in the polar regions", "snakes are endemic on every continent", "There are countless number of sanakes in the Republic of Ireland", "Snakes are seldom seen at the Antarctica"], 
     crt: 0 
   }, 
   { 
     subject: "English", 
     que: "<small> Like all reptiles, snakes are cold blooded, or more correctly, ectothermic - they cannot produce their own body heat; instead, they rely on the sun to heat their bodies. Because they do not rely on energy from food to generate body heat, snakes can survive on an extremely meager diet. some wait for months between successive meals, and a few survive by eating a large meal just once or twice a year. When they do eat, snakes swallow their prey whole rather than biting off small piece. Many snakes have specialized jaws that enable them to swallow animals that are far larger than their own heads. Although uncommon, some snakes, such as the African rock python, have been observed eating animals as large as an antelope or a small cow.<br> <br> <br>With over two thousand five hundred species belonging to more than ten families, snakes are a large and successful groups. They owe much of this success to their versatility - snakes occupy habitat ranging from underground burrows to the top of the tree, to ocean depths as great as one hundred and fifty meters. They are found on every continent except Antarctica, and although they are most abundant in tropical areas, many survive in regions marked by extreme cold. The only places without snakes are parts of the polar regions and isolated islands, such as the Republic of Ireland and New-Zealand as opposed to places in Nigeria like Plateau and Gombe States in the Northern part where there is a large population of snakes.</small><br><br><br>It can be deduced from the passage that snakes have", 
     option: ["no external auditory organs", "visual internal locomotive organs", "no visual sense of measurement", "large appetite for antelopes"], 
     crt: 1 
   }, 
   { 
     subject: "English", 
     que: "<small> Like all reptiles, snakes are cold blooded, or more correctly, ectothermic - they cannot produce their own body heat; instead, they rely on the sun to heat their bodies. Because they do not rely on energy from food to generate body heat, snakes can survive on an extremely meager diet. some wait for months between successive meals, and a few survive by eating a large meal just once or twice a year. When they do eat, snakes swallow their prey whole rather than biting off small piece. Many snakes have specialized jaws that enable them to swallow animals that are far larger than their own heads. Although uncommon, some snakes, such as the African rock python, have been observed eating animals as large as an antelope or a small cow.<br> <br> <br>With over two thousand five hundred species belonging to more than ten families, snakes are a large and successful groups. They owe much of this success to their versatility - snakes occupy habitat ranging from underground burrows to the top of the tree, to ocean depths as great as one hundred and fifty meters. They are found on every continent except Antarctica, and although they are most abundant in tropical areas, many survive in regions marked by extreme cold. The only places without snakes are parts of the polar regions and isolated islands, such as the Republic of Ireland and New-Zealand as opposed to places in Nigeria like Plateau and Gombe States in the Northern part where there is a large population of snakes.</small><br><br><br>A suitable title for this passage is", 
     option: ["Feeding habits of snakes", "Some characteristics of snakes", "Snakes as legless, Cold bloodes reptiles", "Species of snakes in Nigeria and other lands"], 
     crt: 1 
   }, 
   { 
     subject: "English", 
     que: "<b> In each of the questions from 10 to 19, choose the option nearest in meaning to the word or phrase in italics </b>. The chairman admires <i>incessant</i> meetings", 
     option: ["unusual", "planned", "constant", "irregular"], 
     crt: 3 
     }, 
   { 
     subject: "English", 
     que: "Today's weather is <i> favourable </i> for a game of tennis", 
     option: ["impartial", "abnormal", "encouraging", "disapproving"], 
     crt: 2 
     }, 
   { 
     subject: "English", 
     que: "All the candidates looked <i>aghast</i>", 
     option: ["fulfilled", "dismayed", "satisfied", "relaxed"], 
     crt: 1 
         }, 
  
   { 
     subject: "English", 
     que: "John gave Muhammed a <i> jaunty </i> smile", 
     option: ["a discouraging", "an inviting", "a frightful", "a cheerful"], 
     crt: 3 
             }, 
   { 
     subject: "English", 
     que: "The first round of the tournament was a <i>doddle</i>", 
     option: ["easy", "balanced", "dodgy", "exasperating"], 
     crt: 0 
                 }, 
   { 
     subject: "English", 
     que: "The lazy man cast a <i> lustful </i> glance at his neighbors wife", 
     option: ["hateful", "quick", "covetous", "envious"], 
     crt: 2 
     }, 
   { 
     subject: "English", 
     que: "All the researchers were asked to <i> garner </i> information on the new viral infection", 
     option: ["collect", "disseminate", "distort", "give"], 
     crt: 0 
         }, 
   { 
     subject: "English", 
     que: "<b> In each of the questions, choose the option that best completes the gap(s) <br><br><br> The house and the Senate .... at noon next Wednesday to hear a special address by the president", 
     option: ["convene", "adjourn", "rise", "collude"], 
     crt: 0 
             }, 
   { 
     subject: "English", 
     que: "At the ..... of the century, many ways of doing things were introduced", 
     option: ["turn", "event", "birth", "sight"], 
     crt: 0 
                 }, 
   { 
     subject: "English", 
     que: "You may have the pencil, but you cant have the ballpoint .....", 
     option: ["either", "furthermore", "also", "as well"], 
     crt: 3 
                     }, 
   { 
     subject: "English", 
     que: "He went to the restaurant to enjoy the special .....", 
     option: ["suite", "cuisine", "la carte", "chef"], 
     crt: 1 
                     }, 
   { 
     subject: "English", 
     que: "The president said that the country was not out of the .... yet", 
     option: ["forest", "fog", "water", "wood"], 
     crt: 3 
   }, 
   { 
     subject: "English", 
     que: "The Invigilator .... to know how long the examination .... going on", 
     option: ["wanted/had been", "wants/had been", "wants/have been", "wanted/has been"], 
     crt: 0 
     }, 
   { 
     subject: "English", 
     que: "The woman refused to testify .... her", 
     option: ["in", "at", "against", "from"], 
     crt: 2 
     }, 
   { 
     subject: "English", 
     que: "Abike must have found the very interesting movies quite", 
     option: ["absolving", "absorbing", "nauseating", "perverting"], 
     crt: 1 
     }, 
     //Literature  
   { 
     subject: "Literature", 
     que: "The repetition of a consonant sound in quick succession of sound effect is ", 
     option: ["Alliteration", "Pun", "Onomatopoeia", "Assonance"], 
     crt: 0 
     }, 
   { 
     subject: "Literature", 
     que: "A play in which the acts succeed on another without probable or necessary sequence is", 
     option: ["Episodic", "Simple", "Linear", "Convulated"], 
     crt: 0 
     }, 
   { 
     subject: "Literature", 
     que: "A technique by which a previous scene or action can be recalled in a play to shed light on the present action is ", 
     option: ["Climax", "Flashback", "Interlude", "Cathersis"], 
     crt: 1 
     }, 
   { 
     subject: "Literature", 
     que: "Criticism is a literary activity which seeks to ", 
     option: ["Find faults in a literary work", "Analyse and evaluate a literary work", "compare and contrast novels", "Discover the beauty of a literary work"], 
     crt: 1 
     }, 
   { 
     subject: "Literature", 
     que: "A situation where an actor addresses the audience without the other actors hearing him is called", 
     option: ["Soliloquy", "aside", "chorus", "solo"], 
     crt: 1 
     }, 
   { 
     subject: "Literature", 
     que: "A band of singers and dancers in drama who acts as a link between the play and the audience is the ", 
     option: ["Chorus", "clown", "playwright", "cast"], 
     crt: 0 
     }, 
   { 
     subject: "Literature", 
     que: "Questions 7 - 17 are based on General Literary Principles. <br> <br> <br> Persona refers to the ", 
     option: ["central character of a play", "voice of the character", "the image the character represents", "the personality of the character"], 
     crt: 2 
           }, 
   { 
     subject: "Literature", 
     que: "The three main unities in drama are those of", 
     option: ["action, time and place", "time, space and action", "place, time and space", "space, action and time"], 
     crt: 0 
         }, 
   { 
     subject: "Literature", 
     que: "Poems that are not written in meter or regular line length are called", 
     option: ["short verses", "rhythmic verses", "free verses", "irregular verses"], 
     crt: 2 
       }, 
   { 
     subject: "Literature", 
     que: "An elegy is a poem that mourns for the ", 
     option: ["deceased", "bereaved", "accused", "king"], 
     crt: 0 
     }, 
   { 
     subject: "Literature", 
     que: "When two statements or comparisons are apparently contradictory, we have an example of ", 
     option: ["irony", "paradox", "contrast", "parallelism"], 
     crt: 0 
       }, 
   { 
     subject: "Literature", 
     que: "'If Winter comes, can Spring be far behind?' Shelly, 'Ode to the West Wind'. The literary device used here is ", 
     option: ["an apostrophe", "an allegory", "a poetic license", "a rhetoric"], 
     crt: 3 
     }, 
   { 
     subject: "Literature", 
     que: "A melodramatic play is based on ", 
     option: ["a melodious manipulation of events", "ingredients that mellow down events", "sensational plot and characters", "the playwright's didactic overtones"], 
     crt: 2 
     }, 
   { 
     subject: "Literature", 
     que: "Romantic poetry emphasizes ", 
     option: ["the beauty of nature", "intimate relationships", "the love in human nature", "the romance in human aspiration"], 
     crt: 0 
       }, 
   { 
     subject: "Literature", 
     que: "In drama, a conspicuous weakness in the character of the protagonist contributing to his downfall is referred to as", 
     option: ["an anagnorisis", "a tragic flow", "a catharsis", "a catastrophe"], 
     crt: 1 
     }, 
   { 
     subject: "Literature", 
     que: "The woman whose breast I sucked is gone to the worms, 'Oculi, Orphan'. These lines illustrate the use of ", 
     option: ["Sadism", "Sophism", "satire", "euphemism"], 
     crt: 3 
       }, 
   { 
     subject: "Literature", 
     que: "Questions 17 - 20 are based on William Shakespeare's Twelfth Night. <br> <br> <br> 'She bore a mind that envy could not but call fair' The statement above characterizes", 
     option: ["Maria", "Olivia", "Roderigo", "Viola"], 
     crt: 1 
        }, 
   { 
     subject: "Literature", 
     que: "According to the play, the Duke of Illyria is fascinated by ", 
     option: ["The idea of love", "The food of love", "Music", "Entertainment"], 
     crt: 0 
       }, 
   { 
     subject: "Literature", 
     que: "What would you consider to be the major theme of the play?", 
     option: ["love at the first sight", "Unrequited love", "illusion and reality", "humour and tragedy"], 
     crt: 1 
       }, 
   { 
     subject: "Literature", 
     que: "The significance of the sub-plot dealing with Feste, Toby and Maria is the expression of life's", 
     option: ["Fragility", "Pleasure", "Comedy", "Romance"], 
     crt: 0 
       }, 
       //Government 
   { 
     subject: "Government", 
     que: "A major opposition party at the national level in Nigeria's Second Republic was", 
     option: ["NNP", "UPN", "PRP", "GNPP"], 
     crt: 1 
       }, 
   { 
     subject: "Government", 
     que: "The exclusion of Africans from colonial administration is associated with", 
     option: ["policy of assimilation", "indirect rule system", "policy of association", "indignant policy"], 
     crt: 0 
       }, 
   { 
     subject: "Government", 
     que: "During the 1964 Federal Election in Nigeria, the United Progressive Grand Alliance comprised the", 
     option: ["NNDP, NPC and NDC", "NPC, UMBC and BYM", , "UMBC, AG, NEPU and NCNC", "UMBC, BYM, NEPU and NPC"], 
     crt: 2 
       }, 
   { 
     subject: "Government", 
     que: "Which of the following binds Commonwealth Nations together?", 
     option: ["Uniform political system", "Common currency", "Common language", "Common Colonial history"], 
     crt: 3 
     }, 
   { 
     subject: "Government", 
     que: "A structure of government in which power is shared between the centre and the units is", 
     option: ["Confederal", "Oligarchic", "Unitary", "Federalism"], 
     crt: 3 
       }, 
   { 
     subject: "Government", 
     que: "Which of the following performs oversight functions?", 
     option: ["Judiciary", "Civil service", "Executive", "Bureaucracy"], 
     crt: 2 
       }, 
   { 
     subject: "Government", 
     que: "Foreign policy refers to", 
     option: ["a policy made by a country when it is at war", "The General principles of a states international behavior", "a policy made by a foreign country", "a policy made by a country for foreigners"], 
     crt: 1 
     }, 
   { 
     subject: "Government", 
     que: "From each according to his ability to each according to his needs' is the principle of", 
     option: ["communism", "socialism", "capitalism", "communalism"], 
     crt: 0 
     }, 
   { 
     subject: "Government", 
     que: "The maintenance of law and order is a function of the", 
     option: ["legislature", "military", "judiciary", "executive"], 
     crt: 3 
     }, 
   { 
     subject: "Government", 
     que: "The development of attitudes and beliefs about a political system is known as", 
     option: ["political apathy", "political culture", "political socialization", "political emancipation"], 
     crt: 0 
     }, 
   { 
     subject: "Government", 
     que: "The primary function of the judiciary is to", 
     option: ["interpret laws", "make laws", "reglate behaviors", "execute laws"], 
     crt: 0 
     }, 
   { 
     subject: "Government", 
     que: "The highest decision-making body in Nigeria under the Buhari's military regime was the ________", 
     option: ["Armed forces ruling council", "Supreme military council", "National council of states", "Federal executive council"], 
     crt: 1 
     }, 
   { 
     subject: "Government", 
     que: "A system of government in which the central government is supreme over other levels is", 
     option: ["totalitarian", "confederal", "federal", "unitary"], 
     crt: 3 
     }, 
   { 
     subject: "Government", 
     que: "The main source of local government finance since the 1976 reform has been___________", 
     option: ["local rates", "levies", "revenue from court fines and licences", "the federal government"], 
     crt: 3 
     }, 
   { 
     subject: "Government", 
     que: "A bye-law is made by", 
     option: ["parliament", "congress", "electoral college", "local government"], 
     crt: 3 
         }, 
   { 
     subject: "Government", 
     que: "A human community that is usually cohesive and homogeneous is a", 
     option: ["clan", "community", "nation", "kingship"], 
     crt: 2 
     }, 
   { 
     subject: "Government", 
     que: "A state that is ruled by an elected citizen is", 
     option: ["empire", "monarchy", "republic", "plutocracy"], 
     crt: 2 
       }, 
   { 
     subject: "Government", 
     que: "Political socialization is associated with", 
     option: ["free choice of party programmes", "military takeover of civilian", "the transmission of political values", "political transition"], 
     crt: 2 
        }, 
   { 
     subject: "Government", 
     que: "The development of a classless society is the goal of __________", 
     option: ["liberalism", "maxism", "conservatism", "feudalism"], 
     crt: 1 
       }, 
       // Economics 
  
   { 
     subject: "Government", 
     que: "Rhodesia was the former name of", 
     option: ["Zambia", "Namibia", "Zimbabwe", "Swaziland"], 
     crt: 2 
 } 
 ]; 
  
 let selectedOptions = new Array(ques.length).fill(null); 
 let selectedSubjects = []; 
 let score = 0, 
   index = 0, 
   name = "", 
   answer = [], 
   times; 
  
 $(document).ready(function() { 
   $(".continue-btn").click(function() { 
     $(".sec1").fadeOut(); 
     $(".sec2").fadeIn(); 
   }); 
  
   $(".start-quiz").click(function() { 
     selectedSubjects = []; 
     $("select.subject-select option:selected").each(function() { 
       selectedSubjects.push($(this).val()); 
     }); 
  
     if (selectedSubjects.length === 0) { 
       alert("Please select at least one subject."); 
       return; 
     } 
  
     $(".sec1").fadeOut(); 
     $(".sec2").fadeIn(); 
     startTimes(); 
     newQuestion(); 
     name = $(".input").val(); 
     if (name === "") { 
       alert("Please Enter Your Name"); 
       return; 
     } 
     $(".sec2").fadeOut(); 
     $(".sec3").fadeIn(); 
     newQuestion(); 
     startTimes(); 
   }); 
  
   $(".quiz").on("click", "li", function() { 
     $(".quiz .select").removeClass("select"); 
     $(this).addClass("select"); 
   }); 
  
   $(".submit").click(function() { 
     const select = $(".quiz li").hasClass("select"); 
     if (!select) { 
       alert("Please select an option"); 
       return; 
     } 
     const key = $(".quiz .select").attr("data-key"); 
     checkAns(key); 
   }); 
  
   $(".check-ans").click(function() { 
     $(".sec4").fadeOut(); 
     $(".sec5").fadeIn(); 
     showYourAns(); 
   }); 
   $(".back-btn").click(function() { 
     $(".sec5").fadeOut(); 
     $(".sec4").fadeIn(); 
   }); 
   $(".next-btn").click(function() { 
     if (index < ques.length - 1) { // Check if there is a next question 
       index++; 
       newQuestion(); 
     } else { 
       alert("You are at the last question."); // Optionally, provide a message if there are no more questions 
     } 
     // Create clickable question number links 
     const questionNumbersContainer = $(".question-numbers"); 
     for (let i = 0; i < ques.length; i++) { 
       const questionNumberLink = document.createElement('a'); 
       questionNumberLink.textContent = i + 1; 
       questionNumberLink.setAttribute('data-index', i); 
       questionNumberLink.addEventListener('click', function() { 
         const newIndex = parseInt(this.getAttribute('data-index')); 
         if (newIndex !== index) { 
           index = newIndex; 
           newQuestion(); 
         } 
       }); 
       questionNumbersContainer.append(questionNumberLink); 
     } 
  
   }); 
  
 }); 
  
 let s = 0, 
   m = "0" + 0, 
   h = "0" + 0; 
  
 function showTime() { 
   s--; 
   if (s < 0) { 
     s = 59; 
     m--; 
     if (m < 0) { 
       m = 59; 
       h--; 
       if (h < 0) { 
         h = 0; 
       } 
     } 
   } 
   const formattedTime = 
     `${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}`; 
   $(".time").text(formattedTime); 
   if (h === 0 && m === 0 && s === 0) { 
     clearInterval(times); 
     showResult(); 
   } 
 } 
  
 function startTimes() { 
   h = 2; 
   m = 30; 
   s = 0; 
   times = setInterval(function() { 
     showTime(); 
   }, 1000); 
 } 
   function newQuestion() { 
   const filteredQuestions = ques.filter(question => selectedSubjects.includes(question.subject)); 
  
   if (index >= filteredQuestions.length) { 
     alert("You have completed all questions for the selected subjects."); 
     return; 
   } 
   const que = filteredQuestions[index]; 
   showIndex(); 
   $(".question").html(que.que); 
  
  
   if (que.image) { 
     const imageElement = document.createElement('img'); 
     imageElement.src = que.image; 
     imageElement.alt = 'Question Image'; 
     $(".question").append(imageElement); 
   } 
  
   $(".quiz").html(""); 
   que.option.forEach((q, i) => { 
     const li = document.createElement('li'); 
     li.setAttribute('data-key', i); 
     li.innerHTML = q; 
     if (selectedOptions[index] === i) { 
       li.classList.add("select"); 
     } 
     $(".quiz").append(li); 
   }); 
 } 
  
  
 function checkAns(key) { 
   const filteredQuestions = ques.filter(question => selectedSubjects.includes(question.subject)); 
   const que = filteredQuestions[index]; 
  
   if (selectedOptions[index] === null) { 
     selectedOptions[index] = key; 
   } 
   answer.push(key); 
   if (que.crt == key) { 
     score++; 
     makeToast("Saved"); 
   } else { 
     makeToast("Saved"); 
   } 
   index++; 
   if (index < filteredQuestions.length) { 
     newQuestion(); 
   } else { 
     showResult(); 
     clearInterval(times); 
   } 
 } 
  
 function showIndex() { 
   const filteredQuestions = ques.filter(question => selectedSubjects.includes(question.subject)); 
   $(".index").text(1 + index + "/" + filteredQuestions.length); 
 } 
  
 // Add this inside your $(document).ready(function() {...}) block 
 $(".prev-btn").click(function() { 
   const filteredQuestions = ques.filter(question => selectedSubjects.includes(question.subject)); 
   if (index > 0) { // Check if there is a previous question 
     index--; // Decrement the index to go back to the previous question 
     newQuestion(); 
   } else { 
     alert("You are at the first question."); // Optionally, provide a message if there are no previous questions 
   } 
 }); 
  
 function showResult() { 
   $(".sec3").fadeOut(); 
   $(".sec4").fadeIn(); 
   $("#name").text(name); 
   $(".name").text(name); 
   const filteredQuestions = ques.filter(question => selectedSubjects.includes(question.subject)); 
   const scores = Math.round(score / filteredQuestions.length * 400); 
   const grt = scores < 25 ? "Nice" : scores < 50 ? "Good" : scores < 76 ? "Very Good" : "Excellent"; 
   $("#score").text("Score : " + scores + ""); 
   $("#id").text("Test Id : " + Math.ceil(Math.random() * 20000)); 
   let date = new Date(); 
   let today = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear(); 
   $("#date").text(today); 
   $(".great").text(grt); 
 } 
  
 function showYourAns() { 
   const filteredQuestions = ques.filter(question => selectedSubjects.includes(question.subject)); 
   $(".ans-list").html(""); 
   $(".sc").text(score + "/" + filteredQuestions.length); 
  
   filteredQuestions.forEach((que, i) => { 
     const li = document.createElement("li"); 
     const p = document.createElement("p"); 
     const correctAnsSpan = document.createElement("span"); 
  
     p.textContent = 1 + i + " : " + que.que; 
  
     const correctChrt = "✅"; 
     correctAnsSpan.textContent = correctChrt + " " + que.option[que.crt]; 
     correctAnsSpan.classList.add("green"); 
  
     li.appendChild(p); 
     li.appendChild(correctAnsSpan); 
  
     $(".ans-list").append(li); 
   }); 
 } 
  
 function makeToast(txt) { 
   $(".toast").text(txt); 
   $(".toast").fadeIn(); 
   setTimeout(() => $(".toast").fadeOut(), 1000); 
 }