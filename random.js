// ! random funtion is coming 0.1 to 1 between
// ! Exmple 1
//const randomInt = Math.random();
const randomInt = Math.floor(Math.random() * 10);

//console.log("Random integer (1-10):", randomInt);
 
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('enter number which one is random ', (answer) => {
    answer = parseInt(answer);
 switch(true){
    case 1:
        answer===randomInt;
        console.log('you are right');
        break;
        default:
            console.log(`you are entered wrong try again${randomInt}`);
            break;

 }

rl.close();
});