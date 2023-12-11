// end.js
const saveScoreForm = document.getElementById('saveScoreForm');
const usernameInput = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');

// Assume you have a variable 'score' defined somewhere
finalScore.innerText = score;

saveScoreForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = usernameInput.value;

    // Validate username and send data to the Django server
    if (username.trim() !== '') {
        saveHighScore(username);
    } else {
        alert('Please enter a valid username.');
    }
});

// Function to send data to Django server
function saveHighScore(username) {
    // Send username and score to the Django server
    fetch('/high_score/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, score }),
    }).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    }).then(data => {
        // Handle the response if needed
        console.log(data);
    }).catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}
