const highScoresList = document.getElementById('highScoresList');
const finalScore = document.getElementById('finalScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

finalScore.innerText = "High Scores";

// Display high scores in the list
highScoresList.innerHTML = highScores
  .map((score) => {
    return `<li>${score.name}: ${score.score}</li>`;
  })
  .join('');

// Add a button to clear high scores
highScoresList.innerHTML += `<button onclick="clearHighScores()">Clear High Scores</button>`;

// Function to clear high scores
clearHighScores = () => {
  localStorage.removeItem('highScores');
  highScoresList.innerHTML = '<p>High Scores Cleared</p>';
};
