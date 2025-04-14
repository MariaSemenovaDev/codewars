// Description:
//     You've been collecting change all day, and it's starting to pile up in your pocket, but you're too lazy to see how much you've found.
//
//     Good thing you can code!
//
//     Complete the function to return a dollar amount of how much change you have!
//
//     Valid types of change include:
//
//     penny: 0.01
// nickel: 0.05
// dime: 0.10
// quarter: 0.25
// dollar: 1.00
// These amounts are already preloaded as floats into the CHANGE object for you to use!
//
//     You should return the total in the format $x.xx.
//
//     Examples:
//
// "nickel penny dime dollar" --> "$1.16"
// "dollar dollar quarter dime dime" --> "$2.45"
// "penny" --> "$0.01"
// "dime" --> "$0.10"
// Warning, some change may amount to over $10.00!

// solution

// Вы весь день собирали мелочь, и она уже начала скапливаться у вас в кармане, но вам лень посмотреть, сколько вы нашли.
//
//     Хорошо, что вы умеете кодить!
//
//     Заполните функцию, чтобы вернуть долларовое значение количества мелочи!
//
//     Допустимые типы мелочи:
//
//     пенни: 0,01
// никель: 0,05
// десятицентовик: 0.10
// четвертак: 0.25
// доллар: 1.00
// Эти суммы уже предварительно загружены в объект CHANGE в виде плавающих значений, и вы можете их использовать!
//
//     Вы должны вернуть итоговую сумму в формате $x.xx.
//
//     Примеры:
//
// "nickel penny dime dollar" --> "$1.16"
// "dollar quarter dime dime" --> "$2.45"
// "penny" --> "$0.01"
// "dime" --> "$0.10"
// Внимание, некоторые сдачи могут составлять более $10.00!

function changeCount( str ){
    const change = {
        penny: 0.01,
        nickel: 0.05,
        dime: 0.10,
        quarter: 0.25,
        dollar: 1.00,
    }
    const coins = str.split(" ")
    let sum = coins.map(coin => change[coin]).reduce((acc, coin) => acc + coin, 0)
    return '$' + sum.toFixed(2)
}

console.log(changeCount('dollar dollar dollar dollar dollar dollar dollar dollar dollar dollar penny'))