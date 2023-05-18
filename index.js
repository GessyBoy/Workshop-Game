console.log("Hello mate!");

const userName = prompt("Enter your name");
console.log(`Hello ${userName}!`);

const rightPrice = Math.ceil(Math.random() * 100);
let hasWon = false;

for (let i = 1; !hasWon; i++) {
  const guessPrice = parseInt(prompt("Select a number between 0 and 100"));

  if (isNaN(guessPrice)) {
    console.log("Please enter a number.");
  } else if (guessPrice < rightPrice) {
    console.log("It's lower.");
  } else if (guessPrice > rightPrice) {
    console.log("It's higher.");
  } else {
    hasWon = true;
    console.log(`You won, dude! It took you ${i} turn(s).`);
  }
}
