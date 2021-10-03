// Array/Object spread operator
// https://oprearocks.medium.com/what-do-the-three-dots-mean-in-javascript-bc5749439c9a

const adrian = {
    fullName: 'Adrian Oprea',
    occupation: 'Software developer',
    age: 31,
    website: 'https://oprea.rocks'
};

const bill = {
    ...adrian,
    fullName: 'Bill Gates',
    website: 'https://microsoft.com'
};

console.log(bill);


const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [ ...numbers1, 1, 2, 6,7,8];
console.log(numbers2);