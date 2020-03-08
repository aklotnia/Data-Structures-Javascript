// Challenge 1: Remove Even Integers From an Array
// Given an array of size n, remove all even integers from it.
//Implement this solution in JavaScript and see if it runs without an error.

// My Solution: 
function removeEven(arr) {
    // 1 primitive
    let newArray = []
    // 1 + 3 * (n + 1) + 3n = 1 + 3n + 3 + 3n = 6n + 4
    for (let i = 0; i < arr.length; i++) {
        // n(2) = 2n
        if (arr[i] % 2) {
            // n(1 + 1) = n + n = 2n
            newArray.push(arr[i])
        }
    }    
    return newArray
}

// runtime complexity: 6n + 5 + 2n + n + n = 10n + 5
// Big O notation: O(n)

// Offered Solution:
function removeEven(arr) {
    return arr.filter((v => (v % 2) != 0))
}

// Big O notation: O(n)