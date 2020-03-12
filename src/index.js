import 'dotenv/config';
import inquirer from 'inquirer';

console.log(process.env.MY_SECRET);

const a = 'a';

const b = 'b';

const obj = {
  a,
  b,
  c: ['c', 'd'],
};

console.log(obj);

function ask() {
  inquirer
    .prompt([
      {
        type: 'number',
        name: 'numChoice',
        message: 'What is your chosen number?',
      },
    ])
    .then(ans => {
      if (Number.isNaN(ans.numChoice)) {
        console.log('Please enter a number.');
        ask();
      } else {
        console.log(`Your number is: ${ans.numChoice}`);
      }
    })
    .catch(err => {
      if (err.isTtyError) {
        console.log('TtyError: Check environment, e.g. process.stdout.isTTY');
      } else {
        console.log('Other error');
      }
    });
}

ask();
