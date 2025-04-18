// Some people just have a first name; some people have first and last names and some people have first, middle and last names.
//
//     You task is to initialize the middle names (if there is any).
//
// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

// solution
function initializeNames(name){
    let names = name.split(' ')
    if (names.length <= 2) {
        return name
    } else {
        const firstName = names.shift() //тут превое имя
        const lastName = names.pop() //тут последнее
        names = names.map(word => `${word[0]}.`).join(' ')

        return `${firstName} ${names} ${lastName}`
    }

}