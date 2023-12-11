const usernameInput = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

usernameInput.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !usernameInput.value;
});

saveHighScore = (e) => {
    e.preventDefault();
    alert("Congratulations! You are a scholar");

    const user = usernameInput.value; // Update to use the username input value
    const score = {
        score: mostRecentScore,
        name: user,
    };

    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(MAX_HIGH_SCORES);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('high_scores');
};
