let array = new Array(10)


let inputAr = [{key: 4, value: "orange"}, {key: 4, value: "blue"}, {key: 4, value: "purple"}, {key: 4, value: "red"}, {key: 14, value: "black"}, {key: 4, value: "yellow"}, {key: 4, value: "tan"}, {key: 4, value: "beige"}, {key: 4, value: "white"}, {key: 4, value: "grey"}]

// Open Address practice
for (let i=0; i < inputAr.length; i++) {
    let obj = inputAr[i]
    debugger
    let initialIndex = obj["key"] % inputAr.length
    let index = initialIndex
    let found = false
    if (array[index]) {
        while (index < array.length && !found) {
            if (!array[index]) {
                array[index] = obj
                found = true
            }
            index++
        }
        index = 0
        while (index < initialIndex && !found) {
            if (!array[index]) {
                array[index] = obj
                found = true
            }
            index++
        }
    } else {
        array[index] = obj
    }
    console.log(array)
}


//Closed Address
class Node { 
    constructor(element) 
    { 
        this.element = element; 
        this.next = null
    } 
} 

class LinkedList { 
    constructor() 
    { 
        this.head = null; 
        this.size = 0; 
    } 
  
    // functions to be implemented 
    // add(element) 
    // insertAt(element, location) 
    // removeFrom(location) 
    // removeElement(element) 
  
    // Helper Methods 
    // isEmpty 
    // size_Of_List 
    // PrintList 
} 