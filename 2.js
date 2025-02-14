const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const glassone = Math.floor(Math.random() * 10) + 1; 
const glasstwo = Math.floor(Math.random() * 10) + 1;
const glassthree = Math.floor(Math.random() * 10) + 1; 
const glassfour = Math.floor(Math.random() * 10) + 1; 

rl.question('Put your lucky on any  number between 1-10: ', (answer) => {
    answer = parseInt(answer);
    
    rl.question('Select glass 1, 2, 3, or 4: ', (glass) => {
        glass = parseInt(glass);
        const glass1 = this.glassone;
        switch(glass) {
            case 1:
            
                if (glassone === answer) {
                    console.log('You are right!');
                } else {
                    console.log('You are wrong!');
                }
                break; 

            case 2:
             
                if (glasstwo === answer) {
                    console.log('You are right!');
                } else {
                    console.log('You are wrong!');
                }
                break; 
            case 3:
               
                if (glassthree === answer) {
                    console.log('You are right!');
                } else {
                    console.log('You are wrong!');
                }
                break;

            case 4:
        
                if (glassfour === answer) {
                    console.log('You are right!');
                } else {
                    console.log('You are wrong!');
                }
                break; 

            default:
                console.log('You entered an invalid glass. Try again!');
                break;
        }
        console.log(`You selected glass ${glass}`);
        console.log(`glass one contains:${glassone}`);
         console.log(`glass two contains:${glasstwo}`);
        console.log(`glass three contains:${glassthree}`);
       console.log(`glass four contains:${glassfour}`);

        rl.close(); 
       
    });
});


