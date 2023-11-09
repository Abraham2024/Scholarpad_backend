         let selectedOptions = new Array(ques.length).fill(null);

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
           // make the questions random
           $(".start-quiz").click(function() {
             name = $(".input").val();
             if (name === '') {
               alert("Please Enter Your Name")
               return;
             }
             // Shuffle the questions
             shuffleArray(ques);
             $(".sec2").fadeOut();
             $(".sec3").fadeIn();
             index = 0; // Reset the index to start from the first question
             startTimes();
             newQuestion();
           });
           // Function to display explanations
           $(".show-explanations").click(function() {
             const explanationContent = $(".explanation-content");

             // Clear any previous content
             explanationContent.html("");

             // Loop through all questions to display explanations
             for (let i = 0; i < ques.length; i++) {
               const question = ques[i];
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

           $(".quiz").on("click", "li", function() {
             $(".quiz .select").removeClass("select");
             $(this).addClass("select");
           })
           $(".submit").click(function() {
             const select = $(".quiz li").hasClass("select");
             if (!select) {
               alert("please select any option");
               return;
             }
             const key = $(".quiz .select").attr("data-key");
             checkAns(key)
           })
           $(".check-ans").click(function() {
             $(".sec4").fadeOut();
             $(".sec5").fadeIn();
             showYourAns()
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
           h = "0" + 0; // Add hours variable  

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

         function startTimes() {
           h = 0; // Set initial hours to 1 
           m = 30; // Set initial minutes to 30 
           s = 00; // Set initial seconds to 0 
           times = setInterval(function() {
             showTime();
           }, 1000);
         }

         function newQuestion() {
           const que = ques[index];
           showIndex();
           $(".question").html(que.que);

           // Create an image element for the question's image 
           const imageElement = document.createElement('img');
           imageElement.src = que.image; // Assuming your question object has an "image" property with the image URL 
           imageElement.alt = 'Question Image'; // Alt text for accessibility 
           $(".question").append(imageElement);

           $(".quiz").html("");
           que.option.forEach((q, i) => {
             const li = document.createElement('li');
             li.setAttribute('data-key', i);
             li.innerHTML = q;
             if (selectedOptions[index] === i) {
               li.classList.add("select"); // Apply the "select" class if the option was previously selected 
             }
             $(".quiz").append(li);
           });
         }

         // ... 
         function newQuestion() {
           const que = ques[index];
           showIndex();
           $(".question").html(que.que);

           // Check if the question object has an "image" property 
           if (que.image) {
             // Create an image element for the question's image 
             const imageElement = document.createElement('img');
             imageElement.src = que.image; // Set the image source from the question object 
             imageElement.alt = 'Question Image'; // Alt text for accessibility 
             $(".question").append(imageElement);
           }

           $(".quiz").html("");
           que.option.forEach((q, i) => {
             const li = document.createElement('li');
             li.setAttribute('data-key', i);
             li.innerHTML = q;
             if (selectedOptions[index] === i) {
               li.classList.add("select"); // Apply the "select" class if the option was previously selected 
             }
             $(".quiz").append(li);
           });
         }


         // ... 

         function checkAns(key) {
           const que = ques[index];
           // Only store the selection if it hasn't been clicked before for this question 
           if (selectedOptions[index] === null) {
             selectedOptions[index] = key;
           }
           answer.push(key);
           if (que.crt == key) {
             score++;
             makeToast("saved")
           } else {
             makeToast("saved")
           }
           index++;
           if (index < ques.length) {
             newQuestion()
           } else {
             showResult()
             clearInterval(times)
           }
         }


         function showIndex() {
           $(".index").text(1 + index + "/" + ques.length)
         }
         // Add this inside your $(document).ready(function() {...}) block 
         $(".prev-btn").click(function() {
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
           const scores = Math.round(score / ques.length * 100);
           const grt = scores < 25 ? "Nice" : scores < 50 ? "Good" : scores < 76 ? "Very Good" : "Excellent";
           $("#score").text("Score : " + scores + "%");
           $("#id").text("Test Id : " + Math.ceil(Math.random() * 20000));
           let date = new Date();
           let today = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
           $("#date").text(today);
           $(".great").text(grt);
         }

         function showYourAns() {
           $(".ans-list").html("");
           $(".sc").text(score + "/" + ques.length);

           ques.forEach((que, i) => {
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

         function makeToast(txt) {
           $(".toast").text(txt);
           $(".toast").fadeIn();
           setTimeout(() => $(".toast").fadeOut(), 1000)
         }

         function shuffleArray(array) {
           for (let i = array.length - 1; i > 0; i--) {
             const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
           }
         }