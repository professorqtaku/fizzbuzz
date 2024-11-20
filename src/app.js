import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const app = async () => {
    let isContinue = true;

    while(isContinue) {
        console.log('(Enter 0 to exit)');
        
        const number = await askNumber();
        if (number == 0) {
            // exit the while loop
            break;
        }
        // check if input is valid
        const isValid = !!number || Number(number) > 0;
        if(!isValid) {
            console.log('Invalid input!');
            continue; // back to the start of the loop
        }
        const answer = checkAnswer(number);
        console.log(answer);
    }
    rl.close();

}

const askNumber = async () => {
    return new Promise((resolve) => {
        rl.question('Enter a number: ', (input) => {
            const number = parseInt(input);
            if (isNaN(number)) {
                console.log('Please input a valid number!');
                resolve(-1);
            } else {
                resolve(number);
            }
        });
    });
}

const checkAnswer = (number) => {
    let output = '';
    for(let i = 1; i <= number; i++) {
        output += ' '; // add space
        // if the number is divisible by 3
        if(i%3 == 0 || i % 5 == 0) {
            if (i % 3 == 0) output += 'Fizz';
            if (i % 5 == 0) output += 'Buzz';
        }
        else {
            output += String(i);
        }
    }
    return output;
}

export default app;