import runGame from '../index.js';

const minNumber = 1;
const maxNumber = 20;
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRandomNumber = () => Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < Math.floor(number / 2); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const beginRound = () => {
  const number = getRandomNumber();
  const question = `Question: ${number}`;
  return [question, isPrime(number) ? 'yes' : 'no'];
};

const play = () => runGame(description, beginRound);

export default play;
