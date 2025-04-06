// Description:
//     In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.
//
//     For example:
//
//     solve([15,11,10,7,12]) = [15,7,12,10,11]
// The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.
//
//     More examples in the test cases.
//
//     Good luck!

// solution
function solve(arr){
    const minFirst = [...arr].sort((a, b) => a - b); // по возрастанию
    const maxFirst = [...arr].sort((a, b) => b - a); // по убыванию

    const result = []

    for (let i = 0; i < Math.ceil(arr.length / 2); i++) {
        // Сначала добавляем текущий максимальный элемент
        if (maxFirst[i] !== undefined) {
            result.push(maxFirst[i]);
        }

        // Затем добавляем текущий минимальный элемент, если:
        // 1. Это не тот же элемент (для нечётных массивов)
        // 2. Результат ещё не заполнен полностью
        if (i !== minFirst.length - 1 - i &&
            minFirst[i] !== undefined &&
            result.length < arr.length) {
            result.push(minFirst[i]);
        }
    }

    return result
};