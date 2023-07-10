import runGame from '../index.js';

const numbersCount = 10;
const min = 1;
const max = numbersCount - 1;
const description = 'What number is missing in the progression?';

const getRandomNumber = () => Math.floor(Math.random() * (max - min) + min);

const getNumbers = () => {
  const result = [getRandomNumber()];
  const difference = getRandomNumber();

  for (let i = 0; i <= numbersCount; i += 1) {
    result.push(result[i] + difference);
  }
  return result;
};

const beginRound = () => {
  const index = getRandomNumber();
  const numbers = getNumbers();
  const replacedInt = numbers[index];
  numbers[index] = '..';
  const question = `Question: ${numbers.join(' ')}`;
  return [question, replacedInt];
};

const play = () => runGame(description, beginRound);

export default play;
