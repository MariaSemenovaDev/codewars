//instruction:
//Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".


//solition
export function evenChars(string) {
    const evenArr = string.split('')

    return evenArr.length < 2 || evenArr.length > 100
        ? "invalid string"
        : evenArr.filter((el, index) => (index + 1) % 2 === 0)
}