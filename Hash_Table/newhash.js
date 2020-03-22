//find first duplicate number in an array

function firstDuplicateFinder(array) {
    
    if (typeof array !== 'object' || typeof array.length !== 'number') {
        return 'Input value is not an array.'
    }

    let characterMapper = {}

    for (let i = 0; i < array.length; i++) {
        if (characterMapper[array[i]]) {
            return array[i]
        } else {
            characterMapper[array[i]] = true
        }
    }

    return undefined
}