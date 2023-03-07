import readlineSynk from 'readline-sync';

const greetings = () => {
	console.log("Welcome to the Brain Games!");
	const name = readlineSynk.question("May i have your name? ");
	console.log(`Hello, ${name}!`);
};

export default greetings;
