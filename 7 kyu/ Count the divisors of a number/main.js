// Random tests go up to n = 500000, but fixed tests go higher.
//
// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.
//


function getDivisorsCnt(n){
    let count = 1;
    let i = 2;
    let temp = n;

    // Факторизуем число n
    while (i * i <= temp) {
        let power = 0;
        while (temp % i === 0) {
            temp = Math.floor(temp / i);
            power++;
        }
        count *= (power + 1);
        i++;
    }

    // Если остался простой делитель больше 1
    if (temp > 1) {
        count *= 2;
    }

    return count;
}