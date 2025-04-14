// Description:
//     How many urinals are free?
//     In men's public toilets with urinals, there is this unwritten rule that you leave at least one urinal free between you and the next person peeing. For example if there are 3 urinals and one person is already peeing in the left one, you will choose the urinal on the right and not the one in the middle. That means that a maximum of 3 people can pee at the same time on public toilets with 5 urinals when following this rule (Only 2 if the first person pees into urinal 2 or 4).
//
// Imgur Urinals
//
// Your task:
//     You need to write a function that returns the maximum of free urinals as an integer according to the unwritten rule.
//
//     Input
// A String containing 1s and 0s (Example: 10001) (1 <= Length <= 20)
// A one stands for a taken urinal and a zero for a free one.
//
//     Examples
// 10001 returns 1 (10101)
// 1001 returns 0 (1001)
// 00000 returns 3 (10101)
// 0000 returns 2 (1001)
// 01000 returns 1 (01010 or 01001)
//
// Note
// When there is already a mistake in the input string (for example 011), then return -1
//
// Have fun and don't pee into the wrong urinal ;)
//
// solution

function getFreeUrinals(urinals) {
    // Проверка на нарушение правил
    if (urinals.includes('11')) return -1;

    const arr = urinals.split('')
    let counter = 0

    for (let i = 0; i < arr.length; i++) {
        if (
            arr[i] === '0' // этот писсуар свободен
            && (i === 0 || arr[i - 1] !== '1') // слева никого нет
            &&   (i === arr.length - 1 || arr[i + 1] !== '1') // справа никого нет
        ) {
            arr[i] = '1'
            counter ++
        }

    }
    return counter
}

console.log(getFreeUrinals('01000'))

// Сколько писсуаров свободно?
//     В мужских общественных туалетах с писсуарами существует неписаное правило, согласно которому между вами и следующим мочащимся должен оставаться свободным хотя бы один писсуар. Например, если есть 3 писсуара и один человек уже мочится в левый, вы выберете писсуар справа, а не тот, что посередине. Это означает, что в общественных туалетах с 5 писсуарами при соблюдении этого правила одновременно могут мочиться максимум 3 человека (только 2, если первый человек мочится в писсуар 2 или 4).
//
//
//
// Ваша задача:
//     Вам нужно написать функцию, которая возвращает максимальное количество свободных писсуаров в виде целого числа в соответствии с неписаным правилом.
//
//     Вход
// Строка, содержащая 1 и 0 (пример: 10001) (1 <= Length <= 20)
// Единица означает занятый писсуар, а ноль - свободный.
//
//     Примеры
// 10001 возвращает 1 (10101)
// 1001 возвращает 0 (1001)
// 00000 возвращает 3 (10101)
// 0000 возвращает 2 (1001)
// 01000 возвращает 1 (01010 или 01001)
//
// Примечание
// Если во входной строке уже есть ошибка (например, 011), то верните -1
//
// Веселитесь и не писайте не в тот писсуар ;)