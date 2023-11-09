// Create a new speech synthesis utterance
const speech = new SpeechSynthesisUtterance();

// Set the text to be spoken
speech.text = "Hello, I am a female voice.";

// Set the voice to a female voice
speech.voice = speechSynthesis.getVoices().find((voice) => voice.name === "Google UK English Female");

// Set the speech rate
speech.rate = 1; // You can adjust the rate (0.1 to 10)

// Speak the text
speechSynthesis.speak(speech);
