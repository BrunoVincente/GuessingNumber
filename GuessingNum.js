//Guessing number - While Loop
{
    let maximum = parseInt(prompt('Enter the maximum number!'));
    while (!maximum) {
        maximum = parseInt(prompt('Enter the maximum number!'));
    }

    const targetNum = Math.floor(Math.random() * maximum) + 1;

    let guess = parseInt(prompt("Enter your first guess:"));
    let numbGuesses = 1;

    while (parseInt(guess) !== targetNum) {
       if (guess === "quit"){
            numbGuesses--;
            break;
       }

        numbGuesses++;
        if (guess < targetNum){
            guess = prompt("Too low, enter another guess:");
        }
        else if (guess > maximum){
            guess = prompt(`Calm down, don't forget that the limit is ${maximum}. Try another guess:`);
        }
        else if (guess > targetNum && guess < maximum) {
            guess = prompt("Too high, try another guess:");
        }
        else {
            guess = prompt("Enter a valid number:");
        }
    } 

    if (guess === "quit") {
        console.log(`You gave up with ${numbGuesses} attempt(s)`);
    }
    else{
    console.log(`Congrats, you nailed it and it just took you ${numbGuesses} guesses`)
    }
}