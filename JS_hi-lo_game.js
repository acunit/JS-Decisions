// JavaScript Hi/Lo Game
// Purpose: Create a function that plays the following game: The computer picks a secret random integer between 1 and 100 (both inclusive), and repeatedly asks the user for guesses.
// If the user's guess is too high or too low, the computer notifies them of that
// Otherwise, if the user guesses the secret number correctly, the computer displays a winning message and the game is over.
// Signature: Computer randomly generates a number. User inputs a number between 1 and 100 (inclusive) trying to guess the randomly generated number. computer notifies whether the number is higher or lower than the randomly generated number. Once number is guessed correctly, it displays that the user has won.
//  Examples:

function hiLo() {
  var secretNum = Math.floor((Math.random() * 100) + 1);
  var name = prompt("Hello! Welcome to the Hi-Lo Game. What is your name?")
  guess = parseInt(prompt("Great to meet you " + name + "! Please guess an integer between 1 and 100 (inclusive)."));
  while (guess != guess/1 || guess % 1 != 0) {
    guess = parseInt(prompt("Your guess is invalid. Please enter an integer."))
  }
  var guessCount = 1
  while (secretNum != guess && guessCount < 7) {
    if (secretNum < guess) {
      alert("Guess is too high.");
      guess = parseInt(prompt("Please guess another integer."));
      while (guess != guess/1 || guess % 1 != 0) {
        guess = parseInt(prompt("Your guess is invalid. Please enter an integer."))
      }
      guessCount = guessCount + 1;
    } else {
      alert("Guess is too low.");
      guess = parseInt(prompt("Please guess another integer."));
      while (guess != guess/1 || guess % 1 != 0) {
        guess = parseInt(prompt("Your guess is invalid. Please enter an integer."))
      }
      guessCount = guessCount + 1;
    }
  }
  if (secretNum === guess) {
    alert("Good job " + name + "! You Win!");
  } else {
    alert("Sorry " + name + ". You Lose!");
  }
}
