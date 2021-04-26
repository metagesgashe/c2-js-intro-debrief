
let myNumber = 10;

if (typeof myNumber !== 'number') {
    console.log('This is not a number');
} else if (myNumber % 3 === 0 && myNumber % 5 === 0) {
    console.log('GenBuzz');
} else if (myNumber % 5 === 0){
    console.log('Buzz');
} else if (myNumber % 3 === 0) {
    console.log('Gen');
} else {
    console.log (myNumber);
}

// switch statement

let item = 'shoes';

switch (item) {
    case 'shoes':
        console.log('Shoes are $50');
        break;
    case 'jeans':
        console.log('jeans are $25');
        break;
    case 'hats':
        console.log('hats are $12');
        break;
    case 'socks':
        console.log('socks are $2');
        break;
    default:
        console.log('Invalid Item');
        break;
}


// Random integer

console.log(Math.floor(Math.random() * (100 - 50) + 50))
