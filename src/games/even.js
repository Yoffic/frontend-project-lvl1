import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../utils';
import makeGame from '..';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (value) => value % 2 === 0;
const makeRound = () => {
  const gameQuestion = generateRandomNumber(1, 100);
  const correctAnswer = isEven(gameQuestion) ? 'yes' : 'no';
  return cons(gameQuestion, correctAnswer);
};

const evenGame = () => makeGame(rule, makeRound);
export default evenGame;
