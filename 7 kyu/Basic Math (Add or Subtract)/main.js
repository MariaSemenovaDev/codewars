//task
// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.
//
//     Note: the input will not be empty.
//
//     Examples
// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"

//solution

function calculate(str) {
    const arr = str.split(/(plus|minus)/).map(el => el === 'plus' ? '+' : el === 'minus' ? '-' : el)
    let result = parseInt(arr[0]);

    for (let i = 1; i < arr.length; i += 2) {
        const operator = arr[i];
        const number = parseInt(arr[i + 1]);

        if (operator === '+') result += number;
        else if (operator === '-') result -= number;
    }
    return result.toString()
}

console.log(calculate("1plus2plus3minus4"))