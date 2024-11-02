// Welcome message to user
alert("Welcome to Hangman where you will guess the letters of a hidden word!");

// Create a list-array of guessable words
const words = [
  "cat",
  "mango",
  "helmet",
  "angel",
  "blue",
  "park",
  "pet",
  "courtyard",
  "airpods",
  "apartment",
  "computer",
  "bank",
  "microphone",
  "belt",
  "keyboard",
  "folder",
  "refrigerator",
  "university",
  "basketball",
];

let wrongGuesses = 0;
const maxGuesses = 6;
let userGuess = [];

// Randomize a number to choose a word from an index in the array
const randomNumber = Math.random();
const randomPosition = Math.floor(randomNumber * words.length);
const selectedWord = words[randomPosition];

// Shows the underscore character representing the letters of the hidden word
let hiddenWord = [];
for (let i = 0; i < selectedWord.length; i++) {
  hiddenWord.push("_");
}

// Start game loop, loop continues while wrong guesses are less than max guesses
while (wrongGuesses < maxGuesses) {
  alert("The word is: " + hiddenWord.join(" "));

  // Prompt the user to guess a letter
  let guess = prompt("Guess a letter:").toLowerCase();

  // Validate the guess
  if (!guess || guess.length !== 1 || userGuess.includes(guess)) {
    alert("Please enter a single letter that you haven't guessed yet.");
    continue; // Skip to the next iteration if invalid
  }

  userGuess.push(guess); // Save the guess to userGuess
  const letterExists = selectedWord.includes(guess); // Check if the guessed letter exists in the word

  if (letterExists) {
    // Update the hiddenWord with the guessed letter
    for (let i = 0; i < selectedWord.length; i++) {
      if (selectedWord[i] === guess) {
        hiddenWord[i] = guess;
      }
    }
    alert(
      "Correct, the letter exists in the word! Your word: " +
        hiddenWord.join(" ")
    );
  } else {
    // Increment wrong guesses if the guess was incorrect
    wrongGuesses++;
    alert(
      "Wrong, you have guessed " +
        wrongGuesses +
        " wrong out of " +
        maxGuesses +
        " attempts."
    );
  }

  // Check win condition
  if (!hiddenWord.includes("_")) {
    handleWin();
    break; // End the game if the user wins
  }
}

// If the user reaches the maximum number of wrong guesses, they lose
if (wrongGuesses >= maxGuesses) {
  handleLoss();
}

// Function for handling a win
function handleWin() {
  alert(
    `Congratulations! You guessed correctly, the word was: ${selectedWord}`
  );
}

// Function for handling a loss
function handleLoss() {
  alert(`GAME OVER! You guessed incorrectly... The word was: ${selectedWord}`);
}
