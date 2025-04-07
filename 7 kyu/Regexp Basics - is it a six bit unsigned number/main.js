// Implement String#six_bit_number?, which should return true if given object is a number representable by 6 bit unsigned integer (0-63), false otherwise.
//
//     It should only accept numbers in canonical representation, so no leading +, extra 0s, spaces etc.
//
//     solution
String.prototype.sixBitNumber = function() {
    const str = this.valueOf();
    if (str.length === 0) return false;
    if (!/^\d+$/.test(str)) return false;
    if (str.length > 1 && str[0] === '0') return false;
    const num = +str
    return num >= 0 && num <= 63;
}

console.log(console.log("06".sixBitNumber()));