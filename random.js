// ! random funtion is coming 0.1 to 1 between
// ! Exmple 1
//const randomInt = Math.random();


// const glassone = Math.floor(Math.random() * 10);
// const glasstwo = Math.floor(Math.random() * 10);
// const glassthree = Math.floor(Math.random() * 10);
// const glassfour = Math.floor(Math.random() * 10);

//console.log("Random integer (1-10):", randomInt);
 
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const r2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('put luck in number between 1-10 ', (answer) => {
    answer = parseInt(answer);
     r2.question('select glass 1,2,3,4 ', (glass) => {
        glass = parseInt(glass);


 switch(glass){
    case 1:
        const glassone = Math.floor(Math.random() * 10);
        if( glassone===answer){
            console.log('you are right');}
            else{
                console.log('you are wrong');
            }
            break;
    case 2:
        const glasstwo = Math.floor(Math.random() * 10);
        if( glasstwo===answer){
            console.log('you are right');}
            else{
                console.log('you are wrong');
            }
            break;
    case 3:
        const glassthree = Math.floor(Math.random() * 10);
        if( glassthree===answer){
            console.log('you are right');}
            else{
                console.log('you are wrong');
            }
            break;
    case 4:
        const glassfour = Math.floor(Math.random() * 10);   
       if( glassfour===answer){
        console.log('you are right');}
        else{
            console.log('you are wrong');
        }
        break;

        default:
            console.log(`you are entered wrong glass try  again`);
            break;

      }

rl.close();
})});