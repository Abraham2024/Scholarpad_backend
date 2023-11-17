
 ques = [
  {
    que: "If 2257 is the result of subtracting 4577 from 7056 in base n, find n",
    option: ["8", "9", "10", "11"],
    crt: 0,
              },


      ];



let score = 0,
  index = 0,
  name = "",
  answer = [],
  times,
  selectedQuizId;

$(document).ready(function() {
  $(".continue-btn").click(function() {
    $(".sec1").fadeOut();
    $(".sec2").fadeIn();
  });
  $(".start-quiz").click(function() {
    name = $(".input").val();
    if (name === '') {
      alert("Please Enter Your Name")
      return;
    }
    $(".sec2").fadeOut();
    $(".sec3").fadeIn();
    newQuestion()
    startTimes()
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

});

let s = 0,
  m = "0" + 0,
  h = "0" + 0; // Add hours variable    

function showTime() {
  s++;
  if (s >= 60) {
    s = 0;
    m++;
    m = m < 10 ? "0" + m : m;
    if (m >= 60) { // If minutes reach 60, increment hours    
      m = 0;
      h++;
      h = h < 10 ? "0" + h : h;
    }
  }
  s = s < 10 ? "0" + s : s;
  $(".time").text(h + ":" + m + ":" + s); // Display hours, minutes, and seconds    
}

function startTimes() {
  let duration = 60 * 60; // Two hours in seconds    
  times = setInterval(function() {
    showTime();
    duration--;
    if (duration <= 0) {
      clearInterval(times); // Stop the timer after two hours    
      showResult(); // Show the quiz result when the timer expires    
    }
  }, 1000);
}


function newQuestion() {
  const que = ques[index];
  showIndex();
  $(".question").html(que.que); // Use .html() instead of .text() to allow HTML tags   
  $(".quiz").html("");
  que.option.forEach((q, i) => {
    const li = document.createElement('li');
    li.setAttribute('data-key', i);
    li.innerHTML = q; // Use .innerHTML to allow HTML tags   
    $(".quiz").append(li);
  });
}


function checkAns(key) {
  const que = ques[index];
  answer.push(key);
  if (que.crt == key) {
    score++;
    makeToast("Right")
  } else {
    makeToast("Wrong")
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


function showResult() {
  const Scores = Math.round(score / ques.length * 100); // Move the definition above its usage
let date = new Date();
let today = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();

  const userData = {
    name: name,
    score: Scores,
    quizId: selectedQuizId,
    date: today
  };


  selectedQuizId = "combo"; // or assign the appropriate value based on your application logic  
  
$.ajax({ 
     type: "POST", 
     url: `/save_user_score/${selectedQuizId}/`, 
     headers: { "X-CSRFToken": getCookie("csrftoken") },  // Include the CSRF token 
     data: JSON.stringify(userData), 
     contentType: "application/json; charset=utf-8", 
     dataType: "json", 
     success: function (response) { 
         console.log("User score saved successfully"); 
     }, 
     error: function (error) { 
         console.error("Error saving user score:", error); 
     } 
 });

  $(".sec3").fadeOut();
  $(".sec4").fadeIn();
  $("#name").text(name);
  $(".name").text(name);

  const grt = Scores < 25 ? "Nice" : Scores < 50 ? "Good" : Scores < 76 ? "Very Good" : "Excellent";
  $("#score").text("Score : " + Scores + "%");
  $("#id").text("Test Id : " + Math.ceil(Math.random() * 20000));
  
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

function makeToast(txt) {
  $(".toast").text(txt);
  $(".toast").fadeIn();
  setTimeout(() => $(".toast").fadeOut(), 1000)
}