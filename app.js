//Function #1: Array Slice:

let foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
let mod1 = foods.slice(1, 4);
console.log(mod1);

//Function #2: Array Splice

let mod2 = foods.splice(2, 0, "noodles", "icecream");
console.log(foods);

//Function #3: Filter

let numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
let even = numberArray.filter(function (num) {
  return num % 2 == 0;
});
console.log(even);

let prime = numberArray.filter((num) => {
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
});
console.log(prime);

//Function #4: Reject

let notprime = numberArray.filter((num) => {
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return true;
  }
  return false;
});
console.log(notprime);

//Function #5: Lambda
let iseven = function (n) {
  return n.filter((n) => n % 2 == 0);
};
console.log(iseven(numberArray));

// Function #6: Map
let myArray = [11, 34, 20, 5, 53, 16];
let square = myArray.map(function (item) {
  return item * item;
});
console.log(square);

//Function #7: Reduce
const mArray = [2, 3, 5, 10];

function multiply(mArray) {
  return mArray.reduce((a, b) => {
    return a * b;
  });
}
console.log(multiply(mArray));