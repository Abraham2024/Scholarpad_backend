// ...

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
            // Redirect to the scores page or your desired URL
            window.location.href = 'high_scores';
        } else {
            throw new Error('Network response was not ok.');
        }
    }).catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}
