// Given a string of space separated words, return the longest word.
//     If there are multiple longest words, return the rightmost longest word.
//
//     Examples
// "red white blue"  =>  "white"
// "red blue gold"   =>  "gold"

// solution
function longestWord(stringOfWords) {
    return  stringOfWords.split(" ").reduce((acc, num) => acc.length > num.length ? acc : num)
}