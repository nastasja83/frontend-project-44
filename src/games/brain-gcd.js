import runGame from '../index.js';

const minNumber = 2;
const maxNumber = 10;
const description = 'Find the greatest common divisor of given numbers.';

const getRandomNumber = () => Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
const getCorrectAnswer = (firstNumber, secondNumber) => {
  let temp = 0;
  let int1 = firstNumber;
  let int2 = secondNumber;

  while (int2 !== 0) {
    temp = int2;
    int2 = int1 % int2;
    int1 = temp;
  }
  return int1;
};

const beginRound = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const question = `Question: ${firstNumber} ${secondNumber}`;
  return [question, getCorrectAnswer(firstNumber, secondNumber)];
};

const play = () => runGame(description, beginRound);

export default play;
