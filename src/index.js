import readlineSync from 'readline-sync';

const attemptsCount = 3;

const runGame = (description, beginRound) => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');

  console.log(`Hello, ${userName}!\n${description}`);

  for (let i = 0; i < attemptsCount; i += 1) {
    const [question, correctAnswer] = beginRound();
    const answer = readlineSync.question(`${question}\nYour answer: `);
    if (answer !== correctAnswer.toString()) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
