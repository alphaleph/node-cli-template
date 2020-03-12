import 'dotenv/config';
import readline from 'readline';

console.log(process.env.MY_SECRET);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask() {
  rl.question('What is your chosen number? (Type "end" to quit) ', choice => {
    if (choice === 'end') {
      rl.close();
    } else {
      const chosenNum = parseInt(choice, 10);
      if (chosenNum && chosenNum >= 3 && chosenNum <= 5) {
        console.log(`Your chosen number is: ${chosenNum}`);
        ask();
      } else {
        console.log('Please enter a valid number between 3 and 5.');
        ask();
      }
    }
  });
}

const a = 'a';

const b = 'b';

const obj = {
  a,
  b,
  c: ['c', 'd'],
};

console.log(obj);
ask();
