import runGame from '../index.js';

const minNumber = 1;
const maxNumber = 20;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomNumber = () => Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
const getCorrectAnswer = (questionNumber) => (questionNumber % 2 === 0 ? 'yes' : 'no');

const beginRound = () => {
  const questionNumber = getRandomNumber();
  const question = `Question: ${questionNumber}`;
  return [question, getCorrectAnswer(questionNumber)];
};

const play = () => runGame(description, beginRound);

export default play;
