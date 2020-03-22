function reverser(str) {
    let splitArray = str.split("")
    let targetedIndex = splitArray.length - 1
    let reversedArray = []
    let reversedIndex = 0
    
    for (let i = targetedIndex; i >= 0; i--) {
        reversedArray[reversedIndex] = splitArray[i]
        reversedIndex++
    }
    
    return reversedArray.join("")
}

function reverser2(str) {
    let splitArray = str.split("")
    
    for (let i = 0; i < splitArray.length; i++) {
        splitArray.unshift(splitArray.pop())
    }
    
    return splitArray.join("")
}

var rotate = function(nums, k) {
    console.log(typeof nums)
    console.log(typeof k)
    if (typeof nums !== 'object' || typeof nums.length !== 'number' || typeof k !== 'number' ) {
        return "What is you doing"
    }
};

rotate([1,2,3,4,5,6,7], 3)