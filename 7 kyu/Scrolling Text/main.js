// Let's create some scrolling text!
//
// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.
//
//     Example
// scrollingText("codewars") should return:
//
// [ "CODEWARS",
//     "ODEWARSC",
//     "DEWARSCO",
//     "EWARSCOD",
//     "WARSCODE",
//     "ARSCODEW"
//     "RSCODEWA",
//     "SCODEWAR" ]
// Good luck!
//
//     solution

function scrollingText(text){
    const result = []
    for (let i = 0; i < text.length; i++) {
        const element = text.slice(i) + text.slice(0, i)
        result.push(element.toUpperCase())
    }
    return result
}
