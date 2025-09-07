// Given an array of integers.
//
//     Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
//
//     If the input is an empty array or is null, return an empty array.
//
//     Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
//

// Дано массив целых чисел.
//
//     Верните массив, в котором первый элемент — количество положительных чисел, а второй элемент — сумма отрицательных чисел. 0 не является ни положительным, ни отрицательным числом.
//
//     Если входные данные представляют собой пустой массив или имеют значение null, верните пустой массив.
//
//     Пример
// Для входных данных [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15] вы должны вернуть [10, -65].

function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) {
        return [];
    }
    const positive = input.filter(el => el > 0).length
    const negative = input.filter(el => el < 0).reduce((acc, current) => acc + current, 0)

    return [positive, negative]
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))