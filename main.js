import app from './src/app.js';
function main(){
    console.log('Fizz Buzz');
    console.log('Given an integer n, return a string array answer (1-indexed) where:');
    console.log('* answer[i] == "FizzBuzz" if i is divisible by 3and 5.');
    console.log('* answer[i] == "Fizz" if i is divisible by 3.');
    console.log('* answer[i] == "Buzz" if i is divisible by 5.');
    console.log('* answer[i] == i (as a string) if none of the above conditions are true.');
    app();
}

main();