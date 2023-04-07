import greetings from 'cli.js';
import readlineSync from 'readline-sync';

const randomNum = (range) => Math.floor(Math.random() * range);

const begin = (task) => {
  const name = greetings();
  console.log(task);
  return name;
};


