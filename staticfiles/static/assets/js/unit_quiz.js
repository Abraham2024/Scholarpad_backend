      //Do not see the answer 
      const ques = [
        {
          que: "A boy ran a distance of 200m in 24s. His average speed was 8.3ms-1. Which of the following is correct about the units in which the statements above are expressed?",
          option: ["All the units are fundamental", "All the units are derived", "All the units except one are S.I units", "Two of the units are fundamental and one derived."],
          crt: 3,
   },
        {
          que: "Which of the following physical quantities are derived? I.Area II.Thrust III.Pressure IV.Mass",
          option: ["I, II, III and IV", "I, II, and III only", "I, II, and IV only", "I and IV only"],
          crt: 1,
   },
        {
          que: "What is the least possible error in using a rule graduated in centimeters?",
          option: ["0.5", "0.1", "1.5", "2.0"],
          crt: 1,
   },
        {
          que: "A quantity which requires magnitude and direction to be specified is",
          option: ["Temperature", "Distance", "Displacement", "Mass"],
          crt: 2,
   },
        {
          que: "What is the least possible error encountered when taking measurement with a meter rule?",
          option: ["0.1mm", "0.5mm", "1mm", "0.2mm"],
          crt: 1,
   },
        {
          que: "Which of the following is NOT a vector quantity",
          option: ["Force", "Weight", "Altitude", "Displacement"],
          crt: 2,
   },
        {
          que: "The force with which an object is attracted to the earth is called its",
          option: ["Gravity", "Acceleration", "Weight", "Impulse"],
          crt: 2,
   },
        {
          que: "Of the following derived units, the one that is not a unit of power is",
          option: ["Joule/second", "Ampere²/volt", "ohm²/volt", "ampere volts"],
          crt: 1,
   },
        {
          que: "A piece of wood is floating on water.The forces acting on the wood are",
          option: ["Upthrust and reaction", "Weight and Upthrust", "Weight and reaction", "Weight and viscosity"],
          crt: 1,
   },
        {
          que: "The unit quantity of electricity is called:",
          option: ["Ampere", "Volt", "Coulomb", "Electromotive force"],
          crt: 2,
   },
        {
          que: "Which of the following is NOT a fundamental S.I. unit ?",
          option: ["Metre", "Radian", "Kelvin", "second"],
          crt: 1,
   },
        {
          que: "Which one of the following is not the unit of energy?",
          option: ["Watt", "Joules", "Calorie", "Kilowatt-hour"],
          crt: 0,
   },
        {
          que: "Which of the following are the correct SI units of the quantities indicated? I. N (Force) II.Nm-1(Torque) III. Watt (power) IV. kgms-2(Momentum)",
          option: ["I and II only", "I, II and III only", "I, III and IV only", "III only"],
          crt: 2,
   },
        {
          que: "The product PV where P is pressure and V is volume has the same unit as",
          option: ["Power", "force", "Energy", "Acceleration"],
          crt: 2,
   },
        {
          que: "Which of the following quantities has the same unit as the watt?",
          option: ["force x time", "force x distance", "force x acceleration", "force x velocity"],
          crt: 3,
   },
        {
          que: "Which of the following is the dimension of pressure",
          option: ["ML-¹T-²", "MLT-²", "ML²T-³", "ML-³"],
          crt: 0,
   },
       
        {
          que: "To determine the weight of an object you could",
          option: ["use a beam balance", "Use a spring balance", "Find the force necessary", "None of the above"],
          crt: 1,
    },
        {
          que: "An object is weighed at different locations on the Earth. What will be the right observation?",
          option: ["Both the mass and weight vary ", "The weight is constant while the mass varies", "The mass is constant while the weight varies", "Both the mass and weight are constant"],
          crt: 2,
     },
        {
          que: "Which of the following is not a measurement of time",
          option: ["seconds", "days", "weeks", "tonnes"],
          crt: 3,
    },
 ];

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
        m = "0" + 0;

      function showTime() {
        s++
        if (s >= 60) {
          s = 0;
          m++
          m = m < 10 ? "0" + m : m;
        }
        s = s < 10 ? "0" + s : s;
        $(".time").text(m + ":" + s);
      }

      function startTimes() {
        times = setInterval(showTime, 1000)
      }

      function newQuestion() {
        const que = ques[index];
        showIndex()
        $(".question").text(que.que);
        $(".quiz").html("");
        que.option.forEach((q, i) => {
          const li = document.createElement('li');
          li.setAttribute('data-key', i);
          li.textContent = q;
          $(".quiz").append(li)
        })
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

      function makeToast(txt) {
        $(".toast").text(txt);
        $(".toast").fadeIn();
        setTimeout(() => $(".toast").fadeOut(), 1000)
}
      
