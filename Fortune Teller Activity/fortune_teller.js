// TODO: Create a variable called "fortune" and assign a number between 0 - 10.
// YOUR CODE GOES HERE
var fortune = Math.floor(Math.random()*11 );
// TODO: Create a fortune teller game using conditional statements and comparison operators.
// Conditions
// 1. If fortune is greater than or equal to 0 and less than or equal to 3, then you have a low fortune.
// 2. If fortune is greater than 3 and less than or equal to 7, then you have an average fortune.
// 3. If fortune is greater than 7 and less than or equal to 10, then you have a good fortune.
// 4. If the fortune is out of range, then the fortune can't be read correctly.

// YOUR CODE GOES HERE

function fortuneTeller(b) {
    if (b >= 0 && b <= 3) {
        return 'Low Fortune!'
    } else if (b > 3 && b <= 7) {
        return 'Average Fortune.'
    } else if (b > 7 && b <= 10) {
        return 'Good Fortune!!'
    } else if (b > 10) {
        return 'Out of Range... Try Again.'
    }
}

console.log(fortuneTeller(fortune));
console.log(fortune)
