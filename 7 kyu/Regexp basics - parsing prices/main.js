// Implement String#to_cents, which should parse prices expressed as $1.23 and return number of cents, or in case of bad format return nil.
//
//     In this kata, for a price to be considered valid, it must start with a dollar sign ($), followed immediately by a decimal number with exactly 2 decimal digits.
//
//     solution

String.prototype.toCents = function () {
    return /^\$\d+\.\d\d$/.test(this) ? +this.replace(/[$.]/g, '') : null;
};

// ^\$ - строка должна начинаться с символа $
// \d+ - затем идёт одна или несколько цифр (целая часть)
// \. - потом обязательная точка
// \d\d - ровно две цифры после точки (дробная часть)
// $ - и сразу конец строки (никаких других символов)