//Write a program that, given a word, computes the scrabble score for that word.

//Напишите программу, которая, задав слово, вычисляет его оценку в скрэббле.

export function scrabbleScore(str) {
    const lettersValues = {
        "A": 1,
        "E": 1,
        "I": 1,
        "O": 1,
        "L": 1,
        "U": 1,
        "N": 1,
        "R": 1,
        "S": 1,
        "T": 1,
        "D": 2,
        "G": 2,
        "B": 3,
        "C": 3,
        "M": 3,
        "P": 3,
        "F": 4,
        "H": 4,
        "V": 4,
        "W": 4,
        "Y": 4,
        "K": 5,
        "J": 8,
        "X": 8,
        "Q": 10,
        "Z": 10,
    }
    const keys = Object.keys(lettersValues);
    const newStr = str.toUpperCase().split("")

    const endStr = newStr.map(el => keys.includes(el) ? lettersValues[el] : 0)
    return endStr.reduce((a, b) => a + b, 0)
}

console.log(scrabbleScore("MULTIBILLIONAIRE"))