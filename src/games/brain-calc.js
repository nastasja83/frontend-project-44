import runGame from '../index.js';

const minNumber = 1;
const maxNumber = 20;
const operations = ['-', '+', '*'];
const description = 'What is the result of the expression?';

const getRandomNumber = () => Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
const getCorrectAnswer = (firstOperand, secondOperand, operation) => {
  switch (operation) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      break;
  }
};

const beginRound = () => {
  const firstOperand = getRandomNumber();
  const secondOperand = getRandomNumber();
  const operation = operations[Math.floor(Math.random() * operations.length)];
  const question = `Question: ${firstOperand} ${operation} ${secondOperand}`;
  return [question, getCorrectAnswer(firstOperand, secondOperand, operation)];
};

const play = () => runGame(description, beginRound);

export default play;
