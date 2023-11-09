const ques = [
  
  //Mathematics
  {
    subject: "Mathematics",
    que: "If x + y = 90, simplify (sinx + siny)² - 2sinxsiny",
    option: ["1", "0", "2", "-1"],
    crt: 0,
    explanation:
      "To simplify (sinx + siny)² - 2sinxsiny, we can use trigonometric identities. Start by expanding the expression: (sinx + siny)² - 2sinxsiny = sin²x + 2sinxsiny + sin²y - 2sinxsiny. Now, apply the trigonometric identity sin²A + sin²B = 1 - cos(2A - 2B): sin²x + sin²y = 1 - cos(2x - 2y). So, the expression simplifies to 1 - cos(2x - 2y).",
  },
  {
    subject: "Mathematics",
    que: "A man with an annual salary of N2000 has allowances of N600. If Income Tax is 5%, how much tax does he pay each year?",
    option: ["15", "20", "30", "25"],
    crt: 1,
    explanation:
      "To calculate the tax, first, find the total income, which is the annual salary plus allowances: Total Income = N2000 + N600 = N2600. Now, calculate the tax, which is 5% of the total income: Tax = 5/100 * N2600 = N130. Therefore, he pays N20 in tax each year.",
  },
  {
    subject: "Mathematics",
    que: "Solve the equation 3x² - 4x - 5 = 0",
    option: ["X = 1.75 or − 0.15", "X = 2.12 or − 0.79", "X = 1.5 or − 0.34", "X = 2.35 or −1.23"],
    crt: 1,
    explanation:
      "To solve the quadratic equation 3x² - 4x - 5 = 0, you can use the quadratic formula: x = (-b ± √(b² - 4ac)) / (2a). In this case, a = 3, b = -4, and c = -5. Substitute these values into the formula and simplify to find the solutions.",
  },
  {
    subject: "Mathematics",
    que:
      "The first and last term of a linear sequence (AP) are 6 and 10, respectively. If the sum of the sequence is 40, find the number of terms.",
    option: ["Nth = 3", "Nth = 4", "Nth = 5", "Nth = 6"],
    crt: 2,
    explanation:
      "In an arithmetic progression (AP), the formula for the nth term (Tn) is Tn = a + (n - 1)d, where a is the first term, n is the number of terms, and d is the common difference. Given a = 6 and the last term Tn = 10, you can find the common difference (d) by using the sum formula: Sum = n/2 * (2a + (n - 1)d) or S<sub>n</sub> = n/2(a + l) <p> 40 = n/2(6 + 10) </p> <p> 80 = (16)n <p> 80/16 = n <p> n = 5 </p> ",
  },
  {
    subject: "Mathematics",
    que:
      "The amount A to which a principal P amounts at r% compound interest for n years is given by the formula A = P(1 + (r ÷ 100)<sup>n</sup>). Find A, if P = 126, r = 4, and n = 2.",
    option: ["N132.50K", "N136.30K", "N125.40K", "N257.42K"],
    crt: 2,
    explanation:
      "To find the amount A with compound interest, use the formula A = P(1 + (r / 100)^n). Given P = 126, r = 4, and n = 2, plug in these values and calculate A.",
  },
  {
    subject: "Mathematics",
    que: "Factorize x² + 9x + 20",
    option: ["(x − 5)²", "(x + 5)(x + 4)", "(x — 5)(x + 3)", "(x + 3)²"],
    crt: 1,
    explanation:
      "To factorize the given expression, we need to find two numbers that multiply to the constant term (20) and add up to the coefficient of the middle term (9). Those numbers are 5 and 4 because 5 * 4 = 20, and 5 + 4 = 9. So, the factorization is (x + 5)(x + 4).",
  },
  {
    subject: "Mathematics",
    que:
      "If three staff of Myschool Limited agreed to share their salary arrears in the ratio of their ages, which are 18 years, 20 years, 22 years respectively. If the sum of the money collected is N120,000.00K, How much does the second staff received?",
    option: ["N36,000", "N44,000", "N40,000", "N15,000"],
    crt: 2,
    explanation:
      "Let's represent the ages of the three staff as A, B, and C. According to the problem, A = 18 years, B = 20 years, and C = 22 years. The sum of their ages is A + B + C = 18 + 20 + 22 = 60 years. Now, the second staff (B) will receive a share proportional to their age, which is 20/60 of the total amount. So, B's share = (20/60) * N120,000.00K = N40,000.00K.",
  },
  {
    subject: "Mathematics",
    que: "X and Y are two sets such that n(X) = 15, n(Y) = 12, and n{X ∩ Y} = 7. Find n{X ∪ Y}.",
    option: ["21", "225", "15", "20"],
    crt: 3,
    explanation:
      "The formula to find the cardinality (number of elements) of the union of two sets is: n(X ∪ Y) = n(X) + n(Y) - n(X ∩ Y). Substituting the given values: n(X ∪ Y) = 15 + 12 - 7 = 27 - 7 = 20. So, n(X ∪ Y) = 20.",
  },
  {
    subject: "Mathematics",
    que:
      "In a town of 6250 inhabitants, there were 62 births during 1984. Find the percentage birth rate.",
    option: ["3%", "1.0%", "2.5%", "5.40%"],
    crt: 1,
    explanation:
      "The birth rate is calculated by dividing the number of births by the total population and then multiplying by 100 to get the percentage. Birth rate = (Number of births / Total population) * 100. Birth rate = (62 / 6250) * 100 = 0.992 * 100 = 1%. So, the birth rate is 1%",
  },
  {
    subject: "Mathematics",
    que: "Simplify 1¼ ÷ (2 ÷ ¼ of 28)",
    option: ["1⅜", "2¾", "4⅜", "3⅕"],
    crt: 1,
    explanation:
      "To simplify this expression, follow the order of operations (PEMDAS/BODMAS). First, calculate the fraction: ¼ of 28 = 28/4 = 7. Then, perform the division and simplify: 1¼ ÷ (2 ÷ 7). Now, to divide by a fraction, multiply by its reciprocal: 1¼ * (7/2) = 7/4 * 7/2 = 49/8 = 6¼. So, the simplified result is 2¾.",
  },
  {
    subject: "Mathematics",
    que: "Find the x and y intercepts of the graph of 3x - z ≤ 9",
    option: ["(3, -9)", "(-3, 9)", "(-3, -9)", "(-3, 0)"],
    crt: 1,
    explanation:
      "To find the x-intercept, set z to 0 and solve for x: 3x - 0 ≤ 9. 3x ≤ 9. Divide by 3: x ≤ 3. So, the x-intercept is (3, 0). To find the y-intercept, set x to 0 and solve for z: 3 * 0 - z ≤ 9. -z ≤ 9. Multiply by -1 (reverse the inequality): z ≥ -9. So, the y-intercept is (0, -9). X and Y intercept = (3, -9)",
  },
  {
    subject: "Mathematics",
    que:
      "Simplify log<sub>10</sub>1.5 + 3 log<sub>10</sub>2 − log<sub>10</sub>0.3",
    option: ["Log<sub>10</sub>4", "Log<sub>10</sub>40", "Log<sub>10</sub>-40", "Log<sub>10</sub>4-"],
    crt: 2,
    explanation:
      "Apply the properties of logarithms: log<sub>10</sub>1.5 + 3 log<sub>10</sub>2 − log<sub>10</sub>0.3 = log<sub>10</sub>(1.5) + log<sub>10</sub>(2^3) - log<sub>10</sub>(0.3) = log<sub>10</sub>(1.5) + log<sub>10</sub>(8) - log<sub>10</sub>(0.3). Now, use the properties of addition and subtraction in logarithms: log<sub>10</sub>(1.5 * 8 / 0.3) = log<sub>10</sub>(4) = Log<sub>10</sub>40.",
  },
  {
    subject: "Government",
    que: "Rhodesia was the former name of",
    option: ["Zambia", "Namibia", "Zimbabwe", "Swaziland"],
    crt: 2
  },
    //Chemistry
  {
    subject: "Chemistry",
    que: "Given that 15.00cm³ of H<sub>2</sub>SO<sub>4</sub> was required to completely neutralize 25.00cm³ of 0.125 mol dm³ NaOH, calculate the molar concentration of the acid solution",
    option: [
      "0.925 mol dm³",
      "0.156 mol dm³",
      "0.104 mol dm³",
      "0.023 mol dm³"
    ],
    crt: 0,
    explanation: "To calculate the molar concentration (C<sub>a</sub>) of the H₂SO₄ acid solution, we can use the formula Cₐ ⋅ Vₐ /C<sub>b</sub> ⋅ V<sub>b</sub> = a/b.<br> In this balanced chemical equation for the reaction between H₂SO₄ and NaOH, the ratio of H₂SO₄ to NaOH is 1:2.<br> <br> Therefore, we can use a 1:2 ratio in our concentration calculation. <br> <br>By substituting the given values (Cₐ = molar concentration of H₂SO₄, Vₐ = volume of H₂SO₄, Cb = molar concentration of NaOH, and Vb = volume of NaOH) into the equation, we get: <br><br> (Mₐ ⋅ 15 cm³) / (0.125 mol dm⁻³ ⋅ 25 cm³) = 1/2<br>Solving for Mₐ:<br><br>Mₐ = (0.125 mol dm⁻³ ⋅ 25 cm³) / ((1/2) ⋅ 15 cm³) <br> <br>≈ 0.104 mol dm⁻³<br> Therefore, the molar concentration of the H₂SO₄ acid solution is approximately <b>0.104 mol dm⁻³."
  },
  {
    subject: "Chemistry",
    que: "What volume of 0.1 mol dm³ solution of tetraoxosulphate (VI) acid would be needed to dissolve 2.86g of sodium trioxocarbonate (IV) decahydrate crystals?",
    option: [
      "20cm³",
      "40cm³",
      "80cm³",
      "100cm³"
    ],
    crt: 3,
    explanation: 'To calculate the volume of a 0.1 mol dm⁻³ solution of tetraoxosulphate (VI) acid (H₂SO₄) needed to dissolve 2.86g of sodium trioxocarbonate (IV) decahydrate (Na₂CO₃ · 10H₂O) crystals, you can use the concept of molarity and the equation: <br><br> moles = (concentration×volume)/1000 <br>Now, calculate the moles of Na₂CO₃ · 10H₂O using the given mass (2.86g): Moles = Mass / Molar mass <br> <br> Moles = 2.86g / (2 × 23 + 12 + 3 × 16 + 10 × 18) g/mol <br> <br> moles = 2.86/286 <br> <br> = 0.01mole <br><br> volume = (mole × 1000) /concentration <br><br> volume = (0.01 × 1000)/ 0.1 <br><br><b> volume = 100cm³</b>'
  },
  {
    subject: "Chemistry",
    que: "The solution with the lowest pH value is",
    option: [
      "5 ml of 1/10 HCl",
      "10 ml of 1/10 HCl",
      "15 ml of 1/5 HCl",
      "20 ml of 1/8 HCl"
    ],
    crt: 0,
    explanation: "The solution with the smallest volume and the highest molarity will have the lowest pH value, as it will have the highest concentration of hydrogen ions."
  },
  {
    subject: "Chemistry",
    que: "In which order are the following salts sensitive to light?",
    option: [
      "AgI > AgCl > AgBr",
      "AgCl > AgI > AgBr",
      "AgBr > AgCl > AgI",
      "AgCl > AgBr > AgI"
    ],
    crt: 3,
    explanation: "This means that Silver chloride is the most sensitive to light, followed by Silver bromide, and finally Silver iodide. This order is determined by the energy of light that each salt can absorb.<br> <br> Silver chloride can absorb higher energy (shorter wavelength) light than silver bromide, and silver bromide can absorb higher energy light than silver iodide. This is because the bond strength decreases from chloride to bromide to iodide. A weaker bond requires less energy to break, so the salts with weaker bonds are less sensitive to light."
  },
  {
    subject: "Chemistry",
    que: "A metal M displaces Zinc from Zinc chloride solution. This shows that",
    option: [
      "M is more electronegative than Zinc",
      "Zinc is above hydrogen in the series.",
      "M is more electropositive than zinc.",
      "Electrons flow from zinc to M."
    ],
    crt: 2,
    explanation: "When a metal displaces another metal from its salt solution, it indicates that the displacing metal is more electropositive (reactive) than the metal it displaces."
  },
  {
    subject: "Chemistry",
    que: "Steam changes the color of anhydrous cobalt (II) chloride from",
    option: [
      "blue to pink",
      "white to red",
      "white to green",
      "blue to white"
    ],
    crt: 0,
    explanation: "Steam changes the color of anhydrous cobalt (II) chloride from <b>blue to pink</b>, indicating the formation of a new complex."
  },
  {
    subject: "Chemistry",
    que: "Water for town supply is chlorinated to make it free from",
    option: [
      "bad odour",
      "bacteria",
      "temporary hardness",
      "permanent hardness"
    ],
    crt: 1,
    explanation: "Chlorination of water is primarily done to kill harmful bacteria and pathogens, ensuring the water is safe for consumption."
  },
  {
    subject: "Chemistry",
    que: "4.0 g of sodium hydroxide in 250cm³ of solution contains",
    option: [
      "0.40 moles per dm³",
      "0.10 moles per dm³",
      "0.04 moles per dm³",
      "0.02 moles per dm³"
    ],
    crt: 0,
    explanation: "To find the molarity (moles per dm³) of a solutions <br><br> First find the number of moles, n = mass / molar mass<br><br> n = 4/23+ 16 + 1 <br><br> n = 4/40 <br><br> = 0.1mole<br><br>Concentration = (1000 × n)/volume <br><br> Concentration = (1000 × 0.1) / 250 <br><br> <b>Concentration = 0.4mol/dm³</b>"
  },
  {
    subject: "Chemistry",
    que: "A major effect of oil pollution in coastal waters is the",
    option: [
      "destruction of marine life",
      "desalination of the water",
      "increase in the acidity of the water",
      "detoxification of the water"
    ],
    crt: 0,
    explanation: "Oil pollution in coastal waters can have a devastating impact on marine life, leading to destruction and harm to ecosystems."
  },
  {
    subject: "Chemistry",
    que: "In general, an increase in temperature increases the solubility of a solute in water because",
    option: [
      "more solute molecules collide with each other",
      "most solutes dissolve with the evolution of heat",
      "more solute molecules dissociate at higher temperatures",
      "most solutes dissolve with absorption of heat."
    ],
    crt: 2,
    explanation: "Higher temperatures lead to increased kinetic energy of solute molecules, allowing more of them to dissociate or dissolve in the solvent."
  },
  {
    subject: "Chemistry",
    que: "The relatively high boiling points of alkanols are due to",
    option: [
      "ionic bonding",
      "aromatic character",
      "covalent bonding",
      "hydrogen bonding."
    ],
    crt: 3,
    explanation: "Alkanols have relatively high boiling points due to hydrogen bonding between the hydroxyl (-OH) groups of adjacent molecules."
  },
  {
    subject: "Chemistry",
    que: "Which of the following statements is correct?",
    option: [
      "The average kinetic energy of a gas is directly proportional to its temperature",
      "At constant temperature, the volume of a gas increases as the pressure increases",
      "The pressure of a gas is inversely proportional to its volume",
      "The temperature of gas is directly proportional to its volume"
    ],
    crt: 0,
    explanation: "The correct statement is: 'The average kinetic energy of a gas is directly proportional to its temperature.' This is described by the kinetic theory of gases, which states that the kinetic energy of gas molecules is directly proportional to the temperature of the gas. When temperature increases, the kinetic energy of the gas molecules also increases."
  },
  {
    subject: "Chemistry",
    que: "Which are the correct IUPAC names for H–CO2 CH3 and CH≡CH",
    option: [
      "Methyl methanoate and ethene",
      "Methanoic acid and ethyne",
      "Ethyl methanoate and ethyne",
      "Methyl methanoate and ethyne"
    ],
    crt: 3,
    explanation: "The correct IUPAC names are 'Methyl methanoate and ethyne.' Methyl methanoate (H–CO2–CH3) is formed by the esterification of methanoic acid, and ethyne (CH≡CH) is a common name for the compound. Methanoic acid is not the correct name for CH3CO2H."
  },
  {
    subject: "Chemistry",
    que: "A solution X on mixing with AgNO3 solution, gives a white precipitate soluble in NH3(aq). A solution Y, when added to X, also gives a white precipitate which is soluble on boiling. Solution Y contains",
    option: ["Ag<sup>+</sup> ion", "Pb<sup>2+</sup> ion", "Pb<sup>4+</sup> ion", "Zn<sup>2+</sup> ion"],
    crt: 1,
    explanation: "Solution Y contains the 'Pb<sup>2+</sup> ion.' The white precipitate formed when adding AgNO3 to solution X indicates the presence of the Ag<sup>+</sup> ion. When solution Y is added to X and a white precipitate forms but is soluble on boiling, it suggests the presence of the Pb<sup>2+</sup> ion, as lead chloride is only sparingly soluble in water but dissolves in hot water."
  },
  {
    subject: "Chemistry",
    que: "Methane is a member of the homologous series called",
    option: ["alkenes", "alcohols", "esters", "alkanes"],
    crt: 3,
    explanation: "Methane is a member of the homologous series called 'alkanes.' Alkanes are a group of organic compounds characterized by single covalent bonds between carbon atoms and are also known as 'saturated hydrocarbons.' Methane (CH4) is the simplest alkane and consists of a single carbon atom bonded to four hydrogen atoms."
  },
  {
    subject: "Chemistry",
    que: "Which of the following bonds exists in crystalline ammonium chloride (NH<sub>4</sub>CL)?",
    option: ["ionic covalent", "ionic and co-ordinate", "ionic, covalent and co-ordinate", "covalent, co-ordinate and metallic"],
    crt: 2,
    explanation: "The bonds in crystalline ammonium chloride (NH<sub>4</sub>Cl) are of both 'ionic and co-ordinate' nature. In the crystal structure of NH<sub>4</sub>Cl, there are ionic bonds between ammonium ions (NH<sub>4</sub><sup>+</sup>) and chloride ions (Cl<sup>-</sup>). Additionally, there are covalent or coordinate covalent bonds within the ammonium ion, where a lone pair of electrons on nitrogen is donated to the hydrogen atoms."
  },
  {
    subject: "Chemistry",
    que: "12.0g of a mixture of potassium carbonate and potassium chloride were dissolved in a 250cm3 standard flask. 25cm3 of this solution required 40.00cm3 of 0.1M HCl neutralization. What is the percentage by weight of K<sub>2</sub>CO<sub>3</sub>in the mixture (K = 39, O = 16, C = 12)",
    option: ["60", "72", "82", "92"],
    crt: 3,
    explanation: "First, let's calculate the number of moles of HCl required for neutralization.<br><br> We know that the concentration of HCl is 0.01M, and the volume used is 40.00 cm³. <br><br>To find the moles, <br><br>we can use the formula: <strong>Moles = Concentration × Volume</strong> <br> So, the moles of HCl are: moles = 0.01 M × 40.00 cm³<br> = 0.01 × 0.040 dm³ <br> = 0.0004 moles <br> Now, let's move on to the chemical reactions involving potassium carbonate (K₂CO₃) and potassium chloride (KCl) with HCl. <br> The balanced chemical equation for the reaction between K₂CO₃ and HCl is: <br><br>**K₂CO₃ + 2HCl → 2KCl + H₂O + CO₂ (1)** <br>KCl does not react with HCl. From equation (1), we can see that 1 mole of K₂CO₃ reacts with 2 moles of HCl. <br> Therefore, the moles of K₂CO₃ in the 25 cm³ solution are:<br><br>**Moles of K₂CO₃ = 0.0004 moles (HCl) ÷ 2 = 0.0002 moles** <br><br>Now, let's determine the number of moles of K₂CO₃ in the 250 cm³ solution. Since the concentration is uniform, <br>we can set up a proportion: **0.0002 moles / 25 cm³ = x moles / 250 cm³<br>** Solving for x, we find: **x = 0.0002 × (250 / 25) <br>= 0.002 moles** <br>Moving on, we can calculate the mass of K₂CO₃ in the 3.0 g mixture. <br><br>The molar mass of K₂CO₃ is determined as: **Molar mass of K₂CO₃ = 2(39) + 12 + 3(16) = 138 g/mol** <br>So, the mass of K₂CO₃ in the mixture is: *Mass = Moles × Molar Mass** **Mass = 0.002 moles × 138 g/mol = 0.276 g** <br><br>Finally, we can find the percentage by weight of K₂CO₃ in the mixture: <br>**Percentage K₂CO₃ = (0.276 g / 3.0 g) × 100 ≈ 92%**<br><br>Therefore, the percentage by weight of K₂CO₃ in the mixture is approximately <b>92%</b>."
  },
  {
    subject: "Chemistry",
    que: "When at equilibrium, which of the reactions below will shift to the right if the pressure is increased and the temperature is kept constant?",
    option: [
    "2SO<sub>3</sub>(g) ⇌ 2SO<sub>2</sub>(g) + O<sub>2</sub>(g)",
    "2CO<sub>2</sub>(g) ⇌ 2CO<sub>2</sub>(g) + O<sub>2</sub>(g)",
    "2H<sub>2</sub>(g) + O<sub>2</sub>(g) ⇌ 2H<sub>2</sub>O(g)",
    "2NO<sub>2</sub>(g) ⇌ N<sub>2</sub>(g) + O<sub>2</sub>(g)"
  ],
    crt: 2,
    explanation: "According to Le Chatelier’s principle, if pressure is increased, then the equilibrium shifts to the side with the fewer number of moles of gas. <br> In the reaction of 2H<sub>2</sub>(g) + O<sub>2</sub>(g) ⇌ 2H<sub>2</sub>O(g ), there is a total of three moles on the left hand side and two moles on the right hand side, hence an increase in pressure will favor the formation of products(right hand side)",

},
  {
    subject: "Chemistry",
    que: "2CO(g) + O<sub>2</sub>(g) → 2CO<sub>2</sub>(g) Given that ΔH [CO] is -110.4 kJmol<sup>-1</sup> and ΔH [CO<sub>2</sub>] is -393.0 kJmol<sup>-1</sup>, the energy change for the reaction above is",
    option: [
    "-503.7 kJ",
    "-565.2 kJ",
    "+565.2 kJ",
    "+503.7 kJ"
  ],
    crt: 1,
    explanation: "To calculate the energy change (ΔH) for the given reaction, you can use the Hess's law of heat summation. The reaction you've provided is: <br><br>2CO(g) + O₂(g) → 2CO₂(g) <br><br>First, calculate the energy change for the formation of two moles of CO₂ from their respective elements:<br><br>ΔH for the formation of 2 moles of CO₂ = 2 * ΔH[CO₂] = 2 * (-393.0 kJ/mol) = -786.0 kJ <br><br>Now, calculate the energy change for the formation of two moles of CO from their respective elements: <br><br>ΔH for the formation of 2 moles of CO = 2 * ΔH[CO] = 2 * (-110.4 kJ/mol) = -220.8 kJ <br><br>Now, apply Hess's law:<br><br>ΔH for the reaction = ΔH for the products - ΔH for the reactants <br><br>ΔH for the reaction = (-786.0 kJ) - (-220.8 kJ) = -786.0 kJ + 220.8 kJ = -565.2 kJ <br><br>So, the energy change for the given reaction is -565.2 kJ."
},
  {
    subject: "Chemistry",
    que: "Which of these properties gives a solid its definite shape?",
    option: [
    "Strong intermolecular attraction",
    "High melting point",
    "High boiling point",
    "Weak intermolecular attraction"
  ],
    crt: 0,
    explanation: "A solid's definite shape is primarily due to the strong intermolecular forces that hold its particles together in a fixed arrangement."
},
  {
    subject: "Chemistry",
    que: "When a crystal was added to the clear solution of its salt, the crystal did not dissolve and the solution remained unchanged. This showed that the solution was",
    option: [
    "Supersaturated",
    "Concentrated",
    "Unsaturated",
    "Saturated"
  ],
    crt: 0,
    explanation: "When a crystal doesn't dissolve in a clear solution, it indicates that the solution is supersaturated, meaning it contains more solute than it can normally hold at that temperature."
},
  {
    subject: "Chemistry",
    que: "If the electron configuration of an element is 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>5</sup>, how many unpaired electrons are there?",
    option: [
    "2",
    "5",
    "1",
    "4"
  ],
    crt: 2,
    explanation: "The electron configuration 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>5</sup> indicates that there is 1 unpaired electron. Unpaired electrons are those that exist in different orbitals with parallel spins, and in this case, one of the 2p orbitals has an unpaired electron."
},
  {
    subject: "Chemistry",
    que: "The substance that is used in the steel industry for the removal of carbon, sulphur and phosphorus impurities from pig iron is",
    option: [
    "Oxygen",
    "Chlorine",
    "Nitrogen",
    "Hydrogen"
  ],
    crt: 0,
    explanation: "Oxygen is used in the steel industry for the removal of impurities because it reacts with carbon, sulfur, and phosphorus to form respective oxides that can be easily removed."
},
  {
    subject: "Chemistry",
    que: "Hydrogen sulphide gas can act as",
    option: [
    "An oxidizing agent",
    "A dehydrating agent",
    "A reducing agent",
    "A precipitating agent"
  ],
    crt: 2,
    explanation: "Hydrogen sulfide gas (H₂S) can act as both a weak acid and a reducing agent in various chemical reactions. It can donate a proton (H⁺) in an aqueous solution, making it an acidic compound. Additionally, H₂S can also undergo redox reactions, where it can reduce other substances by donating electrons."
},
  {
    subject: "Chemistry",
    que: "Which of the following is used as a rocket fuel?",
    option: [
    "HNO<sub>3</sub>",
    "CH<sub>3</sub>COOH",
    "H<sub>2</sub>SO<sub>4</sub>",
    "HCl"
  ],
    crt: 0,
    explanation: "HNO<sub>3</sub> (Nitric acid) is commonly used in rocket fuels as an oxidizer.Red fuming nitric acid (RFNA) is a storable oxidizer used as a rocket propellant. It consists of 84% nitric acid ( HNO<sub>3</sub>), 13% dinitrogen tetroxide ( N<sub>2</sub>O<sub>4</sub>) and 1–2% water."
},
  {
    subject: "Chemistry",
    que: "The bleaching action of chlorine is effective due to the presence of",
    option: [
    "Hydrogen chloride",
    "Water",
    "Air",
    "Oxygen"
  ],
    crt: 3,
    explanation: "The bleaching action of chlorine is effective due to the presence of oxygen. Chlorine gas readily reacts with water to form hypochlorous and hydrochloric acids, which release nascent oxygen responsible for bleaching."
},
  {
    subject: "Chemistry",
    que: "Mineral acids are usually added to commercial hydrogen peroxide to",
    option: [
    "Oxidize it",
    "Decompose it",
    "Minimize its decomposition",
    "Reduce it to water and oxygen"
  ],
    crt: 2,
    explanation: "Mineral acids are added to commercial hydrogen peroxide to minimize its decomposition. They act as stabilizers to extend the shelf life of hydrogen peroxide."
},
  {
    subject: "Chemistry",
    que: "Aluminium containers are frequently used to transport trioxonitrate (v) acid because aluminium",
    option: [
    "Has a low density",
    "Does not react with the acid",
    "Does not corrode",
    "Has a silvery - white appearance"
  ],
    crt: 2,
    explanation: "Aluminium containers are used because aluminium does not corrode when in contact with trioxonitrate (V) acid. It forms a protective oxide layer that prevents further reaction."
},
  {
    subject: "Chemistry",
    que: "Ethyne is passed through a hot tube containing organo-nickel catalyst to produce",
    option: [
    "Isoprene",
    "Polythene",
    "Ethanol",
    "Benzene"
  ],
    crt: 3,
    explanation: "Ethyne passed through a hot tube with an organo-nickel catalyst produces benzene. The process is known as benzene synthesis."
},
  {
    subject: "Chemistry",
    que: "The process of converting starch to ethanol is",
    option: [
    "Cracking",
    "Distillation",
    "Fermentation",
    "Oxidation"
  ],
    crt: 2,
    explanation: "The process of converting starch to ethanol is fermentation. Microorganisms like yeast are used to ferment the sugars in starch to produce ethanol."
},
  {
    subject: "Chemistry",
    que: "An endothermic reaction is one during which heat is",
    option: [
    "Liberated -ΔH",
    "Liberated +ΔH",
    "Absorbed -ΔH",
    "Absorbed +ΔH"
  ],
    crt: 3,
    explanation: "An endothermic reaction is one during which heat is absorbed, indicated by a positive ΔH (change in enthalpy) value."
},
  {
    subject: "Chemistry",
    que: "The constituent common to duralumin and alnico is",
    option: ["Co", "Mn", "Al", "Mg"],
    crt: 3,
    explanation: "The common constituent in both duralumin and alnico is <sub>Al</sub> (Aluminum).",
  },
  {
    subject: "Chemistry",
    que: "The shape of the S-orbital is",
    option: ["Elliptical", "Spiral", "Circular", "Spherical"],
    crt: 3,
    explanation: "The shape of the <sub>S</sub>-orbital is <sub>Spherical</sub>.",
  },
  {
    subject: "Chemistry",
    que: "The tincture of iodine means iodine dissolved in",
    option: ["Ethanol", "Bromine chloride", "Chlorine water", "Water"],
    crt: 0,
    explanation: "The tincture of iodine means iodine dissolved in <sub>ethanol</sub>.",
  },
  {
    subject: "Chemistry",
    que: "Temporary hard water is formed when rainwater containing dissolved carbon(IV) oxide flows over deposits of",
    option: ["CaCO<sub>3</sub>", "Na<sub>2</sub>CO<sub>3</sub>", "Na<sub>2</sub>SO<sub>4</sub>", "CaSO<sub>4</sub>"],
    crt: 0,
    explanation: "Temporary hard water is formed when rainwater containing dissolved carbon(IV) oxide flows over deposits of <sub>CaCO<sub>3</sub></sub> (Calcium Carbonate).",
  },
  {
    subject: "Chemistry",
    que: "The process that occurs when two equivalent forms of a compound are in equilibrium is",
    option: ["Isotopy", "Resonance", "Isomerism", "Reforming"],
    crt: 1,
    explanation: "The process that occurs when two equivalent forms of a compound are in equilibrium is called <sub>Resonance</sub>.",
  },
  {
    subject: "Chemistry",
    que: "The acid anhydride that will produce weak acid in water is",
    option: ["SO<sub>3</sub>", "NO<sub>2</sub>", "SO<sub>2</sub>", "CO<sub>2</sub>"],
    crt: 3,
    explanation: "The acid anhydride that will produce a weak acid in water is <sub>CO<sub>2</sub></sub> (Carbon Dioxide).H<sub>2</sub>CO<sub>3</sub>is an example of a weak acid while H<sub>2</sub>SO<sub>4</sub> and HNO<sub>3</sub> are examples of a strong acid.",
  },
  {
    subject: "Chemistry",
    que: "In the laboratory preparation of ethyl ethanoate, the water present in the mixture is removed using a solution of",
    option: ["Anhydrous CaCl<sub>4</sub>", "Concentrated NaCO<sub>4</sub>", "Dilute NaOH", "Concentrated H<sub>2</sub>SO<sub>4</sub>"],
    crt: 3,
    explanation: "In the laboratory preparation of ethyl ethanoate, the water present in the mixture is removed using conc. H<sub>2</sub>SO<sub>4</sub>. This is because concentrated sulfuric acid (H<sub>2</sub>SO<sub>4</sub>) is a very effective dehydrating agent, which means it can readily absorb water and hence, is used to remove water from the reaction mixture. This helps to shift the position of the equilibrium towards the products, leading to a greater yield of ethyl ethanoate.",
  },
  {
    subject: "Chemistry",
    que: "The constituents of air necessary in the rusting process are",
    option: ["O<sub>2</sub> and H<sub>2</sub>O", "Ar and CO<sub>2</sub>", "CO<sub>2</sub> and H<sub>2</sub>O", "O<sub>2</sub> and CO<sub>2</sub>"],
    crt: 0,
    explanation: "The constituents of air necessary in the rusting process are <sub>O<sub>2</sub></sub> (Oxygen) and <sub>H<sub>2</sub>O</sub></sub> (Water).",
  },
  {
    subject: "Chemistry",
    que: "A given mass of gas occupies 2dm<sup>3</sup> at 300K. At what temperature will its volume be doubled, keeping the pressure constant?",
    option: ["400K", "480K", "550K", "600K"],
    crt: 3,
    explanation: "To double the volume of a gas while keeping the pressure constant, the temperature needs to be doubled. So, the correct answer is <sub>600K</sub>.",
  },

  {
    subject: "Mathematics",
    que: "A ladder 9m long leans against a vertical wall so that its upper end is 6.5m from the ground. How far is the foot of the ladder from the wall? Correct to 2 decimal places",
    option: ["8.5m", "7.8m", "5.6m", "6.2m"],
    crt: 3,
    explanation: "this is good"
      },
  {
    subject: "Physics",
    que: "Two cars moving in the same direction have speeds of 100 km<sup>-1</sup> and 130 km<sup>-1</sup>. What is the velocity of the faster car as measured by an observer in the slower car?",
    option: [
      "30 km<sup>-1</sup>",
      "130 km<sup>-1</sup>",
      "200 km<sup>-1</sup>",
      "230 km<sup>-1</sup>"
    ],
    crt: 3,
    explanation: "The velocity of the faster car relative to the slower car is the difference between their speeds. So, 130 km<sup>-1</sup> - 100 km<sup>-1</sup> = 30 km<sup>-1</sup> (in the same direction).",
  },
  {
    subject: "Physics",
    que: "A stone and a feather are dropped from the same height above the earth's surface. Ignoring air resistance, which of the following is correct?",
    option: [
      "The feather will be blown away by the wind while the stone will drop steadily",
      "The stone and the feather will both reach the ground at the same time",
      "The feather will reach the ground first",
      "The stone will reach the ground first"
    ],
    crt: 1,
    explanation: "In the absence of air resistance, both the stone and the feather will fall at the same rate and reach the ground at the same time due to the acceleration due to gravity.",
  },
  {
    subject: "Physics",
    que: "A car moves with an initial velocity of 25 m<sup>s-1</sup> and reaches a velocity of 45 m<sup>s-1</sup> in 10 seconds. What is the acceleration of the car?",
    option: [
      "2 m<sup>s-2</sup>",
      "5 m<sup>s-2</sup>",
      "20 m<sup>s-2</sup>",
      "25 m<sup>s-2</sup>"
    ],
    crt: 0,
    explanation: "Acceleration is the change in velocity over time. (45 m<sup>s-1</sup> - 25 m<sup>s-1</sup>) / 10 s = 2 m<sup>s-2</sup>.",
  },
  {
    subject: "Physics",
    que: "The surfaces of conveyor belts are made rough so as to",
    option: [
      "Protect them while carrying loads",
      "Prevent the loads from slipping",
      "Enable them to carry more load",
      "Make them stronger"
    ],
    crt: 1,
    explanation: "Rough surfaces on conveyor belts help prevent loads from slipping, ensuring better grip and stability.",
  },
  {
    subject: "Physics",
    que: "A machine with a velocity ratio of 6 requires an effort of 400 N to raise a load of 800 N through 1 meter. Find the efficiency of the machine.",
    option: [
      "55.6%",
      "50.0%",
      "33.3%",
      "22.2%"
    ],
    crt: 0,
    explanation: "Efficiency = (Useful work output / Total work input) * 100%. Here, efficiency = (800 N * 1 m / 400 N * 1 m) * 100% = 200% = 55.6%.",
  },
  {
    subject: "Physics",
    que: "If a wire 30 cm long is extended to 30.5 cm by a force of 300 N. Find the strain energy of the wire.",
    option: [
      "0.75 J",
      "7.50 J",
      "75.00 J",
      "750.00 J"
    ],
    crt: 0,
    explanation: "Strain energy = (Force * Extension) / 2 = (300 N * (30.5 cm - 30 cm)) / 2 = 0.75 J.",
  },
  {
    subject: "Physics",
    que: "In a hydraulic press, the pump piston exerts a pressure of 100 Pa on the liquid. What force is exerted on the second piston of cross-sectional area 3 m<sup>2</sup>?",
    option: [
      "300 N",
      "200 N",
      "150 N",
      "100 N"
    ],
    crt: 0,
    explanation: "Pressure = Force / Area. So, Force = Pressure * Area = 100 Pa * 3 m<sup>2</sup> = 300 N.",
  },
  {
    subject: "Physics",
    que: "The accurate measurement of the relative density of a substance in its powdered form is done with a beam balance and",
    option: [
      "A density bottle",
      "An Eureka can",
      "A pipette",
      "A burette"
    ],
    crt: 0,
    explanation: "The accurate measurement of the relative density of a substance in its powdered form is typically done using a density bottle.",
  },
  {
    subject: "Physics",
    que: "A hydrometer is an instrument used in measuring",
    option: [
      "Vapor pressure of a fluid",
      "Density of a liquid",
      "Relative humidity of a liquid",
      "Relative density of a liquid"
    ],
    crt: 3,
    explanation: "A hydrometer is used to measure the relative density (specific gravity) of a liquid.",
  },
  {
    subject: "Physics",
    que: "One special advantage of alcohol over mercury as a thermometric liquid is its",
    option: [
      "Low density",
      "Low freezing point",
      "High specific heat",
      "Low boiling point"
    ],
    crt: 0,
    explanation: "One special advantage of alcohol as a thermometric liquid is its low density, making it suitable for a wide range of temperatures.",
  },
  {
    subject: "Physics",
    que: "Which of the following is a derived unit?",
    option: [
      "Kilogram",
      "Metre",
      "Newton",
      "Second"
    ],
    crt: 2,
    explanation: "A derived unit is one that is defined in terms of base units. The meter (metre) is a derived unit because it is defined as the distance traveled by light in a vacuum during a specific fraction of a second."
  },
  {
    subject: "Physics",
    que: "If a bar magnet is divided into two pieces, which of the following statement is correct?",
    option: [
      "Two new magnets are created",
      "The magnetic field of each separate piece becomes stronger",
      "The electric field is created",
      "The bar magnet is demagnetized"
    ],
    crt: 3,
    explanation: "When a bar magnet is divided into two pieces, each piece becomes a new magnet with a north and a south pole. No electric field is created, and the original magnetic properties are preserved."
  },
  {
    subject: "Physics",
    que: "Consider the wave equation y = 5mm sin [1cmx - 60st]. The wave number is?",
    option: [
      "0.1 cm",
      "10cm",
      "1.0cm",
      "2cm"
    ],
    crt: 1,
    explanation: "The wave number (k) is given by the coefficient of x in the wave equation. In this case, k = 1 cm<sup>-1</sup>."
  },
  {
    subject: "Physics",
    que: "An object 40 cm high is 30cm from the pinhole camera. If the height of the image formed is 20 cm. What is the distance of the image from the pin height?",
    option: [
      "15 cm",
      "70 cm",
      "40 cm",
      "50 cm"
    ],
    crt: 0,
    explanation: "This is a problem related to the pinhole camera equation. Using the equation: (object height / object distance) = (image height / image distance), you can calculate the image distance to be 15 cm."
  },
  {
    subject: "Physics",
    que: "A bar magnet is placed near and lying along the axis of a solenoid connected to a galvanometer. The pointer of the galvanometer shows no deflection when?",
    option: [
      "The magnet is moved towards the stationary solenoid",
      "There is no relative motion",
      "The magnet is moved away from the stationary solenoid",
      "The solenoid is moved away from the stationary magnet"
    ],
    crt: 1,
    explanation: "No deflection of the galvanometer pointer occurs when there is no relative motion between the magnet and the solenoid. If they are stationary relative to each other, no induced current is generated."
  },
  {
    subject: "Physics",
    que: "Why do tires have treads?",
    option: [
      "Increase weight of tires",
      "Increase friction",
      "Increase its longevity",
      "Look good"
    ],
    crt: 2,
    explanation: "Tire treads are designed to increase friction between the tires and the road. This improves traction, especially in wet or slippery conditions, and enhances the longevity of the tires."
  },
  {
    subject: "Physics",
    que: "A car starts from rest and covers a distance of 40 m in 10 s. Calculate the magnitude of its acceleration.",
    option: [
      "3.20 ms<sup>-2</sup>",
      "0.25 ms<sup>-2</sup>",
      "0.80 ms<sup>-2</sup>",
      "4.00 ms<sup>-2</sup>"
    ],
    crt: 3,
    explanation: "Acceleration is calculated as the change in velocity divided by the time taken. In this case, the acceleration is 4.00 m/s<sup>-2</sup>."
  },
  {
    subject: "Physics",
    que: "The relationship between the coefficient of linear expansion (α) and volumetric expansion (β) is?",
    option: [
      "α = β",
      "α = 3β",
      "3α = β",
      "α = 1/3β"
    ],
    crt: 0,
    explanation: "The relationship between the coefficient of linear expansion (α) and volumetric expansion (β) is α = 3β. They are related by a factor of 3."
  },
  {
    subject: "Physics",
    que: "Which of the following is not a consequence of hydrogen bubbles covering the copper plate of a primary cell?",
    option: [
      "Formation of hydrogen bubbles on the electrode",
      "Increase in the resistance of the cell",
      "Local action",
      "Polarization"
    ],
    crt: 1,
    explanation: "The increase in the resistance of the cell is not a consequence of hydrogen bubbles covering the copper plate. The other options are related to the effects of hydrogen bubbles."
  },
  {
    subject: "Physics",
    que: "A cell whose internal resistance is 0.55 delivers a current of 4 A to an external resistor. What is the lost voltage of the cell?",
    option: [
      "4.00 V",
      "2.20 V",
      "0.15 V",
      "8.00 V"
    ],
    crt: 1,
    explanation: "The lost voltage of the cell is calculated as V<sub>lost</sub> = I x R<sub>internal</sub>, where I is the current (4 A) and R<sub>internal</sub> is the internal resistance (0.55 Ω). So, V<sub>lost</sub> = 4 A x 0.55 Ω = 2.20 V."
  },
  {
    subject: "Physics",
    que: "The vapour pressure___?",
    option: [
      "Increases non-linearly with measuring temperature",
      "Increases linearly with increasing temperature",
      "Decreases linearly with increasing temperature",
      "Decreases non-linearly with measuring temperature"
    ],
    crt: 0,
    explanation: "Vapour pressure increases non-linearly with increasing temperature, often following the Clausius–Clapeyron equation."
  },
  {
    subject: "Physics",
    que: "The potential energy in an elastic string of force constant k, which has an extension X is?",
    option: [
      "kX",
      "KX",
      "½KX",
      "½K"
    ],
    crt: 2,
    explanation: "The potential energy in an elastic string is given by ½KX², where K is the force constant and X is the extension."
  },
  {
    subject: "Physics",
    que: "A reservoir is filled with liquid of density 2000 kg/m³. Calculate the depth at which the pressure in the liquid will be equal to 9100 N/m (g = 10 m/s²)",
    option: [
      "0.262 m",
      "0.664 m",
      "0.819 m",
      "0.455 m"
    ],
    crt: 0,
    explanation: "The pressure at a depth in a liquid is given by the formula P = ρgh, where ρ is the density, g is the acceleration due to gravity, and h is the depth. Solving for h, we get h = P / (ρg) = 9100 N/m / (2000 kg/m³ * 10 m/s²) = 0.262 m."
  },
  {
    subject: "Physics",
    que: "Water is not a good thermometric liquid because it___?",
    option: [
      "Expands unevenly between 0 ºC and 4 ºC",
      "Maintains fixed density",
      "Has a low freezing point",
      "Wets glass"
    ],
    crt: 0,
    explanation: "Water is not a good thermometric liquid because it expands unevenly between 0 ºC and 4 ºC. Most substances contract on cooling, but water expands when it is cooled between these temperatures."
  },
  {
    subject: "Physics",
    que: "Which of these is a second-class lever?",
    option: [
      "Sugar tongs",
      "Claw hammer",
      "Plier",
      "Wheelbarrow"
    ],
    crt: 3,
    explanation: "A wheelbarrow is an example of a second-class lever, where the load is situated between the effort (the person pushing the wheelbarrow) and the fulcrum (the wheel)."
  },
  {
    subject: "Physics",
    que: "In the formation of sea breeze, the wind blows from?",
    option: [
      "Sky to land",
      "Sea to sky",
      "Land to sea",
      "Sea to land"
    ],
    crt: 2,
    explanation: "In the formation of sea breeze, the wind blows from the land to the sea. During the day, the land heats up more quickly, creating a low-pressure area, while the sea remains relatively cool, creating a high-pressure area."
  },
  {
    subject: "Physics",
    que: "Which component of the fibre-optic connector has a provision of entry for the fibre along with the fixation to connector housing?",
    option: [
      "Couplers",
      "Cable",
      "Ferrule",
      "Connector housing"
    ],
    crt: 2,
    explanation: "The component of the fiber-optic connector that has a provision of entry for the fiber along with the fixation to connector housing is the ferrule."
  },
  {
    subject: "Physics",
    que: "The most suitable instrument to view the sun is ___",
    option: [
      "Helioscope",
      "Telescope",
      "Stroboscope",
      "Sun meter"
    ],
    crt: 0,
    explanation: "A helioscope is the most suitable instrument for safely viewing the sun. It is designed to observe the sun without risking eye damage."
  },
  {
    subject: "Physics",
    que: "The eclipse of the moon occurs when?",
    option: [
      "The moon reflects the rays from the sun to the earth",
      "The moon comes exactly between the earth and the sun",
      "The earth comes exactly between the moon and the sun",
      "The sun comes exactly between the earth and the moon"
    ],
    crt: 2,
    explanation: "The eclipse of the moon occurs when the earth comes exactly between the moon and the sun, casting a shadow on the moon."
  },
  {
    subject: "Physics",
    que: "The gravitational pull on the moon is ___ that of the earth. If a body weighs 6.0 N on the moon, what will be its weight on the earth?",
    option: [
      "6.0 N",
      "5.0 N",
      "12.0 N",
      "36.0 N"
    ],
    crt: 3,
    explanation: "The gravitational pull on the moon is about 1/6th (1/6) that of the earth. If a body weighs 6.0 N on the moon, it will weigh 6.0 N * 6 = 36.0 N on the earth."
  },
  {
    subject: "Physics",
    que: "The amount of energy required to change a kilogram of ice block into the water without a change in temperature is?",
    option: [
      "Specific latent heat of fusion of ice",
      "Specific heat capacity of ice",
      "Heat capacity of ice",
      "Specific heat of vaporization of ice"
    ],
    crt: 0,
    explanation: "The amount of energy required to change a kilogram of ice block into water without a change in temperature is the specific latent heat of fusion of ice."
  },
  {
    subject: "Physics",
    que: "Which expression gives the magnetic flux?",
    option: [
      "qVB sin",
      "BIL",
      "BA cos∅",
      "-N"
    ],
    crt: 2,
    explanation: "The expression for magnetic flux is Φ = B * A * cos(θ), where B is the magnetic field, A is the area, and θ is the angle between the magnetic field and the normal to the area."
  },
  {
    subject: "Physics",
    que: "The graph of pressure (P) against the reciprocal of the volume (1/V) in Boyle's law is a___?",
    option: [
      "Hyperbola",
      "Parabola",
      "Curve",
      "Straight line"
    ],
    crt: 3,
    explanation: "The graph of pressure (P) against the reciprocal of the volume (1/V) in Boyle's law is a straight line, indicating an inverse relationship between pressure and volume."
  },
  {
    subject: "Physics",
    que: "What is the quantity of heat required to convert 20 g of ice at 0 ºC to water at the same temperature? (Specific latent heat of ice = 336 J/g)",
    option: [
      "7.06 x 10<sup>3</sup> J",
      "5.38 x 10<sup>3</sup> J",
      "6.72 x 10<sup>3</sup> J",
      "1.35 x 10<sup>3</sup> J"
    ],
    crt: 0,
    explanation: "The quantity of heat required to convert ice at 0 ºC to water at the same temperature is calculated using the specific latent heat of ice, which is 336 J/g. So, 20 g * 336 J/g = 7.06 x 10^3 J."
  },
  {
    subject: "Physics",
    que: "A train of mass 1600 kg attains a speed of 25 m/s in 20 seconds. The power developed in the engine is?",
    option: [
      "2.5 kW",
      "80 kW",
      "25 kW",
      "50 kW"
    ],
    crt: 1,
    explanation: "The power developed in the engine can be calculated using the formula P = (1/2)mv²/t, where m is the mass, v is the velocity, and t is the time. So, P = (1/2) * 1600 kg * (25 m/s)² / 20 s = 80 kW."
  },
  {
    subject: "Physics",
    que: "The main factor which affects the speed of sound wave is the?",
    option: [
      "Properties of the medium",
      "Amplitude of the sound wave",
      "Intensity of the sound wave",
      "Loudness of the sound wave"
    ],
    crt: 0,
    explanation: "The main factor that affects the speed of a sound wave is the properties of the medium through which it travels. The speed of sound varies in different materials."
  },
  {
    subject: "Physics",
    que: "A semiconductor is formed by?",
    option: [
      "Co-ordinate bonds",
      "Electrovalent bonds",
      "A substance free of bonds",
      "Covalent bonds"
    ],
    crt: 3,
    explanation: "A semiconductor is typically formed by covalent bonds between atoms in the crystal lattice structure."
  },
  {
    subject: "Physics",
    que: "Which of the following is a scalar quantity?",
    option: [
      "Weight",
      "Momentum",
      "Potential energy",
      "Displacement"
    ],
    crt: 0,
    explanation: "Weight is a scalar quantity because it only has magnitude and no direction. The other options are vector quantities."
  },
  {
    subject: "Physics",
    que: "The mercury column in the barometer at natural atmospheric pressure has a height of?",
    option: [
      "0.76 cm at sea level",
      "760 cm at sea level",
      "7.6 cm at sea level",
      "76 cm at sea level"
    ],
    crt: 0,
    explanation: "The mercury column in a barometer at natural atmospheric pressure typically has a height of about 0.76 cm at sea level."
  },
  {
  subject: "Physics",
  que: "A man will exert the greatest pressure when he?",
  option: [
    "lies flat on his back",
    "lies on his belly",
    "stands on both feet",
    "stands on the toes of one foot"
  ],
  crt: 3,
  explanation: "A man will exert the greatest pressure when he stands on the toes of one foot. This is because the pressure is the force applied per unit area, and standing on the toes of one foot concentrates the force on a smaller area, resulting in greater pressure."
},

// You can access the questions using physicsQuestions[0], physicsQuestions[1], and so on.


// Biology
  {
    subject: "Biology",
    que: "Sources of air pollutants are?",
    option: [
      "industrial chimneys, burning fossil oils and river dams",
      "sulphur dioxide, acid rain and pesticides",
      "sulphur dioxide, vehicle exhausts, and aerosols",
      "sewage, smoke and old vehicles"
    ],
    crt: 2,
    explanation: "Sources of air pollutants include sulphur dioxide, vehicle exhausts, and aerosols."
  },
  {
    subject: "Biology",
    que: "The body of a snail is divided into head?",
    option: [
      "thorax and abdomen",
      "visceral mass and abdomen",
      "thorax and foot",
      "visceral mass and foot"
    ],
    crt: 3,
    explanation: "The body of a snail is divided into the visceral mass and foot."
  },
  {
    subject: "Biology",
    que: "An adaptation for defense in animals is?",
    option: [
      "croaking of a male toad",
      "basking in lizard",
      "spines in porcupine fish",
      "huddling together of penguins"
    ],
    crt: 2,
    explanation: "An adaptation for defense in animals includes having spines in porcupine fish."
  },
  {
    subject: "Biology",
    que: "The movement of Euglena towards the source of light is a?",
    option: [
      "tropic movement",
      "tactic movement",
      "nastic movement",
      "kinetic movement"
    ],
    crt: 1,
    explanation: "The movement of Euglena towards the source of light is a tactic movement."
  },
  {
    subject: "Biology",
    que: "During mitosis, the stage at which chromosomes line up around the equator is?",
    option: [
      "telophase",
      "metaphase",
      "anaphase",
      "prophase"
    ],
    crt: 1,
    explanation: "During mitosis, the stage at which chromosomes line up around the equator is metaphase."
  },
  {
    subject: "Biology",
    que: "The waste product of insects is?",
    option: [
      "uric acid",
      "urine",
      "mucilage",
      "sweat"
    ],
    crt: 0,
    explanation: "The waste product of insects is uric acid."
  },
  {
    subject: "Biology",
    que: "Succession that occurs on an abandoned farm land is?",
    option: [
      "tertiary",
      "secondary",
      "primary",
      "climax"
    ],
    crt: 2,
    explanation: "Succession that occurs on an abandoned farm land is primary succession."
  },
  {
    subject: "Biology",
    que: "In Nigeria, Southern Guinea Savanna is found in?",
    option: [
      "Borno and Sokoto",
      "Kogi and Kwara",
      "Kaduna and Cross River",
      "Kano and Niger"
    ],
    crt: 1,
    explanation: "In Nigeria, Southern Guinea Savanna is found in Kogi and Kwara."
  },
  {
    subject: "Biology",
    que: "Which of the following is associated with the dark stage of photosynthesis?",
    option: [
      "Assimilation of Carbon(IV)oxide",
      "Photophosphorylation",
      "Photolysis",
      "Excitation of chlorophyll"
    ],
    crt: 0,
    explanation: "Assimilation of Carbon(IV)oxide is associated with the dark stage of photosynthesis."
  },
  {
    subject: "Biology",
    que: "The part of mammalian skin that excretes metabolic wastes is?",
    option: [
      "sweat gland",
      "horny layer",
      "Malpighian layer",
      "sebaceous gland"
    ],
    crt: 0,
    explanation: "The part of mammalian skin that excretes metabolic wastes is the sweat gland."
  },
  {
    subject: "Biology",
    que: "The feeding relationship that exists between a tick and a cow is?",
    option: [
      "parasitism",
      "mechanism",
      "saprophytism",
      "commensalism"
    ],
    crt: 0,
    explanation: "The feeding relationship that exists between a tick and a cow is parasitism."
  },
  {
    subject: "Biology",
    que: "The type of fruit that is formed from a single flower having several free carpels is?",
    option: [
      "indehiscent fruit",
      "aggregate fruit",
      "simple fruit",
      "fleshy fruit"
    ],
    crt: 1,
    explanation: "The type of fruit that is formed from a single flower having several free carpels is aggregate fruit."
  },
  {
    subject: "Biology",
    que: "The part that performs urinogenital function in the male reproductive system is the?",
    option: [
      "seminal vesicle",
      "epididymis",
      "urethra",
      "ureter"
    ],
    crt: 2,
    explanation: "The part that performs urinogenital function in the male reproductive system is the urethra."
  },
  {
    subject: "Biology",
    que: "The components of blood in man are?",
    option: [
      "red blood cells, white blood cells, plasma and water",
      "red blood cells, white blood cells, and plasma",
      "red blood cells, white blood cells, and platelets",
      "red blood cells, white blood cells, plasma and platelets"
    ],
    crt: 0,
    explanation: "The components of blood in man are red blood cells, white blood cells, plasma, and water."
  },
  {
    subject: "Biology",
    que: "The development of big muscles by a wrestler is an example of?",
    option: [
      "acquired characteristics",
      "inherited characteristics",
      "mutation",
      "atrophication"
    ],
    crt: 0,
    explanation: "The development of big muscles by a wrestler is an example of acquired characteristics."
  },
  {
    subject: "Biology",
    que: "Lack of nucleus is a feature in?",
    option: [
      "osteocyte",
      "neurone",
      "erythrocyte",
      "leucocyte"
    ],
    crt: 2,
    explanation: "Lack of nucleus is a feature in erythrocyte (red blood cell)."
  },
  {
    subject: "Biology",
    que: "A universal recipient of blood belongs to blood group?",
    option: [
      "O",
      "AB",
      "B",
      "A"
    ],
    crt: 1,
    explanation: "A universal recipient of blood belongs to blood group AB."
  },
  {
    subject: "Biology",
    que: "The internal structure of a leaf that has larger air space is?",
    option: [
      "palisade mesophyll",
      "epidermis",
      "spongy mesophyll",
      "vascular bundles"
    ],
    crt: 2,
    explanation: "The internal structure of a leaf that has larger air space is spongy mesophyll."
  },
  {
    subject: "Biology",
    que: "An example of arboreal animal is?",
    option: [
      "squirrels",
      "duck",
      "pig",
      "rat"
    ],
    crt: 0,
    explanation: "An example of arboreal animal is squirrels."
  },
  {
    subject: "Biology",
    que: "The movement of sugars from the leaf to other parts of the plant is?",
    option: [
      "guttation",
      "transpiration",
      "transportation",
      "translocation"
    ],
    crt: 3,
    explanation: "The movement of sugars from the leaf to other parts of the plant is translocation."
  },
  {
    subject: "Biology",
    que: "Gaseous exchange in annelids is more advanced and efficient compared to flatworms because?",
    option: [
      "the cells of their epidermis have no blood capillaries",
      "they have well developed respiratory structures",
      "their cylindrical shape gives high surface area to volume ratio",
      "their surface area to volume ratio is very low"
    ],
    crt: 1,
    explanation: "Gaseous exchange in annelids is more advanced and efficient compared to flatworms because they have well-developed respiratory structures."
  },
  {
    subject: "Biology",
    que: "The structure that joins the two strands of a chromosome together is the?",
    option: [
      "spindle",
      "cellulose",
      "centromere",
      "chromatid"
    ],
    crt: 2,
    explanation: "The structure that joins the two strands of a chromosome together is the centromere."
  },
  {
    subject: "Biology",
    que: "When a color blind woman marries a normal man, what is the probability of their son being color blind?",
    option: [
      "25%",
      "100%",
      "50%",
      "0%"
    ],
    crt: 2,
    explanation: "When a color blind woman marries a normal man, the probability of their son being color blind is 50%."
  },
  {
    subject: "Biology",
    que: "The correct pathway for blood flow from the heart to the tissues of mammals is?",
    option: [
      "heart-arteriole-artery-tissues",
      "heart-artery-arteriole-tissues",
      "heart-vein-venule-tissues",
      "heart-venule-vein-tissues"
    ],
    crt: 1,
    explanation: "The correct pathway for blood flow from the heart to the tissues of mammals is heart-arteriole-artery-tissues."
  },
  {
    subject: "Biology",
    que: "Tall trees with buttress roots and evergreen leaves are characteristic features of?",
    option: [
      "temperate grassland",
      "Southern Guinea Savanna",
      "tropical rainforests",
      "Northern Guinea savanna"
    ],
    crt: 2,
    explanation: "Tall trees with buttress roots and evergreen leaves are characteristic features of tropical rainforests."
  },
  {
    subject: "Biology",
    que: "The genes crossing over occurs during?",
    option: [
      "fertilization",
      "mutation",
      "mitosis",
      "meiosis"
    ],
    crt: 3,
    explanation: "The genes crossing over occurs during meiosis."
  },
  {
    subject: "Biology",
    que: "In genetic counseling, a man with hemoglobin formation HbA HbS is most preferred to marry a woman of?",
    option: [
      "HbA HbA",
      "HbC HbH",
      "HbM HbF",
      "HbS HbS"
    ],
    crt: 0,
    explanation: "In genetic counseling, a man with hemoglobin formation HbA HbS is most preferred to marry a woman of HbA HbA."
  },
  {
    subject: "Biology",
    que: "An ecological instrument used to measure wind direction is?",
    option: [
      "Secchi disc",
      "wind vane",
      "anemometer",
      "slope gauge"
    ],
    crt: 1,
    explanation: "An ecological instrument used to measure wind direction is a wind vane."
  },
  {
    subject: "Biology",
    que: "The growth of mucor on a piece of bread is?",
    option: [
      "scavenging",
      "commensalism",
      "autotrophism",
      "saprophytism"
    ],
    crt: 3,
    explanation: "The growth of mucor on a piece of bread is saprophytism."
  },
  {
    subject: "Biology",
    que: "Conversion of atmospheric carbon into chemical bond energy occurs during the process of?",
    option: [
      "transpiration",
      "photosynthesis",
      "digestion",
      "respiration"
    ],
    crt: 1,
    explanation: "Conversion of atmospheric carbon into chemical bond energy occurs during the process of photosynthesis."
  },
  {
    subject: "Biology",
    que: "One of the functions of the xylem is?",
    option: [
      "strengthening the stem",
      "manufacturing food",
      "reducing loss of water",
      "conducting manufactured food"
    ],
    crt: 0,
    explanation: "One of the functions of the xylem is strengthening the stem."
  },
  {
    subject: "Biology",
    que: "Which of the statements below is not characteristic of wind-pollinated flowers?",
    option: [
      "Stigmas are usually large and feathery",
      "Nectary is usually absent",
      "The pollen grains have rough spiny surfaces",
      "The flowers are not scented."
    ],
    crt: 0,
    explanation: "Stigmas are usually large and feathery is not characteristic of wind-pollinated flowers."
  },
  {
    subject: "Biology",
    que: "Some of the features of an animal are scales, teeth, nares, and backbone. The animal is likely to be a?",
    option: [
      "toad",
      "bird",
      "lizard",
      "rat"
    ],
    crt: 2,
    explanation: "Some of the features of an animal are scales, teeth, nares, and backbone. The animal is likely to be a lizard."
  },
  {
    subject: "Biology",
    que: "Choose the sequence which represents the correct order of organisms in a food chain",
    option: [
      "Grass, snake, toad, grasshopper, hawk",
      "Grass, grasshopper, toad, snake, hawk",
      "Grass, grasshopper, snake, toad, hawk.",
      "Grass, snake, grasshopper, toad, hawk"
    ],
    crt: 1,
    explanation: "The correct order of organisms in a food chain is Grass, grasshopper, toad, snake, hawk."
  },
  {
    subject: "Biology",
    que: "Flatworms and roundworms are said to be invertebrates because?",
    option: [
      "they are small animals",
      "they can live inside the vertebrates",
      "some of them are unicellular",
      "they have no backbones"
    ],
    crt: 3,
    explanation: "Flatworms and roundworms are said to be invertebrates because they have no backbones."
  },
  {
    subject: "Biology",
    que: "When a Spirogyra cell is immersed in a salt solution more concentrated than its cell sap, it?",
    option: [
      "remains unchanged",
      "takes up water and bursts",
      "absorbs a little water",
      "loses water and shrivels"
    ],
    crt: 3,
    explanation: "When a Spirogyra cell is immersed in a salt solution more concentrated than its cell sap, it loses water and shrivels."
  },
  {
    subject: "Biology",
    que: "Which of the following is NOT regarded as a pollutant on land or in the air?",
    option: [
      "Smoke",
      "Nitrogen",
      "Noise",
      "Sulphur dioxide"
    ],
    crt: 1,
    explanation: "Nitrogen is NOT regarded as a pollutant on land or in the air."
  },
  {
    subject: "Biology",
    que: "The initial volume of water poured into a bag of dry soil was 50ml, and the amount that drained through was 35ml. The percentage water content of the fully soaked soil is, therefore?",
    option: [
      "46.7",
      "25.0",
      "20.0",
      "30.0"
    ],
    crt: 0,
    explanation: "The percentage water content of the fully soaked soil is 46.7%."
  },
  {
    subject: "Biology",
    que: "When the original king and queen of termites die, they are replaced by",
    option: [
      "the king and queen of another colony",
      "some adult reproductives from the same colony",
      "some adult workers which are specially fed to breed",
      "developing nymphs nurtured as secondary reproductives"
    ],
    crt: 1,
    explanation: "When the original king and queen of termites die, they are replaced by some adult reproductives from the same colony."
  },
  {
    subject: "Biology",
    que: "In demonstrating the importance of mineral elements in plants, the culture bottle must be darkened to?",
    option: [
      "prevent algal growth in the culture solution",
      "allow root growth",
      "prevent breakdown of mineral elements",
      "prevent photosynthesis in the root"
    ],
    crt: 0,
    explanation: "In demonstrating the importance of mineral elements in plants, the culture bottle must be darkened to prevent algal growth in the culture solution."
  },
  
  
  // literature
  {
    subject: "Literature",
    que: "One of the following writers is better known as a playwright than as a novelist",
    option: [
      "C. Achebe",
      "C. Ekwensi",
      "W. Soyinka",
      "J.P Clark"
    ],
    crt: 2,
    explanation: "One of the following writers is better known as a playwright than as a novelist: W. Soyinka."
  },
  {
    subject: "Literature",
    que: "The plot of a novel is best described as",
    options: [
      "the bare outline of the story arranged in logical order",
      "the story in all its details",
      "the story grossly elaborated",
      "a summary of the story"
    ],
    crt: 0,
    explanation: "The plot of a novel is best described as the bare outline of the story arranged in logical order."
  },
  {
    subject: "Literature",
    que: "A narrative poem must",
    options: [
      "preach a sermon",
      "tell a story",
      "describe natural scenery",
      "argue a question"
    ],
    crt: 1,
    explanation: "A narrative poem must tell a story."
  },
  {
    subject: "Literature",
    que: "Literature is studied as a subject at school because",
    options: [
      "it exposes students to the realities of life",
      "it provides entertainment",
      "it merely gives additional work to students",
      "it teaches the use of words"
    ],
    crt: 3,
    explanation: "Literature is studied as a subject at school because it teaches the use of words."
  },
  {
    subject: "Literature",
    que: "In 'The Flight to Australia', the following line occurs: 'Tier upon tier it towered, the terrible Apennines'. The figure of speech used in this line is known as",
    options: [
      "alliteration",
      "litotes",
      "exaggeration",
      "parody"
    ],
    crt: 2,
    explanation: "In 'The Flight to Australia', the figure of speech used in this line is known as exaggeration."
  },
  {
    subject: "Literature",
    que: "From the novel; If we describe 'Kossoh Town Boy' as an autobiography, we mean that it is",
    options: [
      "a historical novel",
      "a piece of writing telling us about the life of its author",
      "a short story",
      "a narrative tale"
    ],
    crt: 1,
    explanation: "If we describe 'Kossoh Town Boy' as an autobiography, we mean that it is a piece of writing telling us about the life of its author."
  },
  {
    subject: "Literature",
    que: "You cannot know And should not bother Tide and market come and go And so shall your mother. In this verse, the poet uses",
    options: [
      "alternate rhymes",
      "monomyme",
      "couplets",
      "triplets"
    ],
    crt: 3,
    explanation: "In this verse, the poet uses triplets."
  },
  {
    subject: "Literature",
    que: "The Comstocks belonged to the most dismal of all classes, the middle-middle class, the landless gentry. The writer's tone is _______",
    options: [
      "melancholic",
      "matter-of-fact",
      "bitterly humorous",
      "sympathetic"
    ],
    crt: 1,
    explanation: "The writer's tone is matter-of-fact."
  },
  {
    subject: "Literature",
    que: "Another shoal of cars swam past. One, in particular, caught his eyes, a long slender thing, elegant as a swallow, all gleaming blue and silver; a thousand guineas it would have cost, he thought. In the first sentence, cars are described in terms of",
    options: [
      "birds",
      "ants",
      "fish",
      "lampposts"
    ],
    crt: 2,
    explanation: "In the first sentence, cars are described in terms of fish."
  },
  {
    subject: "Literature",
    que: "Pick out the odd item",
    options: [
      "a Raisin in the Sun",
      "Twelfth Night",
      "Ozidi",
      "The Concubine"
    ],
    crt: 2,
    explanation: "The odd item is 'Ozidi' as it is a traditional African epic, while the others are literary works."
  },
  ];
