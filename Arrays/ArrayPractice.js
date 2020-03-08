// Useful functions and time complexity

// array.push(item)
// appends an item to the end of an array with O(1) time complexity

// array.pop()
// removes and returns the final item of the array with O(1) time complexity

// array.shift()
// removes and returns the first item of an array with linear time complexity (first item needs to be removed and the rest of the items are shifted to the left.)

// array.unshift(item)
// adds the item to the beggining of the array with linear time complexity (array length needs to be updated, all elements are shifted one index to the right, and then the unshifted item is added at index 0)

// delete array[2]
// destrtuctively removes the item from the array and replaces the item with an empty item at the index

// array.reverse()
// reverses the elements in the array with O(n) time complexity

// array.splice(startIndex, numRemovals, item0, item1, item2, etc.)
// splice can be used to either remove or add elements to non 0 indices of arrays, or both simulataneously
// linear time complexity

// array.slice(startIndex, endIndex(exclusive))
// slice can be used with just the first param to slice from starting index to the end of the array, or use both params to slice from the starting index to the ending index exclusive.
// slice is nondestructive
// linear time complexity

// var array = [1,'two',3,4,5, 'six','seven',8,'nine',10]
// for(let ele of array){
//     console.log(ele)
//   }
// for... of... loop
// linear time complexity

// let and const are block scoped, meaning localized to the block. const and let cant be redeclared.
// if var is declared anywhere except in a function, it will exist in global scope. Var can be redeclared.