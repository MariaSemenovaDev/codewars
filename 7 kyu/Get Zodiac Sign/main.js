// Your task is to get Zodiac Sign using input day and month.
//
//     For example:
//
//     getZodiacSign(1,5) => 'Taurus'
// getZodiacSign(10,10) => 'Libra'
// Correct answers are (preloaded):
//
// const signs = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius']
// P.S. Each argument is correct integer number.
//
//     WESTERN ASTROLOGY STAR SIGN DATES
//
// Aries (March 21-April 19)
// Taurus (April 20-May 20)
// Gemini (May 21-June 20)
// Cancer (June 21-July 22)
// Leo (July 23-August 22)
// Virgo (August 23-September 22)
// Libra (September 23-October 22)
// Scorpio (October 23-November 21)
// Sagittarius (November 22-December 21)
// Capricorn (December 22-January 19)
// Aquarius (January 20 to February 18)
// Pisces (February 19 to March 20)

// solution
const getZodiacSign = (day, month) => {

    switch (month) {
        case 1:  // Январь
            return (day <= 19) ? "Capricorn" : "Aquarius";
        case 2:  // Февраль
            return (day <= 18) ? "Aquarius" : "Pisces";
        case 3:  // Март
            return (day <= 20) ? "Pisces" : "Aries";
        case 4:  // Апрель
            return (day <= 19) ? "Aries" : "Taurus";
        case 5:  // Май
            return (day <= 20) ? "Taurus" : "Gemini";
        case 6:  // Июнь
            return (day <= 20) ? "Gemini" : "Cancer";
        case 7:  // Июль
            return (day <= 22) ? "Cancer" : "Leo";
        case 8:  // Август
            return (day <= 22) ? "Leo" : "Virgo";
        case 9:  // Сентябрь
            return (day <= 22) ? "Virgo" : "Libra";
        case 10: // Октябрь
            return (day <= 22) ? "Libra" : "Scorpio";
        case 11: // Ноябрь
            return (day <= 21) ? "Scorpio" : "Sagittarius";
        case 12: // Декабрь
            return (day <= 21) ? "Sagittarius" : "Capricorn";
        default:
            return "Invalid date";
    }
}

console.log(getZodiacSign(25, 11));