const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const numbers1 = [1,2,3,3,4,2,1,1,2,1]

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}

bubbleSort(numbers);
console.log(numbers);


bubbleSort(numbers1);
console.log(numbers1);