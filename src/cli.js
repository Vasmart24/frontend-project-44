import readlineSynk from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSynk.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
