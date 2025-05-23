// Every month, a random number of students take the driving test at Fast & Furious (F&F) Driving School. To pass the test, a student cannot accumulate more than 18 demerit points.
//
//     At the end of the month, F&F wants to calculate the average demerit points accumulated by ONLY the students who have passed, rounded to the nearest integer.
//
//     Write a function which would allow them to do so. If no students passed the test that month, return 'No pass scores registered.'.
//
//
//     Example:
//
// [10,10,10,18,20,20] --> 12

// solution
function passed (list) {
    const filterList = list.filter(el => el <= 18)
    return filterList.length === 0 ? 'No pass scores registered.' :  Math.round((filterList.reduce((acc, num) => acc + num ,0)) / filterList.length)
}

console.log(passed([10,10,10,18,20,20]));
