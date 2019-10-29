// Write a method that doubles each element in an array.

function doubler(array) {
    return array.map((el) => {
        return el * 2
    }) 
}

// Write a method that returns the factors of a number in ascending order.
// Factors are numbers that divide evenly into a number.

function factors(num) {
    let array = []
    for (let i = 0; i <= num; i++) {
        if (num % i === 0) {
        array.push(i)
        }
    } 
    return array 
}

// Write a method that returns the median of elements in an array
// If the length is even, return the average of the middle two elements.

function median(arr) {
    arr.sort( function(a,b) {return a - b;} );
    let half = Math.floor(arr.length/2);

    if(arr.length % 2)
        return arr[half];
    else
        return (arr[half-1] + arr[half]) / 2.0;
}


// Write a method that returns the product of all numbers in an array.

function product(arr) {}



// Write a method that returns the largest number in an array.

function largest(arr) {}

// Write a method called 'and' that takes in two arguments. It should check
// return whether or not both arguments have a truthy value.

function and(arg1, arg2) {}

// Write a function that takes in an array and a target. Return whether or
// not the array contains the target

function includes(arr, target) {}

// Write a function that removes all the vowels from a string.

function disemvowel(str) {}

module.exports = { doubler, factors, median, product, largest, and, includes, disemvowel };
