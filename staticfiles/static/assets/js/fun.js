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
  $(".show-explanations").click(function() {
    const explanationContent = $(".explanation-content");

    // Clear any previous content
    explanationContent.html("");

    // Filter questions based on selected subjects
    const selectedSubjectQuestions = ques.filter(question => selectedSubjects.includes(question.subject));

    // Loop through selected questions to display explanations
    for (let i = 0; i < selectedSubjectQuestions.length; i++) {
        const question = selectedSubjectQuestions[i];
        const selectedOption = selectedOptions[i];

        // Check if the selected option matches the correct answer
        const isCorrect = question.option[selectedOption] === question.option[question.crt];

        // Create a div for the question and its explanation
        const questionDiv = $("<div>");

        // Display the question
        questionDiv.append(`<p><strong>Question ${i + 1}:</strong> ${question.que}</p>`);

        // Display the user's answer
        questionDiv.append(`<p><strong>Your Answer:</strong> ${question.option[selectedOption]}</p>`);
        // Display whether the answer is correct or not
        questionDiv.append(`<p><strong>Result:</strong> ${isCorrect ? "Correct" : "Incorrect"}</p>`);

        // Display the explanation
        questionDiv.append(`<p><strong>Explanation:</strong> ${question.explanation}</p>`);

        // Append the question div to the explanation container
        explanationContent.append(questionDiv);
    }

    // Show the explanation container
    explanationContent.show();
});

  
 // Update the function for subject selection based on the user's choice
$(".start-quiz").click(function() {
  selectedSubjects = [];
  $("select#subject-select option:selected").each(function() {
    selectedSubjects.push($(this).val());
  });

  if (selectedSubjects.length === 0) {
    alert("Please select at least one subject.");
    return;
  }

  // Check if a name is entered
  name = $(".input").val();
  if (name === "") {
    alert("Please Enter Your Name");
    return;
  }

  // The subjects are selected, update button text and continue with the quiz
  $(".start-quiz").text("Start Quiz");
  $(".sec2").fadeOut();
  startTimes();
  newQuestion();
  $(".sec3").fadeIn();
});

  // Event handler when selecting an option
  $(".quiz").on("click", "li", function() {
    $(".quiz .select").removeClass("select");
    $(this).addClass("select");
  });

  // Submit button click event
  $(".submit").click(function() {
    const select = $(".quiz li").hasClass("select");
    if (!select) {
      alert("Please select an option");
      return;
    }
    const key = $(".quiz .select").attr("data-key");
    checkAns(key);
  });

  // Check answers button click event
  $(".check-ans").click(function() {
    $(".sec4").fadeOut();
    $(".sec5").fadeIn();
    showYourAns();
  });

  // Back button click event
  $(".back-btn").click(function() {
    $(".sec5").fadeOut();
    $(".sec4").fadeIn();
  });

  // Next button click event
  $(".next-btn").click(function() {
    if (index < ques.length - 1) { // Check if there is a next question  
      index++;
      newQuestion();
    } else {
      alert("You are at the last question."); // Optionally, provide a message if there are no more questions  
    }
  });

});

// Timer variables
let s = 0,
  m = "0" + 0,
  h = "0" + 0;

// Function to display the timer
function showTime() {
  s--;
  if (s < 0) {
    s = 59;
    m--;
    if (m < 0) {
      m = 59;
      h--;
      if (h < 0) {
        h = 0; // Ensure hours don't go negative 
      }
    }
  }
  const formattedTime = `${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}`;
  $(".time").text(formattedTime); // Display hours, minutes, and seconds 
  if (h === 0 && m === 0 && s === 0) {
    clearInterval(times); // Stop the timer when time reaches zero 
    showResult(); // Show the quiz result when the timer expires 
  }
}

// Function to start the timer
function startTimes() {
  h = 1; // Set initial hours to 1 
  m = 30; // Set initial minutes to 30 
  s = 00; // Set initial seconds to 0 
  times = setInterval(function() {
    showTime();
  }, 1000);
}

// Function to load a new question
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

// Function to check answers
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

// Function to display the current question index
function showIndex() {
  const filteredQuestions = ques.filter(question => selectedSubjects.includes(question.subject));
  $(".index").text(1 + index + "/" + filteredQuestions.length);
}

// Previous button click event
$(".prev-btn").click(function() {
  const filteredQuestions = ques.filter(question => selectedSubjects.includes(question.subject));
  if (index > 0) { // Check if there is a previous question  
    index--; // Decrement the index to go back to the previous question  
    newQuestion();
  } else {
    alert("You are at the first question."); // Optionally, provide a message if there are no previous questions  
  }
});

// Function to display the quiz result
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

// Function to display user's answers
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

// Function to toggle the calculator display
function toggleCalculator() {
  var calculator = document.querySelector('.calculator');
  calculator.style.display = calculator.style.display === 'none' ? 'block' : 'none';
}

// Function to clear the calculator input
function Clear() {
  var b = document.getElementById("answer");
  b.value = '';
}

// Function to calculate the percentage
function percent() {
  calc.display.value = calc.display.value / 100;
}

// Function to calculate the cube of a number
function cube() {
  calc.display.value = calc.display.value ** 3;
}

// Function to remove the last character from the calculator input
function Return() {
  var R = document.getElementById("answer");
  R.value = R.value.slice(0, -1);
}

// Function to evaluate and display the calculator result
function Result() {
  const display = document.getElementById("answer");
  try {
    const data = eval(display.value);
    display.value = data;
  }
  catch (error) {
    display.value = "Error";
    alert("Invalid expression, please check.");
  }
}

// Function to calculate the square root
function sqrt() {
  calc.display.value = Math.sqrt(calc.display.value);
}

// Function to calculate the square of a number
function Sq() {
  calc.display.value = calc.display.value ** 2;
}

// Function to display a toast message
function makeToast(txt) {
  $(".toast").text(txt);
  $(".toast").fadeIn();
  setTimeout(() => $(".toast").fadeOut(), 1000);
}

function showSubjects(section) {
  var subjectSelect = document.getElementById('subject-select');
  var subjects = document.getElementById('subject-select');
  subjects.innerHTML = ''; // Clear existing subjects

  if (section === 'science') {
    subjectSelect.innerHTML = `
      <option value="English">English</option>
      <option value="Mathematics">Mathematics</option>
      <option value="Biology">Biology</option>
      <option value="Chemistry">Chemistry</option>
      <option value="Physics">Physics</option>
    `;
  } else if (section === 'art') {
    subjectSelect.innerHTML = `
      <option value="Literature">Literature</option>
      <option value="Government">Government</option>
      <option value="English">English</option>
      <option value="C.R.S">C.R.S</option>
    `;
  } else if (section === 'social') {
    subjectSelect.innerHTML = `
      <option value="English">English</option>
      <option value="Mathematics">Mathematics</option>
      <option value="Commerce">Commerce</option>
      <option value="Economics">Economics</option>
      <option value="Government">Government</option>
    `;
  }
}
