const a = 10;
const b = 20;
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter 1 for addition, 2 for subtraction, 3 for multiplication, 4 for division: ', (answer) => {
    answer  = parseInt(answer);
    switch (answer) {
        case 1:
            const sum = a + b;
            console.log(`the sum of number is ${sum}`);
            break;
        case 2:
            const sub = a - b;
            console.log(`the subtraction of number is ${sub}`);
            break;
        case 3:
            const product = a * b;
            console.log(`the product of number is ${product}`);
            break;
        case 4:
            const div = a / b;
            console.log(`the division of number is ${div}`);
            break;
        default:
            console.log('Invalid input');
            break;
           
    }
    rl.close();}
);