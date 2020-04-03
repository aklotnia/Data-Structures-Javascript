function FactorialIterative(number) {
    let result = number;
    let i = number
    while (i > 1) {
        i--
        result = result * i
    }
    return result
}


let value = 1
function FactorialRecursive(number) {
    if (number === 0) {
        return value
    } else {
        value = value * number
        number--
        return FactorialRecursive(number)
    }
}